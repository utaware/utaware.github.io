import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-4erVTZtR.js";const i={},l=e(`<h1 id="es5新增特性" tabindex="-1"><a class="header-anchor" href="#es5新增特性" aria-hidden="true">#</a> ES5新增特性</h1><h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">// code</span>
<span class="token comment">// 1. 不允许省略var定义变量</span>
<span class="token comment">// a = 10</span>
<span class="token comment">// 2. 不允许函数形参同名</span>
<span class="token comment">// function a (a) { console.log(a) }</span>
<span class="token comment">// 3. 不允许普通函数中的this代表window</span>
<span class="token comment">// function log () { console.log(this) } // undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法改变" tabindex="-1"><a class="header-anchor" href="#语法改变" aria-hidden="true">#</a> 语法改变</h2><ol><li>保留字(Reserved words)可以作为对象属性了(比如new、function等)。</li><li>允许在对象字面量和数组字面量上的使用尾逗号。</li><li>多行字符串。</li><li>对象的访问器属性。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">new</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;I \\
	Love\\
	You&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;abc&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// &quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><ul><li>trim</li></ul><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2><p><strong>获得和设置原型</strong></p><ul><li>create</li><li>getPrototypeOf</li></ul><p><strong>管理属性特性</strong></p><ul><li>defineProperty</li><li>defineProperties</li><li>getOwnPropertyDescriptor</li></ul><p><strong>列举属性</strong></p><ul><li>keys</li><li>getOwnPropertyNames</li></ul><p><strong>对象处理</strong></p><ul><li>preventExtensions</li><li>isExtensible</li><li>seal</li><li>isSealed</li><li>freeze</li><li>isFrozen</li></ul><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><ul><li>bind</li></ul><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h2><ul><li>isArray</li><li>every</li><li>filter</li><li>forEach</li><li>indexOf</li><li>lastIndexOf</li><li>map</li><li>reduce</li><li>some</li></ul><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><ul><li>parse</li><li>stringify</li></ul>`,23),t=[l];function o(r,c){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","ES5.html.vue"]]);export{u as default};
