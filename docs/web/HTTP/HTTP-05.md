---
date: 2022-07-14
category:
  - web
tag:
  - http
---

# HTTP请求方法

* GET
* POST
* HEAD
* OPTIONS
* PUT
* PATCH
* DELETE
* TRACE
* CONNECT

## HTTP/1.0

* GET

> GET方法用于使用给定的URI从给定服务器中检索信息，即从指定资源中请求数据。使用GET方法的请求应该只是检索数据，并且不应对数据产生其他影响。

* POST

> POST方法用于将数据发送到服务器以创建或更新资源，它要求服务器确认请求中包含的内容作为由URI区分的Web资源的另一个下属。

* HEAD

> HEAD方法与GET方法相同，但没有响应体，仅传输状态行和标题部分。这对于恢复相应头部编写的元数据非常有用，而无需传输整个内容。

## HTTP/1.1

* OPTIONS

> OPTIONS方法用来描述了目标资源的通信选项，会返回服务器支持预定义URL的HTTP策略。

* PUT

> PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容。

* PATCH

> 实体中包含一个表，表中说明与该URI所表示的原内容的区别。

* DELETE

> DELETE方法用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容。

* TRACE

> TRACE方法用于沿着目标资源的路径执行消息环回测试；它回应收到的请求，以便客户可以看到中间服务器进行了哪些（假设任何）进度或增量。

* CONNECT

> CONNECT方法用来建立到给定URI标识的服务器的隧道；它通过简单的TCP / IP隧道更改请求连接，通常实使用解码的HTTP代理来进行SSL编码的通信（HTTPS）。

## POST和GET的区别

*   GET在浏览器回退时是无害的，而POST会再次提交请求。
*   GET产生的URL地址可以被Bookmark，而POST不可以。
*   GET请求会被浏览器主动cache，而POST不会，除非手动设置。
*   GET请求只能进行url编码，而POST支持多种编码方式。
*   GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
*   GET请求在URL中传送的参数是有长度限制的，而POST么有。
*   对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
*   GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
*   GET参数通过URL传递，POST放在Request body中。

GET会产生一个TCP数据包，而POST会产生两个TCP数据包。

*   对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
*   而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。

::: tip

注意一点，并不是所有的浏览器都会发送两次数据包，Firefox就发送一次

:::


