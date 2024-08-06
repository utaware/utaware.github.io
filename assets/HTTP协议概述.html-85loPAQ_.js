import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as t}from"./app-qSMjXEym.js";const n={},a=t(`<h1 id="http协议概述" tabindex="-1"><a class="header-anchor" href="#http协议概述" aria-hidden="true">#</a> HTTP协议概述</h1><p>HTTP(hypertext transport protocol - 超文本传输协议)，是一种用于分布式、协作式和超媒体信息系统的应用层协议。HTTP是万维网的数据通信的基础。</p><p>HTTP的发展是由蒂姆·伯纳斯-李于1989年在欧洲核子研究组织（CERN）所发起。HTTP的标准制定由万维网协会（World Wide Web Consortium，W3C）和互联网工程任务组（Internet Engineering Task Force，IETF）进行协调，最终发布了一系列的RFC，其中最著名的是1999年6月公布的 RFC 2616，定义了HTTP协议中现今广泛使用的一个版本——HTTP 1.1。</p><p>2014年12月，互联网工程任务组（IETF）的Hypertext Transfer Protocol Bis（httpbis）工作小组将HTTP/2标准提议递交至IESG进行讨论，于2015年2月17日被批准。 HTTP/2标准于2015年5月以RFC 7540正式发表，取代HTTP 1.1成为HTTP的实现标准。</p><blockquote><p>由浏览器通过URL指向确定的资源地址，发送HTTP请求，服务器返回对应的HTML文档及其附属资源，供浏览器解析渲染，最后转换为网页内容呈现给用户</p></blockquote><ul><li>URI：统一资源标识符。 -&gt; 地址</li><li>HTML：超文本文档。 -&gt; 内容</li><li>HTTP: 传输超文本的文本传输协议。-&gt; 传输</li></ul><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><ol start="0"><li>客户端(浏览器)输入URL回车发起请求</li><li>域名解析 -&gt; IP -&gt; 服务器</li><li>建立TCP连接 -&gt; 三次握手</li><li>浏览器发送请求报文</li><li>服务器发送响应报文</li><li>浏览器获取HTML内容 -&gt; 解析</li><li>释放链接 -&gt; 四次挥手 (Connection: close | keep-alive)</li></ol><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><ul><li>HTTP/0.9 - 1991 <ul><li>请求方法: GET</li><li>数据传输: ASCII字符文本</li><li>缺陷：功能过于单一</li></ul></li><li>HTTP/1.0 - 1996 <ul><li>添加请求方法: POST、HEAD</li><li>新增HTTP headers(头信息)</li><li>新增HTTP code(状态码)</li><li>新增HTTP version(版本号)</li><li>新增文件类型处理(不再仅限于文本)</li><li>缺陷：单次HTTP请求即关闭TCP连接，重复建立连接成本高</li></ul></li><li>HTTP/1.1 - 1999 <ul><li>新增range头域，支持资源部分请求</li><li>添加请求方法：PUT、DELETE、OPTIONS、PATCH</li><li>添加更多缓存控制策略</li><li>添加更多错误状态码</li><li>添加Host头(虚拟主机 -&gt; host攻击)</li><li>支持长连接(单个TCP支持多个HTTP请求)</li><li>改进 <ul><li><code>keep-alive</code>复用链接减少连接开销(无法应对域名分片情况)</li><li><code>pipeling</code>机制解决队头阻塞(处理依赖顺序，没有完全解决)</li></ul></li><li>缺陷 <ul><li>随着传输成本逐渐增加(header)，缺少更好的压缩方式以减少带宽</li></ul></li></ul></li><li>HTTP/2.0 - 2015 <ul><li>二进制协议: 文件传输改为二进制，提高传输效率</li><li>多路复用: 可以同时发送多个请求和多个响 =&gt;，解决对头阻塞问题</li><li>头部信息压缩：减少数据传输量 =&gt; 序号标记</li><li>服务端主动推送：允许服务器主动向客户推送数据 =&gt; 更新缓存信息</li><li>缺陷 <ul><li>TCP 队头阻塞问题(单个丢失的数据包阻塞后续传输)</li></ul></li></ul></li><li>HTTP/3.0 - 2018 <ul><li>UDP -&gt; QUIC(严格要求加密后)</li><li>多路复用 -&gt; 同时承载多个流</li><li>低延迟等待 -&gt; 减少通信的次数 <ul><li>TCP(3) + SSL(2)</li><li>QUIC(1: 密钥协商) + QUIC(0)</li></ul></li><li>前向安全 -&gt; 每次通信时使用的密钥只会使用一次，每次交互完都会将其销毁，后续再按照相同的规则重新生成</li><li>前向纠错 <ul><li>TCP: 队头阻塞，需要校验后重新传递丢失数据</li><li>QUIC: 通过与其他包校验还原丢包数据，避免重传消耗</li></ul></li><li>连接迁移 <ul><li>TCP: 当网络环境(五元组: 源IP，源端口，目的IP，目的端口，传输层协议)改变，需要重新建立连接</li><li>QUIC: 生成64位的随机数作为连接的标识，网络改变也可以快速恢复连接</li></ul></li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Q: 构建HTTP请求行的时候是怎么确定用什么版本的HTTP协议的?</p><p>A: 在HTTPS的TLS的扩展协议ALPN中客户端会列出支持的应用层协议，供服务端选择。</p><blockquote><p>TSL扩展协议分为ALPN和NPN，其中NPN对应SPDY，ALPN对应HTTP2。</p></blockquote></div><h2 id="报文结构" tabindex="-1"><a class="header-anchor" href="#报文结构" aria-hidden="true">#</a> 报文结构</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 请求报文 --&gt;</span>
Request-Line -&gt; GET /index.html HTTP/1.1 -&gt; 请求方法 URL 协议版本
(headers) -&gt; 头部信息
CRLF -&gt; 空行
[message-body]

<span class="token comment">&lt;!-- 响应报文 --&gt;</span>
Status-Line -&gt; HTTP/1.0 200 OK -&gt; 协议版本 状态码 状态信息
(headers) -&gt; 头部信息
CRLF -&gt; 空行
[message-body]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h2><blockquote><p>在HTTP1.x版本，每次的HTTP请求都是独立的，服务器不会保留任何客户机访问过的请求信息。(可以更快地处理大量的事务，确保协议的可伸缩性，减少服务器的CPU及内存资源的消耗。)</p></blockquote><p>随着人们对http提出更多的要求，为了应对需要保持状态的场景，开始提出一些解决方案。</p><ol><li>Cookie</li><li>Session</li><li>Token</li><li>JWT</li><li>URL</li></ol>`,17),T=[a];function s(d,r){return i(),e("div",null,T)}const u=l(n,[["render",s],["__file","HTTP协议概述.html.vue"]]);export{u as default};
