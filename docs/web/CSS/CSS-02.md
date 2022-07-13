---
date: 2022-07-08
category:
  - web
tag:
  - css
---

# 盒模型

* Margin(外边距) ：清除边框外的区域，外边距是透明的（可以为负值）。
* Border(边框) ：围绕在内边距和内容外的边框。
* Padding(内边距) ：清除内容周围的区域，内边距是透明的（不允许负值）。
* Content(内容) ：盒子的内容，显示文本和图像。

## 标准盒模型

> box = content

## IE盒模型

> box = content + padding + border

## 设置盒模型

* css设置标准模型：`box-sizing:content-box` (浏览器默认的盒模型)
* css设置Ie模型：`box-sizing:border-box`
