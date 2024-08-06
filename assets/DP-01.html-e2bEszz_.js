import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-qSMjXEym.js";const e={},p=t(`<h1 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h1><blockquote><p>工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;system&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 每增加一产品就要增加一个产品工厂的类，增加了额外的开发量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">产品</th><th style="text-align:center;">工厂</th><th style="text-align:center;">生产线</th></tr></thead><tbody><tr><td style="text-align:center;">工厂模式</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">简单工厂模式</td><td style="text-align:center;">N</td><td style="text-align:center;">1</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:center;">工厂方法模式</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">抽象工厂模式</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td></tr></tbody></table><h2 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h2><blockquote><p>唯一工厂类，一个产品抽象类，工厂类的创建方法依据入参判断并创建具体产品对象。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ISystem</span> <span class="token punctuation">{</span>
  <span class="token generic-function"><span class="token function">create</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">A</span> <span class="token keyword">extends</span> System<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token keyword">type</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 不利于扩展</span>
<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>WinSystem<span class="token punctuation">)</span>
f<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h3><blockquote><p>多个工厂类，一个产品抽象类，利用多态创建不同的产品对象，避免了大量的if-else判断。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> System
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 类的个数成倍增加，增加了代码的复杂度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h2><blockquote><p>多个工厂类，多个产品抽象类，产品子类分组，同一个工厂实现类创建同组中的不同产品，减少了工厂子类的数量。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Win7System</span> <span class="token keyword">extends</span> <span class="token class-name">WinSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win7&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Win10System</span> <span class="token keyword">extends</span> <span class="token class-name">WinSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win10&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacbookSystem</span> <span class="token keyword">extends</span> <span class="token class-name">MacSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac book&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacbookAirSystem</span> <span class="token keyword">extends</span> <span class="token class-name">MacSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac book air&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> System
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Win7System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">new</span> <span class="token class-name">Win10System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">MacbookSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">new</span> <span class="token class-name">MacbookAirSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","DP-01.html.vue"]]);export{d as default};
