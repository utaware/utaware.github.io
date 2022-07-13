---
date: 2022-07-11
isOriginal: false
category:
  - web
tag:
  - hybird
---

# JSBridge原理

主要是给JavaScript提供调用Native功能的接口，让混合开发中的『前端部分』可以方便地使用地址位置、摄像头甚至支付等Native功能。核心是构建Native与非Native间消息通信的通道，而且是双向通信的通道。

## JavaScript 调用 Native

* 注入 API
* 拦截 URL SCHEME

### 注入API

> 通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。

### 拦截URL SCHEME

> Web 端通过某种方式（如iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。

**缺点**

* 使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患
* 创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长

::: tip 注

* 有些方案为了规避 url 长度隐患的缺陷，在 iOS 上采用了使用 Ajax 发送同域请求的方式，并将参数放到 head 或 body 里。这样，虽然规避了 url 长度的隐患，但是 WKWebView 并不支持这样的方式。
* 为什么选择 iframe.src 不选择 locaiton.href ？因为如果通过 location.href 连续调用 Native，很容易丢失一些调用。

:::

## Native 调用 JavaScript

> 执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。

## 接口实现

```js
(function () {
    var id = 0,
        callbacks = {},
        registerFuncs = {};

    window.JSBridge = {
        // 调用 Native
        invoke: function(bridgeName, callback, data) {
            // 判断环境，获取不同的 nativeBridge
            var thisId = id ++; // 获取唯一 id
            callbacks[thisId] = callback; // 存储 Callback
            nativeBridge.postMessage({
                bridgeName: bridgeName,
                data: data || {},
                callbackId: thisId // 传到 Native 端
            });
        },
        receiveMessage: function(msg) {
            var bridgeName = msg.bridgeName,
                data = msg.data || {},
                callbackId = msg.callbackId, // Native 将 callbackId 原封不动传回
                responstId = msg.responstId;
            // 具体逻辑
            // bridgeName 和 callbackId 不会同时存在
            if (callbackId) {
                if (callbacks[callbackId]) { // 找到相应句柄
                    callbacks[callbackId](msg.data); // 执行调用
                }
            } elseif (bridgeName) {
                if (registerFuncs[bridgeName]) { // 通过 bridgeName 找到句柄
                    var ret = {},
                        flag = false;
                    registerFuncs[bridgeName].forEach(function(callback) => {
                        callback(data, function(r) {
                            flag = true;
                            ret = Object.assign(ret, r);
                        });
                    });
                    if (flag) {
                        nativeBridge.postMessage({ // 回调 Native
                            responstId: responstId,
                            ret: ret
                        });
                    }
                }
            }
        },
        register: function(bridgeName, callback) {
            if (!registerFuncs[bridgeName])  {
                registerFuncs[bridgeName] = [];
            }
            registerFuncs[bridgeName].push(callback); // 存储回调
        }
    };
})();
```

[原文连接][juejin]

[juejin]: https://juejin.cn/post/6844903585268891662
