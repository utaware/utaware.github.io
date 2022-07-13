---
date: 2022-07-08
category:
  - web
tag:
  - css
---

# BFC

> 全称：Block Formatting Context，即块级格式化上下文。决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，BFC提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

* css2.1: BFC、IFC
* css3: GFC、FFC

BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局

## 特性

* BFC 是页面上的一个独立容器，容器里面的子元素不会影响外面的元素。
* BFC 内部的块级盒会在垂直方向上一个接一个排列
* 同一 BFC 下的相邻块级元素可能发生外边距折叠，创建新的 BFC 可以避免外边距折叠
* 每个元素的外边距盒（`margin box`）的左边与包含块边框盒（`border box`）的左边相接触（从右向左的格式的话，则相反），即使存在浮动
* 浮动盒的区域不会和 BFC 重叠
* 计算 BFC 的高度时，浮动元素也会参与计算

## 触发

* **浮动**：float:left | float:right;【会导致父元素的宽度丢失,也会导致下边的元素上移】
* **定位**：position:absolute | position:fixed;
* **display的一些值**：display:inline-block【转为行内块会导致宽度丢失】 | display:flex | display:table | table-cell、table-caption、inline-table、inline-flex、grid、inline-grid;
* **overflow值不为visible**：overflow:hidden;【将会剪切掉溢出的元素】 | overflow:auto、overflow:scroll;
* **display:flow-root**【新属性，BFC创建新方式，没有任何副作用，注意浏览器兼容】

## 场景

1. 父元素高度塌陷
2. 浮动文字环绕
3. 外边距重叠
4. 两栏布局
