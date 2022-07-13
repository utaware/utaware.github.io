---
date: 2022-07-10
category:
  - browser
tag:
  - http
---

# H5 History API

> 在 H5 之前，即使采用的是脚本语言的方式，只要浏览器地址栏中的 URL 地址被切换，都会触发一个页面刷新的过程，这个过程将耗费一些时间与资源。在很多时候，尤其是两个大部分内容相同的页面之间进行切换时，这个过程往往被视为一种浪费。

```ts
type ScrollRestoration = "auto" | "manual";

interface History {
  readonly length: number;
  scrollRestoration: ScrollRestoration;
  readonly state: any;
  back(): void;
  forward(): void;
  go(delta?: number): void;
  pushState(data: any, unused: string, url?: string | URL | null): void;
  replaceState(data: any, unused: string, url?: string | URL | null): void;
}
```

## 属性

* length: 代表了会话历史中元素的数目，包括了当前的加载页
* scrollRestoration: 允许web应用程序在历史导航上显式地设置默认滚动恢复行动
* state: 浏览器在当前的url下面给出的一个状态信息

## 方法

* go

> 通过当前页面的相对位置从浏览历史中加载页面，当参数超出了界限或者没有参数传入或者不是整数的时候没有效果也不会报错

* back

> 前往上一页，可以点击浏览器的左上角的返回按钮模拟这个方法，相当于go(-1)

* forward

> 前往下一页，可以点击浏览器的左上角的前进按钮模拟这个方法，相当于go(-1)

* pushState

> 新生成一条历史记录，方便用浏览器的“后退”和“前进”来导航

* replaceState

> 不会新生成历史记录，而是将当前历史记录替换掉

```js
pushState(state, title, url) || replaceState(state, title, url)
// state: 是一个 JavaScript 对象，与pushState()创建的新历史记录条目相关联。(2M限制)
// title: 是一个字符串，目前各类浏览器都会忽略它（以后才有可能启用，用作页面标题），所以设置成什么都没关系。目前建议设置为空字符串。
// url: 一般会是简单的?page=2这样的参数风格的相对路径，它会自动以当前URL为基准。需要注意的是，本参数URL需要和当前页面URL同源，否则会抛出错误。
```

## window.onpopstate

> 每当激活同一文档中不同的历史记录条目时，popstate 事件就会在对应的 window 对象上触发。如果当前处于激活状态的历史记录条目是由 history.pushState() 方法创建的或者是由 history.replaceState() 方法修改的，则 popstate 事件的 state 属性包含了这个历史记录条目的 state 对象的一个拷贝。

```js
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // 弹出 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 弹出 "location: http://example.com/example.html, state: null
history.go(2);  // 弹出 "location: http://example.com/example.html?page=3, state: {"page":3}
```
