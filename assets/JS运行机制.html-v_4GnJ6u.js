import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as t,b as n,d as c,e as o,a as s}from"./app-qSMjXEym.js";const p={},u=s(`<h1 id="js运行机制" tabindex="-1"><a class="header-anchor" href="#js运行机制" aria-hidden="true">#</a> JS运行机制</h1><h2 id="进程与线程" tabindex="-1"><a class="header-anchor" href="#进程与线程" aria-hidden="true">#</a> 进程与线程</h2><p><strong>进程</strong></p><p>CPU是计算机的核心，承担所有的计算任务。进程是CPU资源分配的最小单位，一个可以独立运行且拥有自己的资源空间的任务程序，进程包括运行中的程序和程序所使用到的内存和系统资源。每个进程之间是相互独立的，CPU在运行一个进程时，其他的进程处于非运行状态，CPU使用 时间片轮转调度算法 来实现同时运行多个进程</p><p><strong>线程</strong></p><p>线程是CPU调度的最小单位，线程是建立在进程的基础上的一次程序运行单位，通俗点解释线程就是程序中的一个执行流，一个进程可以有多个线程。一个进程中只有一个执行流称作单线程，即程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。一个进程中有多个执行流称作多线程，即在一个程序中可以同时运行多个不同的线程来执行不同的任务， 也就是说允许单个程序创建多个并行执行的线程来完成各自的任务</p><p><strong>进程和线程的区别</strong></p><p>进程是操作系统分配资源的最小单位，线程是程序执行的最小单位</p><p>一个进程由一个或多个线程组成，线程可以理解为是一个进程中代码的不同执行路线</p><p>进程之间相互独立，但同一进程下的各个线程间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)</p><p>调度和切换：线程上下文切换比进程上下文切换要快得多</p><h2 id="js单线程" tabindex="-1"><a class="header-anchor" href="#js单线程" aria-hidden="true">#</a> JS单线程</h2><p>JS的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。例如同时操作DOM所可能出现的差异。HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程是完 全受主线程控制的，而且不得操作DOM。所以，这个标准并没有改变JavaScript是单线程的本质</p><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><ul><li>Browser进程 <ul><li>浏览器的主进程(负责协调、主控)，该进程只有一个</li><li>负责浏览器界面显示，与用户交互。如前进，后退等</li><li>负责各个页面的管理，创建和销毁其他进程</li><li>将渲染(Renderer)进程得到的内存中的Bitmap(位图)，绘制到用户界面上</li><li>网络资源的管理，下载等</li></ul></li><li>第三方插件进程 <ul><li>每种类型的插件对应一个进程，当使用该插件时才创建</li></ul></li><li>GPU进程 <ul><li>该进程也只有一个，用于3D绘制等等</li></ul></li><li>渲染进程(重) <ul><li>即通常所说的浏览器内核(Renderer进程，内部是多线程)</li><li>每个Tab页面都有一个渲染进程，互不影响</li><li>主要作用为页面渲染，脚本执行，事件处理等</li></ul></li></ul><h3 id="gui渲染线程" tabindex="-1"><a class="header-anchor" href="#gui渲染线程" aria-hidden="true">#</a> GUI渲染线程</h3><ul><li>负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等 <ul><li>解析html代码(HTML代码本质是字符串)转化为浏览器认识的节点，生成DOM树，也就是DOM Tree</li><li>解析css，生成CSSOM(CSS规则树)</li><li>把DOM Tree 和CSSOM结合，生成Rendering Tree(渲染树)</li></ul></li><li>当我们修改了一些元素的颜色或者背景色，页面就会重绘(Repaint)</li><li>当我们修改元素的尺寸，页面就会回流(Reflow)</li><li>当页面需要Repaing和Reflow时GUI线程执行，绘制页面</li><li>回流(Reflow)比重绘(Repaint)的成本要高，我们要尽量避免Reflow和Repaint</li><li>GUI渲染线程与JS引擎线程是互斥的 <ul><li>当JS引擎执行时GUI线程会被挂起(相当于被冻结了)</li><li>GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行</li></ul></li></ul><h3 id="js引擎线程" tabindex="-1"><a class="header-anchor" href="#js引擎线程" aria-hidden="true">#</a> JS引擎线程</h3><ul><li>JS引擎线程就是JS内核，负责处理Javascript脚本程序(例如V8引擎)</li><li>JS引擎线程负责解析Javascript脚本，运行代码</li><li>JS引擎一直等待着任务队列中任务的到来，然后加以处理 <ul><li>浏览器同时只能有一个JS引擎线程在运行JS程序，所以js是单线程运行的</li><li>一个Tab页(renderer进程)中无论什么时候都只有一个JS线程在运行JS程序</li></ul></li><li>GUI渲染线程与JS引擎线程是互斥的，js引擎线程会阻塞GUI渲染线程 <ul><li>就是我们常遇到的JS执行时间过长，造成页面的渲染不连贯，导致页面渲染加载阻塞(就是加载慢)</li><li>例如浏览器渲染的时候遇到<code>&lt;script&gt;</code>标签，就会停止GUI的渲染，然后js引擎线程开始工作，执行里面的js代码，等js执行完毕，js引擎线程停止工作，GUI继续渲染下面的内容。所以如果js执行时间太长就会造成页面卡顿的情况</li></ul></li></ul><h3 id="事件触发线程" tabindex="-1"><a class="header-anchor" href="#事件触发线程" aria-hidden="true">#</a> 事件触发线程</h3><ul><li>属于浏览器而不是JS引擎，用来控制事件循环，并且管理着一个事件队列(task queue)</li><li>当js执行碰到事件绑定和一些异步操作(如setTimeOut，也可来自浏览器内核的其他线程，如鼠标点击、AJAX异步请求等)，会走事件触发线程将对应的事件添加到对应的线程中(比如定时器操作，便把定时器事件添加到定时器线程)，等异步事件有了结果，便把他们的回调操作添加到事件队列，等待js引擎线程空闲时来处理。</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理</li><li>因为JS是单线程，所以这些待处理队列中的事件都得排队等待JS引擎处理</li></ul><h3 id="定时触发器线程" tabindex="-1"><a class="header-anchor" href="#定时触发器线程" aria-hidden="true">#</a> 定时触发器线程</h3><ul><li><code>setInterval</code>与<code>setTimeout</code>所在线程</li><li>浏览器定时计数器并不是由JavaScript引擎计数的(因为JavaScript引擎是单线程的，如果处于阻塞线程状态就会影响记计时的准确)</li><li>通过单独线程来计时并触发定时(计时完毕后，添加到事件触发线程的事件队列中，等待JS引擎空闲后执行)，这个线程就是定时触发器线程，也叫定时器线程</li><li>W3C在HTML标准中规定，规定要求<code>setTimeout</code>中低于4ms的时间间隔算为4ms</li></ul><h3 id="异步http请求线程" tabindex="-1"><a class="header-anchor" href="#异步http请求线程" aria-hidden="true">#</a> 异步http请求线程</h3><ul><li>在XMLHttpRequest在连接后是通过浏览器新开一个线程请求</li><li>将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中再由JavaScript引擎执行</li><li>简单说就是当执行到一个http异步请求时，就把异步请求事件添加到异步请求线程，等收到响应(准确来说应该是http状态变化)，再把回调函数添加到事件队列，等待js引擎线程来执行</li></ul><h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h2><p>JS分为同步任务和异步任务</p><p>同步任务都在主线程(这里的主线程就是JS引擎线程)上执行，会形成一个执行栈</p><p>主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放一个事件回调</p><p>一旦执行栈中的所有同步任务执行完毕(也就是JS引擎线程空闲了)，系统就会读取任务队列，将可运行的异步任务(任务队列中的事件回调，只要任务队列中有事件回调，就说明可以执行)添加到执行栈中，开始执行</p><h2 id="宏任务-macrotask-微任务-microtask" tabindex="-1"><a class="header-anchor" href="#宏任务-macrotask-微任务-microtask" aria-hidden="true">#</a> 宏任务(macrotask) &amp; 微任务(microtask)</h2><p><strong>宏任务(macrotask)</strong></p><p>在ECMAScript中，macrotask也被称为task</p><p>可以将每次执行栈执行的代码当做是一个宏任务(包括每次从事件队列中获取一个事件回调并放到执行栈中执行)， 每一个宏任务会从头到尾执行完毕，不会执行其他</p><p>由于JS引擎线程和GUI渲染线程是互斥的关系，浏览器为了能够使宏任务和DOM任务有序的进行，会在一个宏任务执行结果后，在下一个宏任务执行前，GUI渲染线程开始工作，对页面进行渲染</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宏任务 -&gt; GUI渲染 -&gt; 宏任务 -&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的宏任务</p><ul><li>主代码块</li><li>setTimeout</li><li>setInterval</li><li>setImmediate ()-Node</li><li>requestAnimationFrame ()-浏览器</li></ul><p><strong>微任务(microtask)</strong></p><p>ES6新引入了Promise标准，同时浏览器实现上多了一个microtask微任务概念，在ECMAScript中，microtask也被称为jobs</p><p>已经知道宏任务结束后，会执行渲染，然后执行下一个宏任务， 而微任务可以理解成在当前宏任务执行后立即执行的任务</p><p>当一个宏任务执行完，会在渲染前，将执行期间所产生的所有微任务都执行完</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宏任务 -&gt; 微任务 -&gt; GUI渲染 -&gt; 宏任务 -&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见微任务</p><ul><li>process.nextTick ()-Node</li><li>Promise.then()</li><li>catch</li><li>finally</li><li>Object.observe</li><li>MutationObserver</li></ul><p><strong>测试</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&#39;background:blue&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&#39;background:pink&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&#39;background:black&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>

<span class="token comment">// 1 3 2 4</span>
<span class="token comment">// 粉色 =&gt; 黑色</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong></p><ul><li>浏览器会先执行一个宏任务，紧接着执行当前执行栈产生的微任务，再进行渲染，然后再执行下一个宏任务</li><li>微任务和宏任务不在一个任务队列，不在一个任务队列 <ul><li>例如<code>setTimeout</code>是一个宏任务，它的事件回调在宏任务队列，<code>Promise.then()</code>是一个微任务，它的事件回调在微任务队列，二者并不是一个任务队列</li><li>以Chrome 为例，有关渲染的都是在渲染进程中执行，渲染进程中的任务（DOM树构建，js解析…等等）需要主线程执行的任务都会在主线程中执行，而浏览器维护了一套事件循环机制，主线程上的任务都会放到消息队列中执行，主线程会循环消息队列，并从头部取出任务进行执行，如果执行过程中产生其他任务需要主线程执行的，渲染进程中的其他线程会把该任务塞入到消息队列的尾部，消息队列中的任务都是宏任务</li><li>微任务是如何产生的呢？当执行到script脚本的时候，js引擎会为全局创建一个执行上下文，在该执行上下文中维护了一个微任务队列，当遇到微任务，就会把微任务回调放在微队列中，当所有的js代码执行完毕，在退出全局上下文之前引擎会去检查该队列，有回调就执行，没有就退出执行上下文，这也就是为什么微任务要早于宏任务，也是大家常说的，每个宏任务都有一个微任务队列（由于定时器是浏览器的API，所以定时器是宏任务，在js中遇到定时器会也是放入到浏览器的队列中）</li></ul></li></ul><p>上述过程会不断重复，这就是Event Loop，比较完整的事件循环</p><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// new Promise() 这一部分是一个构造函数，这是一个同步任务</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// .then() 才是一个异步微任务，这一点是非常重要的</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// 1 3 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async/await</h2><p>async/await本质上还是基于Promise的一些封装，而Promise是属于微任务的一种</p><p>所以在使用await关键字与Promise.then效果类似</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// 1 2 3 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以理解为，await 以前的代码，相当于与 new Promise 的同步代码，await 以后的代码相当于 Promise.then的异步</p><h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h2>`,58),d={href:"https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"},r=s(`<p>其实nodejs与浏览器的区别，就是nodejs的宏任务分好几种类型，而这好几种又有不同的任务队列，而不同的任务队列又有顺序区别，而微任务是穿插在每一种宏任务之间的</p><p>在node环境下，process.nextTick的优先级高于Promise，可以简单理解为在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的Promise部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
    timers + poll + check = tick
   ┌───────────────────────────┐
┌─&gt;│      process.nextTick     │     -&gt; 被nextTick包裹的函数被加入到每个tick之前
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           promise         │     -&gt; 微任务队列追加到nextTick之后，tick之前
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
┌─&gt;│           timers          │     -&gt; setTimeout, setInterval
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │     -&gt; i/o
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │     -&gt; nodejs 内部模块
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │&lt;─────┤  connections, │ -&gt; 文件读写，数据库操作，网络请求
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │     -&gt; process.nextTick, setImmediate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第一阶段：timer ，timer 阶段主要做的事是，执行 setTimeout 或 setInterval 注册的回调函数</li><li>第二阶段：pending callback ，大部分 I/O 回调任务都是在 poll 阶段执行的，但是也会存在一些上一次事件循环遗留的被延时的 I/O 回调函数，那么此阶段就是为了调用之前事件循环延迟执行的 I/O 回调函数。</li><li>第三阶段：idle prepare 阶段，仅用于 nodejs 内部模块的使用。</li><li>第四阶段：poll 轮询阶段，这个阶段主要做两件事，一这个阶段会执行异步 I/O 的回调函数； 二 计算当前轮询阶段阻塞后续阶段的时间。</li><li>第五阶段：check阶段，当 poll 阶段回调函数队列为空的时候，开始进入 check 阶段，主要执行 setImmediate 回调函数。</li><li>第六阶段：close阶段，执行注册 close 事件的回调函数。</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int uv_run(uv_loop_t* loop, uv_run_mode mode) {
  // 省去之前的流程。
  while (r != 0 &amp;&amp; loop-&gt;stop_flag == 0) {

    /* 更新事件循环的时间 */ 
    uv__update_time(loop);

    /*第一阶段： timer 阶段执行  */
    uv__run_timers(loop);

    /*第二阶段： pending 阶段 */
    ran_pending = uv__run_pending(loop);

    /*第三阶段： idle prepare 阶段 */
    uv__run_idle(loop);
    uv__run_prepare(loop);

    timeout = 0;
    if ((mode == UV_RUN_ONCE &amp;&amp; !ran_pending) || mode == UV_RUN_DEFAULT)
     /* 计算 timeout 时间  */
      timeout = uv_backend_timeout(loop);
    
    /* 第四阶段：poll 阶段 */
    uv__io_poll(loop, timeout);

    /* 第五阶段：check 阶段 */
    uv__run_check(loop);
    /* 第六阶段： close 阶段  */
    uv__run_closing_handles(loop);
    /* 判断当前线程还有任务 */ 
     r = uv__loop_alive(loop);

    /* 省去之后的流程 */
  }
  return r;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阶段概述" tabindex="-1"><a class="header-anchor" href="#阶段概述" aria-hidden="true">#</a> 阶段概述</h2><ul><li><strong>定时器</strong>：本阶段执行已经被 <code>setTimeout()</code> 和 <code>setInterval()</code> 的调度回调函数。</li><li><strong>待定回调</strong>：执行延迟到下一个循环迭代的 I/O 回调。</li><li><strong>idle, prepare</strong>：仅系统内部使用。</li><li><strong>轮询</strong>：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 <code>setImmediate()</code> 调度的之外），其余情况 node 将在适当的时候在此阻塞。</li><li><strong>检测</strong>：<code>setImmediate()</code> 回调函数在这里执行。</li><li><strong>关闭的回调函数</strong>：一些关闭的回调函数，如：<code>socket.on(&#39;close&#39;, ...)</code>。</li></ul>`,7);function v(m,k){const a=i("ExternalLinkIcon");return l(),t("div",null,[u,n("p",null,[n("a",d,[c("docs"),o(a)])]),r])}const g=e(p,[["render",v],["__file","JS运行机制.html.vue"]]);export{g as default};
