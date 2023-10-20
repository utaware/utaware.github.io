---
date: 2022-06-11
category:
  - web
tag:
  - HTML
---

# script 标签中的属性

## async && defer

::: tabs

@tab normal

```html
<script src="script.js"></script>
```

浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析。

@tab async

```html
<script src="script.js" async></script>
```

当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析。因为执行时间不确定，所以 async 是不可控的，如果存在多个 async-script 的时候，它们之间的执行顺序也不确定，完全依赖于网络传输结果，谁先到执行谁。

@tab defer

```html
<!-- defer 属性对模块脚本没有作用 —— 默认defer -->
<script src="script.js" defer></script>
```

当浏览器遇到带有 defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码。如果存在多个 defer-script 标签，浏览器(IE9 及以下除外)会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。

:::

| script 标签      | JS 执行顺序      | 是否阻塞解析 HTML      |
| ---------------- | ---------------- | ---------------------- |
| `<script>`       | 在 HTML 中的顺序 | 阻塞                   |
| `<script async>` | 网络请求返回顺序 | 可能阻塞，也可能不阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞                 |

### 区别

- defer 是“渲染完再执行”，async 是“下载完就执行”。
- 如果有多个 defer 脚本，会按照它们在页面出现的顺序加载，而多个 async 脚本是不能保证加载顺序的；

**注意：如果同时指定了两个属性，则会遵从 async 属性而忽略 defer 属性**

## src

这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的 script 元素标签内不应该再有嵌入的脚本。

## type

该属性定义 script 元素包含或 src 引用的脚本语言。属性的值为 MIME 类型，但大部分已不赞成使用，如果不是支持的类型所包含的内容则会被当做数据块而不被执行。如果属性为 module，代码会被当做 javascript 模块。

## crossorigin

相当于开启了 cors 校验，跨域的 script 资源在运行出错的时候，window.onerror 可以捕获到完整的错误信息。

- anonymous - 不携带 cookie 等认证信息
- use-credentials - 携带 cookie 等认证信息

## integrity

指定了该值之后，浏览器在拿到资源后会用 integrity 指定的签名算法对资源进行计算并与 摘要签名内容 进行比较，如果值不统一，说明是经过篡改的，就不会执行该资源
