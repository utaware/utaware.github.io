---
date: 2022-07-06
category:
  - web
tag:
  - css
---

# 重排(reflow)和重绘(repaint)

*   Rendering ：渲染
*   Repaint：重绘
*   Reflow: 回流（也称重排）
*   Relayout：重新布局 （和 Reflow 表达相同的意思）
*   Restyle ：重新设计（重写样式）

## 重排

> 当DOM的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。当一个元素位置发生变化时，其父元素及其后边的元素位置都可能发生变化，代价极高。

::: tip

在回答什么是重排的时候，关键不是位置发生变动，这只是原因(Why)，而不是 What。What 是重新计算每个元素在设备视口内的确切位置和大小。

:::

重排也叫回流，简单的说就是重新生成布局，重新排列元素。

*   页面初始渲染，这是开销最大的一次重排
*   添加/删除可见的DOM元素
*   改变元素位置
*   改变元素尺寸，比如边距、填充、边框、宽度和高度等
*   改变元素内容，比如文字数量，图片大小等
*   改变元素字体大小
*   改变浏览器窗口尺寸，比如resize事件发生时 
*   激活CSS伪类（例如：`:hover`）
*   设置 style 属性的值，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow
*   查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等，除此之外，当我们调用 `getComputedStyle`方法，或者IE里的 `currentStyle` 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。

### 属性

| 常见引起重排属性和方法 | - | - | - |
| --- | :-: | --: | --: |
| width | height | margin | padding |
| display | border-width | border | position |
| overflow | font-size | vertical-align | min-height |
| clientWidth | clientHeight | clientTop | clientLeft |
| offsetWidth | offsetHeight | offsetTop | offsetLeft |
| scrollWidth | scrollHeight | scrollTop | scrollLeft |
| scrollIntoView() | scrollTo() | getComputedStyle() |  |
| getBoundingClientRect() | scrollIntoViewIfNeeded() |  |

## 重绘(Repaints)

> 元素的 样式发生变动 ，但是位置没有改变。此时在关键渲染路径中的 Paint 阶段，将渲染树中的每个节点转换成屏幕上的实际像素，这一步通常称为绘制或栅格化。

::: tip

而回答什么是重绘的关键点在于在关键渲染路径中的 Paint 阶段，将渲染树中的每个节点转换成屏幕上的实际像素，这才是 What。

:::

### 属性

| 属性： | - | - | - |
| --- | :-: | --: | --: |
| color | border-style | visibility | background |
| text-decoration | background-image | background-position | background-repeat |
| outline-color | outline | outline-style | border-radius |
| outline-width | box-shadow | background-size |  |

## 优化

* 样式集中改变

不要频繁的操作样式，对于一个静态页面来说，明智且可维护的做法是更改类名而不是修改样式，对于动态改变的样式来说，相较每次微小修改都直接触及元素，更好的办法是统一在 cssText 变量中编辑。虽然现在大部分现代浏览器都会有 Flush 队列进行渲染队列优化，但是有些老版本的浏览器比如IE6的效率依然低下。

```js
// bad
var left = 10;
var top = 10;
el.style.left = left + "px";
el.style.top = top + "px";

// 当top和left的值是动态计算而成时...
// better 
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";

// better
el.className += " className";

复制代码
```

* 分离读写操作

DOM 的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。

```js
// bad 强制刷新 触发四次重排+重绘
div.style.left = div.offsetLeft + 1 + 'px';
div.style.top = div.offsetTop + 1 + 'px';
div.style.right = div.offsetRight + 1 + 'px';
div.style.bottom = div.offsetBottom + 1 + 'px';


// good 缓存布局信息 相当于读写分离 触发一次重排+重绘
var curLeft = div.offsetLeft;
var curTop = div.offsetTop;
var curRight = div.offsetRight;
var curBottom = div.offsetBottom;

div.style.left = curLeft + 1 + 'px';
div.style.top = curTop + 1 + 'px';
div.style.right = curRight + 1 + 'px';
div.style.bottom = curBottom + 1 + 'px';
```

* 将 DOM 离线 操作完成后再添加到文档中
  - 使用 display:none
  - documentFragment 创建 dom 碎片
  - absolute 或 fixed 脱离文档流

* 优化动画

在 CSS 中，transforms 和 opacity 这两个属性更改不会触发重排与重绘，它们是可以由合成器（composite）单独处理的属性。

## 关键渲染路径

关键渲染路径(Critical Rendering Path)是浏览器将 HTML，CSS 和 JavaScript 转换为屏幕上的像素所经历的步骤序列。优化关键渲染路径可提高渲染性能。

1. HTML 被 HTML 解析器解析成 DOM 树
2. CSS 被 CSS 解析器解析成 CSSOM 树；
3. 结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)，这一过程称为 Attachment；
4. 生成布局(flow)，浏览器在屏幕上“画”出渲染树中的所有节点
5. 将布局绘制(paint)在屏幕上，显示出整个页面。

> 优化关键渲染路径可以缩短首次渲染的时间。了解和优化关键渲染路径对于确保重排和重绘可以每秒 60 帧的速度进行，以确保高效的用户交互并避免讨厌是很重要的。

### 1. 生成 DOM

DOM 构建是增量的。

1. Bytes: 浏览器从获取数据 `3C 62 6F...`
2. Characters: 根据相应的编码 (utf8) 转化为字符串 `<html><head>...</hed></html>`
3. Tokens: 通过 AST 解析为 Token `startTag: html, startTag: head, ...`
4. Nodes: 生成对应dom节点 `documentElement`
5. DOM: 构建生成dom树

### 2. 生成 CSSOM

浏览器解析 css 文件，生成 CSSOM。CSSOM 包含了页面所有的样式，也就是如何展示 DOM 的信息。

DOM 构造是增量的，CSSOM 却不是。CSS 是渲染阻塞的：浏览器会阻塞页面渲染直到它接收和执行了所有的 CSS。

CSS 是渲染阻塞是因为规则可以被覆盖，所以内容不能被渲染直到 CSSOM 的完成。

### 3. Render Tree

渲染树(Render Tree)包括了内容和样式：DOM 和 CSSOM 树结合为渲染树。

为了构造渲染树，浏览器检查每个节点，从 DOM 树的根节点开始，并且决定哪些 CSS 规则被添加。

渲染树只包含了可见内容（body 里的部分）。

Head（通常）不包含任何可见信息，因此不会被包含在渲染树种。如果有元素上有 display: none;，它本身和其后代都不会出现在渲染树中。

### 4. Layout

一旦渲染树被构建，布局变成了可能。布局取决于屏幕的尺寸。布局这个步骤决定了在哪里和如何在页面上放置元素，决定了每个元素的宽和高，以及他们之间的相关性。

::: tip 提示

> 一个页面渲染在不同尺寸的屏幕上，比如渲染在移动端和 PC 端上，展示有差异，在前面的步骤都是不变的，只有在布局的时候才会根据屏幕尺寸进行差异化处理。

:::

### 5. Paint

最后一步是将像素绘制在屏幕上，栅格化所有元素，将元素转换为实际像素。

一旦渲染树创建并且布局完成，像素就可以被绘制在屏幕上。加载时，整个屏幕被绘制出来。之后，只有受影响的屏幕区域会被重绘，浏览器被优化为只重绘需要绘制的最小区域。

> 绘制时间取决于何种类型的更新被附加在渲染树上。绘制是一个非常快的过程，所以聚焦在提升性能时这大概不是最有效的部分


