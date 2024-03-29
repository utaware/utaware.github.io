---
date: 2022-07-17
category:
  - web
tag:
  - optimize
---

# DNS预解析

> dns-prefetch(DNS预获取)是前端网络性能优化的一种措施。它根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短DNS解析时间，进而提高网站的访问速度。

每当浏览器从（第三方）服务器发送一次请求时，都要先通过DNS解析将该跨域域名解析为 IP地址，然后浏览器才能发出请求。
如果某一时间内，有多个请求都发送给同一个服务器，那么DNS解析会多次并且重复触发。这样会导致整体的网页加载有延迟的情况。
我们知道，虽然DNS解析占用不了多大带宽，但是它会产生很高的延迟，尤其是对于移动网络会更为明显。

因此，为了减少DNS解析产生的延迟，我们可以通过dns-prefetch预解析技术有效地缩短DNS解析时间。

DNS Prefetch 应该尽量的放在网页的前面，推荐放在 `<meta charset="UTF-8">` 后面

```html
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//a.com">
<link rel="dns-prefetch" href="//b.com">
<link rel="dns-prefetch" href="//c.com">
```

1. 用meta信息来告知浏览器, 当前页面要做DNS预解析
2. 在页面header中使用link标签来强制对DNS预解析:

## 原理

当浏览器访问一个域名的时候，需要解析一次DNS，获得对应域名的ip地址。

*   浏览器缓存
*   系统缓存
*   路由器缓存
*   ISP(运营商)DNS缓存
*   根域名服务器
*   顶级域名服务器
*   主域名服务器

按照以上顺序逐步读取缓存，直到拿到IP地址。

`dns-prefetch`就是在将解析后的IP缓存在系统中。

这样，dns-prefetch就有效地缩短了DNS解析时间。因为，在本地操作系统做了DNS缓存，使得DNS在解析的过程中，提前在系统缓存中找到了对应IP。

这样一来， 后续的解析步骤就不用执行了，进而也就缩短了DNS解析时间。

假如浏览器首次将一个域名解析为IP地址，并缓存至操作系统，那么下一次DNS解析时间可以低至0-1ms。

倘若结果不缓存在系统，那么就需要读取路由器的缓存，进而后续的解析时间最小也要约15ms。

如果路由器缓存也不存在，则需要读取ISP（运营商）DNS缓存，一般像taobao.com、baidu.com这些常见的域名，读取ISP（运营商）DNS缓存需要的时间在80-120ms，如果是不常见的域名，平均需要200-300ms。

一般来说，大部分的网站到运营商这块都能找到IP。

那也就是说，dns-prefetch可以给DNS解析过程带来15-300ms的提升，尤其是一些大量引用很多其他域名资源的网站，提升效果就更加明显了

## 浏览器DNS缓存

现代浏览器为了优化DNS解析，也设有了浏览器DNS缓存。

每当在首次DNS解析后会对其IP进行缓存。至于缓存时长，每种浏览器都不一样，比如Chrome的过期时间是1分钟，在这个期限内不会重新请求DNS。

而dns-prefetch 相当于在浏览器缓存之后，在本地操作系统中做了DNS缓存，一般来说，DNS在系统的缓存时间是大于浏览器的。

::: tip

每当Chrome浏览器启动的时候，就会自动的快速解析浏览器最近一次启动时记录的前10个域名。所以经常访问的网址就不存在DNS解析的延迟，进而打开速度更快。

TTL(Time-To-Live)，就是一条域名解析记录在DNS服务器中的存留时间

:::

*   **浏览器DNS缓存的时间跟DNS服务器返回的TTL值无关**, 它的缓存时间取决于浏览器自身设置。

*   **系统缓存会参考DNS服务器响应的TTL值，但是不完全等于TTL值**。

国内和国际上很多平台的TTL值都是以秒为单位的，很多的默认值都是3600，也就是默认缓存1小时。

## 缺点

> 过多的预获取会导致过量的DNS解析，对网络是一种负担。

## 拓展

**预连接 rel="preconnect"**

> 与 DNS 预解析类似，Preconnect 不仅完成 DNS 预解析，同时还将进行 TCP 握手和建立传输层协议

```html
<link rel="preconnect" href="http://example.com">
```

**预获取 rel="prefetch"**

> 如果我们确定某个资源（图片/脚本文件/css文件）将来一定会被使用到，我们可以让浏览器预先请求该资源并放入浏览器缓存中。与 DNS 预解析不同，预获取真正请求并下载了资源，并储存在缓存中

```html
<link rel="prefetch" href="image.png / test.js / test.css">
```

**预渲染 rel="prerender"**

> 对一个用户将来一定会打开的 tab 页：将【下载所有资源、创建 DOM 结构、完成页面布局、应用 CSS 样式和执行 JavaScript 脚本】等。当用户真正访问该链接时，隐藏的页面就切换为可见，使页面看起来就是瞬间加载完成一样

```html
<!-- 前提是：用户在将来一定会打开该tab页，否则会造成不必要的资源浪费 -->
<link rel="prerender" href="http://example.com">
```

## 最佳实践

1. `dns-prefetch` 仅对跨域域上的 DNS查找有效，因此请避免使用它来指向相同域。这是因为，到浏览器看到提示时，您站点域背后的IP已经被解析。
2. 除了link 还可以通过使用[HTTP链接](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link)字段将 dns-prefetch（以及其他资源提示）指定为 HTTP标头：
3. 考虑将 dns-prefetch 与 preconnect(预连接)提示配对。

```html
<!-- preconnect 提示最好仅用于最关键的连接 -->
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<link rel="dns-prefetch" href="https://fonts.gstatic.com/">
```
