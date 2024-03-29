---
date: 2022-07-18
category:
  - web
tag:
  - http
---

# 从输入 URL 到页面呈现

- URL
- DNS
  - CDN
  - DNS 缓存
  - DNS 均衡负载
  - [DNS 预解析](./HTTP-06.md)
- HTTP
  - [HTTP 请求方法](./HTTP-05.md)
  - [HTTP 请求状态码](./HTTP-01.md)
  - [HTTP 请求头信息](./HTTP-02.md)
  - [HTTP 请求跨域](./HTTP-03.md)
    - jsonp
    - postMessage
    - cors
    - proxy
    - iframe
      - domain
      - window.name
      - hash
  - [HTTP 缓存](./HTTP-08.md)
    - Memory Cache
    - Service Worker Cache
      - PWA
    - HTTP Cache
      - 强缓存
      - 协商缓存
    - Push Cache
      - http2
  - HTTP Cookie
    - 跨域
      - withcredentials
    - 属性
      - Secure
      - HttpOnly
      - Domain
      - Path
      - Expires
  - HTTP 连接管理
    - 短连接
    - 长连接
    - websockets
    - 域名分片
    - 域名收敛
  - HTTPS
    - 对称加密和非对称加密
- TCP
  - 三次握手
  - 四次握手
  - UDP
- 服务器处理请求并返回 HTTP 报文
  - 服务端渲染
- 浏览器解析
  - 图片
    - 精灵图
    - SVG
    - 图标字体
    - webp
  - 渲染
    - 重绘和重排
    - 优化指标
    - 首屏优化
      - 骨架屏
      - 懒加载
        - 滚动监听+scrollTop+offsetTop+innerHeight
        - 滚动监听+getBoundingClientRect()
        - Intersection Observer
  - 存储
    - Cookie
    - Session Storage
    - Local Storage
    - IndexedDB
  - JS 执行
    - Web-Worker
    - 事件循环
      - 宏任务、微任务
      - Promise
      - 防抖和节流
      - async/await

## URL

> URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源

`scheme: // host.domain:port / path / filename ? abc = 123 # 456789`

```bash
scheme       - 定义因特网服务的类型。常见的协议有 http、https、ftp、file，
               其中最常见的类型是 http，而 https 则是进行加密的网络传输。
host         - 定义域主机（http 的默认主机是 www）
domain       - 定义因特网域名，比如 baidu.com
port         - 定义主机上的端口号（http 的默认端口号是 80）
path         - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
filename     - 定义文档/资源的名称
query        - 即查询参数
fragment     - 即 # 后的hash值，一般用来定位到某个位置
```

**首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。**

## 浏览器缓存

**浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。**

## DNS 解析

在浏览器输入网址后，首先要经过域名解析，因为浏览器并不能直接通过域名找到对应的服务器，而是要通过 IP 地址。DNS（Domain Name System）的作用就是将主机名转换成 IP 地址。

> DNS 是一个应用层协议，将主机名转换成 IP 地址。同时，也是一个分布式数据库，整个 DNS 系统由分散在世界各地的很多台 DNS 服务器组成，每台 DNS 服务器上都保存了一些数据以获得最终的 IP。

**DNS 查询**

`本地 DNS 服务器`(TCP/IP 参数中设置的首选 DNS 服务器)

**DNS 缓存**

1. 浏览器缓存
2. OS 缓存
3. 路由器缓存
4. 访问 DNS 服务器(通常是 ISP)

### 递归查询 (Recursive Query)

客户端(发起) -> 本地 DNS 服务器 | ISP -> 客户端(收到)

服务器会代表客户端执行所有必要的进一步查询，直到它获得答案

### 迭代查询 (Iterative Query)

本地 DNS 服务器

1. 根名称服务器(`.`)
2. 顶级名称服务器(`com`)
3. 二级名称服务器(`microsoft.com`)
4. 权威名称服务器(`example.microsoft.com`)

**DNS 负载均衡**

> (DNS 重定向) DNS 负载均衡技术的实现原理是在 DNS 服务器中为同一个主机名配置多个 IP 地址，在应答 DNS 查询时， DNS 服务器对每个查询将以 DNS 文件中主机记录的 IP 地址按顺序返回不同的解析结果，将客户端的访问 引导到不同的机器上去，使得不同的客户端访问不同的服务器，从而达到负载均衡的目的。

::: tip

CDN(Content Delivery Network)就是利用 DNS 的重定向技术，DNS 服务器会返回一个跟用户最接近的点的 IP 地址给用户，CDN 节点的服务器负责响应用户的请求，提供所需的内容。

> CDN （Content Delivery Network，即内容分发网络）指的是一组分布在各个地区的服务器。这些服务器存储着数据的副本，因此服务器可以根据哪些服务器与用户距离最近，来满足数据的请求。 CDN 提供快速服务，较少受高流量影响。

:::

## TCP

- 三次挥手
- 四次握手

## HTTP

> HTTP 的端口为 80/8080，而 HTTPS 的端口为 443

发送 HTTP 请求的过程就是构建 HTTP 请求报文并通过 TCP 协议中发送到服务器指定端口，请求报文由请求行，请求报头，请求正文组成。

- HTTP 是无连接的

无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
一个连接是由传输层来控制的，这从根本上不属于 HTTP 的范围。HTTP 并不需要其底层的传输层协议是面向连接的，只需要它是可靠的，或不丢失消息的（至少返回错误）。

- HTTP 是可扩展的

在 HTTP/1.0 中出现的 HTTP headers 让协议扩展变得非常容易。只要服务端和客户端就新 headers 达成语义一致，新功能就可以被轻松加入进来。

- HTTP 是无状态

HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。 使用 Cookies 可以创建有状态的会话。

## Browser

- 用户界面(User Interface)
- 浏览器引擎(Browser Engine)
- 渲染引擎(Rendering Engine)
- 网络(Networking)
- JS 解释器(JS Interpreter)
- UI 后端(UI Backend)
- 数据存储(DB Persistence)
