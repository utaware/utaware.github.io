import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.d748702c.js";const t={},p=e(`<h1 id="\u8282\u6D41\u548C\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41\u548C\u9632\u6296" aria-hidden="true">#</a> \u8282\u6D41\u548C\u9632\u6296</h1><h2 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728\u65F6\u95F4\u88AB\u89E6\u53D1n\u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728n\u79D2\u5185\u4E8B\u4EF6\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002</span>
<span class="token keyword">function</span> <span class="token function">debounce</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728n\u79D2\u5185\u53EA\u4F1A\u6267\u884C\u4E00\u6B21</span>
<span class="token keyword">function</span> <span class="token function">throttle</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> canRun <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// \u4E3A\u4E86\u9632\u6B62\u9632\u6296\u51FD\u6570\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u65F6\u5019 \u4E5F\u9700\u7B49\u5F85 wait \u79D2</span>
  <span class="token keyword">let</span> immediate <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canRun<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    immediate <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
    canRun <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      canRun <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> immediate <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","NA-02.html.vue"]]);export{d as default};
