---
date: 2022-07-05
category:
  - web
tag:
  - css
---

# 三栏布局

## 圣杯布局

* 两边固定宽度，中间自适应的三栏布局
* 中间内容元素在dom元素次序中优先位置，优先渲染

**原理**

> 先通过float浮动元素排到一行，这时候便会按照middle，left，right的顺序排布，但由于middle宽度自适应原因会挤下去。如此再通过postion和margin负值来调整左右元素位置，实现看似占位的元素对齐。

**缺点**

> 当页面不断收缩时container和middle宽度都会对应减小。而当减小到低于两侧宽度时，将因无法容纳他们造成布局被破坏(magin-100%不成立)。

<style lang="scss">
.common {
  text-align: center;
  .top {
    height: 50px;
    background-color: pink;
  }
  .left {
    position: relative;
    width: 200px;
    height: 400px;
    background-color: green;
  }
  .right {
    position: relative;
    width: 150px;
    height: 400px;
    background-color: yellow;
  }
  .center {
    width: 100%;
    height: 300px;
    background-color: red;
  }
  .bottom {
    height: 40px;
    background-color: gray;
  }
  .flt {
    float: left;
  }
  .clear {
    display:block;
    clear: both;
    content: '';
  }
}

.cup {
  .main {
    padding-left: 200px;
    padding-right: 150px;
  }
  .left {
    margin-left: -100%;
    left: -200px;
  }
  .right {
    margin-left: -150px;
    right: -150px;
  }
}

.wing {
  .parent {
    width: 100%;
    .middle {
      margin-left: 200px;
      margin-right: 150px;
      height: 300px;
      background-color: red;
    }
  }
  .left {
    margin-left: -100%;
  }
  .right {
    margin-left: -150px;
  }
}
</style>

<div class="common cup">
  <header class="top">header</header>
  <div class="main">
    <div class="center flt">center</div>
    <div class="left flt">left</div>
    <div class="right flt">right</div>
    <div class="clear"></div>
  </div>
  <footer class="bottom">footer</footer>
</div>

## 双飞翼布局

* 圣杯布局与双飞翼布局，都是属于三列布局的经典布局
* 双飞翼布局是圣杯布局的优化版，由淘宝UED提出

**原理**

> 相较于圣杯布局不是通过container的padding, 而是通过自身的margin来留出占位空间。这样margin-left的100%就是整个容器的宽度没有扣除的部分，即便middle缩小到0也不会打乱布局。

<div class="common wing">
  <header class="top">header</header>
  <div class="main">
    <div class="parent flt">
      <div class="middle">middle</div>
    </div>
    <div class="left flt">left</div>
    <div class="right flt">right</div>
    <div class="clear"></div>
  </div>
  <footer class="bottom">footer</footer>
</div>
