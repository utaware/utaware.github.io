---
date: 2022-06-02
category:
  - browser
tag:
  - http
---

# 浏览器跨域

## 同源策略

用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介

> 协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域

```js
// port: { http: 80, https: 443 }
const { protocol, host, port } = window.location
```

| url-A | url-B | 说明 | 是否允许通信 |
| -- | -- | -- | -- |
| http://www.a.com | http://www.a.com | 不同协议 | x |
| http://www.a.com | http://www.a.com:8000 | 不同端口 | x |
| http://www.a.com | http://www.b.com | 不同域名 | x |
| http://www.a.com | http://70.32.92.18 | 域名和对应ip | x |
| http://www.a.com | http://a.com | 二级域名 | x |
| http://www.a.com | http://sub.a.com | 子域不同 | x |

## 解决方案

* 利用`script`没有跨域限制且内容插入文档后能被作为js脚本运行
* 调整`cors`策略配置，取消同源策略的限制
* 使用`postMessage`的特性进行跨域脚本通信
* 使用`websocket`协议
* 通过`iframe`为载体加载跨域页面修改响应公共属性(name, hash, domain)
* 通过`proxy`将跨域请求转换为同域请求

### 1.jsonp

> 利用`script`标签没有跨域限制的特性，可以请求得到从其他来源动态产生的数据。而因为`script`标签的内容在插入文档后会被执行，返回定义好的函数调用形式完成响应。

```js
// index.html
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, callback }
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}

jsonp({
  url: 'http://localhost:3000/',
  params: { name: 'hello' },
  callback: 'show'
}).then(data => {
  console.log(data)
})
// server.js
const app = require('express')()
const port = 3000

app.get('/', function(req, res) {
  let { name, callback } = req.query
  res.end(`${callback}(${name})`)
})

app.listen(port)
```

### 2.CORS

> 服务端设置Access-Control-Allow-Origin就可以开启CORS。该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为**简单请求**和**复杂请求**。

**简单请求**

1. 使用以下方法

* GET
* HEAD
* POST

2. 人为设置以下集合外的请求头

* Accept
* Accept-Language
* Content-Language
* DPR
* Downlink
* Save-Data
* Viewport-Width
* Width

3. Content-Type的值仅限于下列三者之一

* text/plain
* multipart/form-data
* application/x-www-form-urlencoded

4. 请求中的任意XMLHttpRequestUpload对象均没有注册任何事件监听器；XMLHttpRequestUpload对象可以使用XMLHttpRequest.upload属性访问。

5. 请求中没有使用ReadableStream对象。

**复杂请求**

不符合以上条件的请求即是复杂请求了。复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求，该请求是option方法的，通过该请求来知道服务端是否允许跨域请求。

```js
// index.html
let xhr = new XMLHttpRequest()
document.cookie = 'name=xiamen' // cookie不能跨域
xhr.withCredentials = true // 前端设置是否带cookie
xhr.open('PUT', 'http://localhost:4000/getData', true)
xhr.setRequestHeader('name', 'xiamen')
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response)
      //得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader('name'))
    }
  }
}
xhr.send()
//server1.js - index.html
let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000);
//server2.js - cors
let express = require('express')
let app = express()
let whitList = ['http://localhost:3000'] //设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
      res.end() // OPTIONS请求不做任何处理
    }
  }
  next()
})
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.setHeader('name', 'jw') //返回一个响应头，后台需设置
  res.end('我不爱你')
})
app.get('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
})
app.use(express.static(__dirname))
app.listen(4000)
```

### 3.postMessage

> postMessage[^MDN:postMessage]是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一。postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

```html
<!-- http://localhost:3000/a.html -->
<iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()"></iframe> //等它加载完触发一个事件
<!-- 内嵌在http://localhost:3000/a.html -->
<script>
function load() {
  let frame = document.getElementById('frame')
  frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //发送数据
  window.onmessage = function(e) { //接受返回数据
    console.log(e.data) //我不爱你
  }
}
</script>
<!-- http://localhost:4000/b.html -->
<script>
window.onmessage = function(e) {
  console.log(e.data) //我爱你
  e.source.postMessage('我不爱你', e.origin)
}
</script>
```

### 4.websocket

> Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的双全工(同时可进行双向数据传输)通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于TCP协议。不是通过xhr.XMLHttpRequest请求，因此不受限制。

```html
<!-- socket.html -->
<script>
let socket = new WebSocket('ws://localhost:3000');
  socket.onopen = function () {
  socket.send('我爱你');//向服务器发送数据
  }
  socket.onmessage = function (e) {
  console.log(e.data);//接收服务器返回的数据
}
</script>
```

```js
// server.js
let express = require('express');
let app = express();
let WebSocket = require('ws');//记得安装ws
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('我不爱你')
  });
})
```

### 5.iframe

#### window.name

> window对象有一个name属性，该属性有一个特征：即在一个窗口的生命周期内，窗口载入的所有的页面都是共享一个window.name的，每一个页面对window.name都有读写的权限，window.name是持久的存在于一个窗口载入的所有页面中的，并不会因为新的页面的载入而被重置。window.name可以存储不超过2M的数据，传递的数据都会变成string类型。

通过iframe标签跨域先跨域加载其他页面修改window.name值。之后再在同域下读取name值。

```html
<!-- // http://localhost:3000/a.html -->
<iframe src="http://localhost:4000/c.html" frameborder="0" onload="load()" id="iframe"></iframe>
<script>
let first = true
// onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
function load() {
  if (first) {
    // 第1次onload(跨域页)成功后，切换到同域代理页面
    let iframe = document.getElementById('iframe');
    iframe.src = 'http://localhost:3000/b.html';
    first = false;
  } else {
    // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
    console.log(iframe.contentWindow.name);
  }
}
</script>

<!-- http://localhost:4000/c.html -->
<script>
  window.name = '我不爱你'
</script>

<!-- http://localhost:3000/b.html -->
<script>
  console.log('from b.html:', window.name)
</script>
```

#### location.hash

> 利用iframe的location.hash传值，相同域之间直接js访问来通信

1. 为A页面注册`onhashchange`事件观测hash变化 -> 响应
2. A: iframe加载跨域页面C-`#A2C` -> 向C传递消息
3. C: iframe与A同域页面B-`#C2A` -> 向A响应信息
4. B: 逆向操作A页面hash变化触发change事件 -> 同域操作

```html
<!-- http://localhost:3000/a.html -->
<iframe src="http://localhost:4000/c.html#iloveyou"></iframe>
<script>
  window.onhashchange = function () { //检测hash的变化
    console.log(location.hash);
  }
</script>

<!-- http://localhost:4000/c.html -->
<script>
console.log(location.hash);
let iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3000/b.html#idontloveyou';
document.body.appendChild(iframe);
</script>

<!-- http://localhost:3000/b.html -->
<script>
window.parent.parent.location.hash = location.hash
</script>
```

#### Document.domain

> `Document.domain`(已废弃)[^MDN:domain] - 获取/设置当前文档的原始域部分

::: warning

只能用于二级域名相同的情况(协议、端口号相同)

:::

对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议(通常为 https)，端口号，以及主机 (两个页面的模数 Document.domain设置为相同的值)时，这两个脚本才能相互通信。如果两个脚本都通过js强制设置document.domain为基础主域，就实现了同域。

```html
// a.html
<body>
 helloa
  <iframe src="http://b.zf1.cn:3000/b.html" frameborder="0" onload="load()" id="frame"></iframe>
  <script>
    document.domain = 'zf1.cn'
    function load() {
      console.log(frame.contentWindow.a);
    }
  </script>
</body>

// b.html
<body>
   hellob
   <script>
     document.domain = 'zf1.cn'
     var a = 100;
   </script>
</body>
```

[^MDN:postMessage]: [MDN:postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)
[^MDN:domain]: [MDN:domain](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/domain)

### 6. 代理

> 让发送出去的请求代理成是本域的

* [Nginx反向代理](https://zhuanlan.zhihu.com/p/464965616)
