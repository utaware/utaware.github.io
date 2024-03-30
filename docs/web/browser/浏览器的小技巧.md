---
date: 2022-06-10
category:
  - web
tag:
  - browser
  - hack
---

# 浏览器的小技巧

## 浏览器地址栏运行JavaScript代码

```js
javascript:console.log('hello from address bar :)');
```

## 浏览器地址栏运行HTML代码

```
data:text/html,<h1>Hello, world!</h1>
```

## 浏览器当编辑器

> 当元素指定了contentEditable属性后，元素的内容成为可编辑状态。如果在document.body上指定，整个页面将变得可编辑

```
data:text/html, <html contenteditable>
```

## a标签自动解析URL

```js
var a = document.createElement('a');
a.href = 'http://www.cnblogs.com/wayou/p/';
console.log(a.host); // www.cnblogs.com
```

## 禁止别人以iframe加载你的页面

```js
if (window.location != window.parent.location) window.parent.location = window.location;
```

## 拥有ID的元素会创建全局变量

```html
<div id="sample"></div>
<script type="text/javascript">
  console.log(sample); // <div id="sample"></div>
</script>
```

## 引入外部文件省略HTTP标识

> 浏览器在处理的过程中（发送http请求），会将它转化为绝对路径，即补全URL的协议、域名和路径。

```html
<script src="//code.jquery.com/jquery-1.9.1.js"></script>
```

## 利用script标签保存任意信息

> 将script标签设置为type='text'然后可以在里面保存任意信息，之后可以在JavaScript代码中很方便地获取。

```html
<script type="text" id="template">
	<h1>This won't display</h1>
</script>
```


