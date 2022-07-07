---
date: 2022-06-05
category:
  - web
tag:
  - performance
---

# RAIL模型

[RAIL]()是一种以用户为中心的性能模型，将用户体验分解到按钮操作（比如：点击、滚动、加载）中，为每个操作定义性能目标

RAIL代表Web应用生命周期的四个不同方面：响应、动画、空闲、加载

## 响应(Response)

**目标:**

- 在100毫秒内完成由用户输入发起的转换，让用户感觉交互是即时的。

**准则:**

- 为了确保在 100 毫秒内产生可见响应，需要在 50 毫秒内处理用户输入事件。这适用于大多数输入，例如点击按钮、切换表单控件或启动动画。但是，这不适用于触摸拖动或滚动。
- 尽管听起来可能有些自相矛盾，但是，即时响应用户输入并非总是正确的做法。您可以利用这100毫秒的时间窗口来执行其他需要消耗大量资源的工作，但是，注意不能妨碍用户。如果可能，应在后台工作。
- 对于需要 50 毫秒以上才能完成的操作，请随时提供反馈。

> 目标是在 100 毫秒内响应输入，那么，为什么我们的预算只有 50 毫秒？这是因为除输入处理外，通常还有需要执行其他工作，而且这些工作会占用可接受输入响应的部分可用时间。如果应用程序在空闲时间以推荐的 50 毫秒区块执行工作，这就意味着，如果输入在这些工作区块之一中发生，它最多可能会排队 50 毫秒。考虑到这一点，假设只有剩余的 50 毫秒可用于实际输入处理才是安全地做法。

## 动画(Animation)

**目标:**

- 在 10 毫秒或更短的时间内生成动画的每一帧。从技术上来讲，每帧的最大预算为16毫秒（1000毫秒/每秒60帧≈16毫秒），但是，浏览器需要大约6毫秒来渲染一帧，因此，准则为每帧10毫秒。
- 目标为流畅的视觉效果。用户会注意到帧速率的变化。

**准则:**

- 在动画之类对计算速度要求极高的场景下，关键在于即使可行，您也不能执行任何其他操作，让不能执行的操作保持绝对最少。只要可能，您就要利用这 100 毫秒的响应时间预先计算最消耗资源的工作，从而最大限度地提高达到 60 fps 的几率。

## 空闲(Idle)

**目标:**

- 最大限度增加空闲时间以提高页面在 50 毫秒内响应用户输入的几率。

**准则:**

- 利用空闲时间完成延缓的工作。例如，对于初始页面加载，应加载尽可能少的数据，然后利用空闲时间加载其余数据。
- 在 50 毫秒或更短的空闲时间内执行工作。如果时间更长，您可能会干扰应用在 50 毫秒内响应用户输入的能力。
- 如果用户在空闲时间工作期间与页面交互，则应中断空闲时间工作，用户交互始终具有最高优先级。

## 加载(Load)

> 当页面加载缓慢时，用户注意力会分散，会认为任务已中断。

**目标:**

- 根据用户的设备和网络能力优化相关的快速加载性能。目前，对于首次加载，在使用速度较慢 3G 连接的中端移动设备上，理想的目标是在5秒或更短的时间内实现可交互。
- 对于后续加载，理想的目标是在2秒内加载页面。

**准则:**

- 为了产生完整加载的感觉，不必在5秒钟时间内加载所有内容。不妨考虑延迟加载图像、代码拆分JavaScript包以及web.dev上建议的其他优化。

## 性能延迟指标

| 延迟 | 用户反应 |
| --- | --- |
| 0 - 16 毫秒 | 人们特别擅长跟踪运动，如果动画不流畅，他们就会对运动心生反感。 用户可以感知每秒渲染 60 帧的平滑动画转场。也就是每帧 16 毫秒（包括浏览器将新帧绘制到屏幕上所需的时间），留给应用大约 10 毫秒的时间来生成一帧。 |
| 0 - 100 毫秒 | 在此时间窗口内响应用户操作，他们会觉得可以立即获得结果。时间再长，操作与反应之间的连接就会中断。 |
| 100 - 300 毫秒 | 用户会遇到轻微可觉察的延迟。 |
| 300 - 1000 毫秒 | 在此窗口内，延迟感觉像是任务自然和持续发展的一部分。对于网络上的大多数用户，加载页面或更改视图代表着一个任务。 |
| 1000+ 毫秒 | 超过 1 秒，用户的注意力将离开他们正在执行的任务。 |
| 10,000+ 毫秒 | 用户感到失望，可能会放弃任务；之后他们或许不会再回来。 |

<script setup lang="ts">
import WebRailRange from '@WebRailRange'
</script>

### FP&FCP

* FP：首次绘制，FP（First Paint），当浏览器开始绘制内容到屏幕上的时候，只要在视觉上开始发生变化，无论是什么内容触发的视觉变化，在这一刻，这个时间点，叫做FP。
* FCP：首次内容绘制，FCP（First Contentful Paint）：这个指标用于记录页面首次绘制文本、图片、非空白Canvas或SVG的时间。

<web-rail-range :tips="[0, 1.8, 3]" unit="s" />

### LCP

最大绘制内容，LCP（Largest Contentful Paint），用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生变化。另外该指标会在用户第一次交互后停止记录。

<web-rail-range :tips="[0, 2.5, 4.0]" unit="s" />

### TTI

TTI（Time to Interactive）是衡量一个页面完成变成可交互状态的时间，当一个页面满足以下几个条件时可以认为该页面是完全可交互的：

- 从FCP指标后开始计算，保证已经有内容被渲染出来。
- 大多数的事件已经挂载在DOM上，完成注册。
- 此时主线程已经达到“流畅”的程度，主线程的任务均不超过 50 毫秒。

<web-rail-range :tips="[0, 3.8, 7.3]" unit="s" />

[rail]: https://web.dev/i18n/zh/rail/

### FID

FID（First Input Delay）译为首次输入延迟。顾名思义，FID指的是用户首次与产品进行交互时，产品可以在多长时间给出反馈。

> TTI可以告诉我们网页什么时候可以开始流畅地响应用户的交互，但是如果用户在TTI的时间内，没有与网页产生交互，那么TTI其实是影响不到用户的，TTI是不需要用户参与的指标，但如果我们真的想知道TTI对用户的影响，我们需要FID。不同的用户可能会在TTI之前开始与网页产生交互，也可能在TTI之后才与网页产生交互。所以对于不同的用户它的FID是不同的。如果在TTI之前用户就已经与网页产生了交互，那么它的FID时间就比较长，而如果在TTI之后才第一次与网页产生交互，那么他的FID时间就短。

<web-rail-range :tips="[0, 100, 300]" unit="ms" />

### TBT

阻塞总时间，TBT（Total Blocking Time）汇总所有加载过程中阻塞用户操作的时长，在FCP和TTI之间任何long task中阻塞部分都会被汇总。

<web-rail-range :tips="[0, 200, 600]" unit="ms" />

### CLS

累计位移偏量,CLS（Cumulative Layout Shift），记录了页面上非预期的位移波动。计算方式为：位移影响的面积 * 位移距离。

<web-rail-range :tips="[0, 0.1, 0.25]" />


## 如何获取指标

* Chrome DevTools - Lighthouse
* Chrome DevTools - Performance
* web-vitals 库