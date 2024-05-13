import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-4erVTZtR.js";const e={},p=t(`<h1 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> lifecycle hooks</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/shared/constants.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LIFECYCLE_HOOKS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;activated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;errorCaptured&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;serverPrefetch&#39;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mergehook" tabindex="-1"><a class="header-anchor" href="#mergehook" aria-hidden="true">#</a> mergeHook</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/core/util/options.js</span>
<span class="token constant">LIFECYCLE_HOOKS</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>hook <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  strats<span class="token punctuation">[</span>hook<span class="token punctuation">]</span> <span class="token operator">=</span> mergeHook
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 合并父子为Array Function</span>
<span class="token keyword">function</span> <span class="token function">mergeHook</span> <span class="token punctuation">(</span>
  parentVal<span class="token operator">:</span> <span class="token operator">?</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  childVal<span class="token operator">:</span> <span class="token operator">?</span><span class="token builtin">Function</span> <span class="token operator">|</span> <span class="token operator">?</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> childVal
    <span class="token operator">?</span> parentVal
      <span class="token operator">?</span> parentVal<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
        <span class="token operator">?</span> childVal
        <span class="token operator">:</span> <span class="token punctuation">[</span>childVal<span class="token punctuation">]</span>
    <span class="token operator">:</span> parentVal
  <span class="token keyword">return</span> res
    <span class="token operator">?</span> <span class="token function">dedupeHooks</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token operator">:</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> utils</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/core/util/options.js</span>
<span class="token comment">// 去重 - 防止多个组件实例钩子选项相互影响</span>
<span class="token keyword">function</span> <span class="token function">dedupeHooks</span> <span class="token punctuation">(</span>hooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mergeoptions" tabindex="-1"><a class="header-anchor" href="#mergeoptions" aria-hidden="true">#</a> mergeOptions</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/core/util/options.js</span>
<span class="token keyword">function</span> <span class="token function">mergeField</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> strat <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> defaultStrat
  options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strat</span><span class="token punctuation">(</span>parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","mergeHook.html.vue"]]);export{d as default};
