import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-qSMjXEym.js";const t={},p=e(`<h1 id="es11新增特性" tabindex="-1"><a class="header-anchor" href="#es11新增特性" aria-hidden="true">#</a> ES11新增特性</h1><h2 id="promise-allsettled" tabindex="-1"><a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a> Promise allSettled</h2><p>返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>reject<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// rejected</span>
<span class="token comment">// fulfilled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空值处理-nullish-coalescing-operator" tabindex="-1"><a class="header-anchor" href="#空值处理-nullish-coalescing-operator" aria-hidden="true">#</a> 空值处理(Nullish coalescing Operator)</h2><p>如果表达式在 ?? 的左侧 运算符求值为undefined或null，返回其右侧。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> a <span class="token operator">||</span> <span class="token number">0</span> <span class="token comment">// 当左侧为任意false值都会返回右侧</span>
  b <span class="token operator">=</span> b <span class="token operator">??</span> <span class="token number">0</span> <span class="token comment">// 仅当undefined或null返回右侧</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链-optional-chaining" tabindex="-1"><a class="header-anchor" href="#可选链-optional-chaining" aria-hidden="true">#</a> 可选链(Optional chaining)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 避免了因为属性不存在导致的报错行为</span>
<span class="token comment">// 本质是测试左边的值是否存在</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token operator">?.</span>name<span class="token operator">?.</span>age<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token operator">?.</span>name<span class="token operator">?.</span>age<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token operator">?.</span>name<span class="token operator">?.</span>age<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>name<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// TypeError: Cannot read property &#39;age&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-matchall" tabindex="-1"><a class="header-anchor" href="#string-matchall" aria-hidden="true">#</a> String matchAll</h2><p><strong>它避免了带有/g标志的正则表达式</strong>(这在很多情况下带来了许多问题)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ss <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token comment">// [&#39;l&#39;, index: 2, input: &#39;hello world&#39;, groups: undefined]</span>
<span class="token keyword">const</span> matchSingle <span class="token operator">=</span> ss<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;l&#39;, &#39;l&#39;, &#39;l&#39;]</span>
<span class="token keyword">const</span> matchReg <span class="token operator">=</span> ss<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">l</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token comment">// RegExpStringIterator</span>
<span class="token keyword">const</span> matchAll <span class="token operator">=</span> ss<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> matchAll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// [&#39;l&#39;, index: 2, input: &#39;hello world&#39;, groups: undefined]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h2><p>JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到53个二进制位（相当于16个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得JavaScript不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。</p><p>BigInt只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// // 超过 53 个二进制位的数值，无法保持精度</span>
<span class="token comment">// Math.pow(2, 53) === Math.pow(2, 53) + 1 // true</span>

<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">1n</span>  <span class="token comment">// 追加 n 以创建 BigInt</span>
<span class="token keyword">typeof</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// bigint</span>

<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态导入" tabindex="-1"><a class="header-anchor" href="#动态导入" aria-hidden="true">#</a> 动态导入</h2><p>动态导入返回请求模块的模块名称空间对象的promise 。因此，可以配合使用async/await。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./api-scripts/button-click.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  module<span class="token punctuation">.</span><span class="token function">clickEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="export-import" tabindex="-1"><a class="header-anchor" href="#export-import" aria-hidden="true">#</a> export &amp; import</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// export * as ns from &#39;./info&#39;</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ns <span class="token keyword">from</span> <span class="token string">&#39;./info&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> ns <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import-meta" tabindex="-1"><a class="header-anchor" href="#import-meta" aria-hidden="true">#</a> import.meta</h2><p>返回当前模块的url路径，只能在模块内部使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// { url: &quot;http://localhost:8080/main.js&quot; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标准化-globalthis-对象" tabindex="-1"><a class="header-anchor" href="#标准化-globalthis-对象" aria-hidden="true">#</a> 标准化 globalThis 对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">getGlobal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> self <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> window <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> global <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> global <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;unable to locate global object&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","ES11.html.vue"]]);export{d as default};