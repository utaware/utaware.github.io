---
date: 2024-03-29
category:
  - web
tag:
  - optimize
---

# link标签资源预加载

## preload

`<link>` 元素的 `rel` 属性的 `preload` 值允许在 `HTML` 的 `<head>` 中声明获取请求，指定页面很快就需要的资源，这些资源是希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“load”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

**示例**

```html
<!-- 需加载跨域的资源列表，需要正确设置CORS -->
<link rel="preload" as="script" href="foo.js">
<link rel="preload" as="style" href="bar.css">
<!-- 预加载font和fetch资源需要设置crossorigin属性 -->
<!-- 即使获取请求不跨域也需要设置 -->
<link
  rel="preload"
  href="fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
<!-- 字体文件必须使用匿名模式的CORS进行获取 -->
```

### as

- audio：音频文件，通常在 `<audio>` 中使用。
- document：用于嵌入在 `<frame>` 或 `<iframe`> 中的 HTML 文档。
- embed：用于嵌入在 `<embed>` 元素中的资源。
- fetch：通过 `fetch` 或 `XHR` 请求访问的资源，例如 `ArrayBuffer`、`WebAssembly` 二进制文件或 JSON 文件。
- font：字体文件。
- image：图像文件。
- object：要嵌入在 `<object>` 元素中的资源。
- script：JavaScript 文件。
- style：CSS 样式表。
- track：WebVTT 文件。
- worker：JavaScript web worker 或 shared worker。
- video：视频文件，通常在 `<video>` 中使用。

### type

`<link>` 元素可以接受一个 type 属性，其中包含元素指向的资源的 MIME。类型浏览器将使用type属性的值来确定是否支持该资源，如果不支持，则会忽略它，仅在支持时才会下载它。

### media

```html
<link
  rel="preload"
  href="bg-image-narrow.png"
  as="image"
  media="(max-width: 600px)" />
<link
  rel="preload"
  href="bg-image-wide.png"
  as="image"
  media="(min-width: 601px)" />
```

## modulepreload

```js
// 提前加载js模块
<link rel="modulepreload " href="main.js">
```

## prefetch

利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档，并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中，浏览器会给prefetch的资源比preload的资源更低的优先级(当前页优先)，当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

```html
<!-- link标签 -->
<link rel="prefetch" href="/images/big.jpeg" />
<!-- HTTP Link: header -->
Link: </images/big.jpeg>; rel=prefetch
<!-- meta标签 -->
<meta http-equiv="Link" content="</images/big.jpeg>; rel=prefetch">
<!-- 区分预取请求 -->
X-moz: prefetch
```

## preconnect

> 与 DNS 预解析类似，Preconnect 不仅完成 DNS 预解析，同时还将进行 TCP 握手和建立传输层协议

- http: DNS 解析 + TCP 三次握手
- https: DNS 解析 + TCP 三次握手 + TLS/SSL 握手

```html
<link rel="preconnect" href="http://example.com">
```

## prerender

prerender 会收集用户接下来要访问的页面，并且在浏览器中创建一个隐藏 Tab，并且在隐藏 Tab 中提前加载页面。当跳转到此页面时，相当于直接切换到隐藏 Tab(并不一定等价于直接使用该 Tab，但通过复用加速其加载)。由于有可能浪费用户的带宽，Chrome 将 prerender 视为 NoState 预取。

## subresource

非标准规范，也无法确定资源的优先级(as 当时还不存在)
