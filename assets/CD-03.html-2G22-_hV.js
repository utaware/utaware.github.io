import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-qSMjXEym.js";const p={},o=t(`<h1 id="重新排序" tabindex="-1"><a class="header-anchor" href="#重新排序" aria-hidden="true">#</a> 重新排序</h1><p>给定一个只包含大写英文字母的字符串S，要求你给出对S重新排列的所有不相同的排列数。</p><p>如：S为ABA，则不同的排列有ABA、AAB、BAA三种。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 阶乘 - 不考虑重复所有可能性</span>
<span class="token keyword">function</span> <span class="token function">factorial</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> t <span class="token operator">*=</span> c<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 考虑重复需要排除的可能性</span>
<span class="token keyword">function</span> <span class="token function">repeatCount</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> t <span class="token operator">*=</span> c<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 所有可能性排除重复的情况：总数 / 重复次数</span>
<span class="token keyword">function</span> <span class="token function">totalCount</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">factorial</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">repeatCount</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">totalCount</span><span class="token punctuation">(</span><span class="token string">&#39;ABA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">totalCount</span><span class="token punctuation">(</span><span class="token string">&#39;ABCDEFGHHA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 907200</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">totalCount</span><span class="token punctuation">(</span><span class="token string">&#39;AABBCC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(p,[["render",e],["__file","CD-03.html.vue"]]);export{r as default};
