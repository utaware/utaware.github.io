import{_ as n,o as s,c as a,e as p}from"./app.088700e7.js";const t={},e=p(`<h1 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> question</h1><blockquote><p>\u7ED9\u5B9A\u4E00\u4E2A\u53EA\u5305\u62EC &#39;(&#39;\uFF0C&#39;)&#39;\uFF0C&#39;{&#39;\uFF0C&#39;}&#39;\uFF0C&#39;[&#39;\uFF0C&#39;]&#39; \u7684\u5B57\u7B26\u4E32 s \uFF0C\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u6709\u6548\u3002 \u6709\u6548\u5B57\u7B26\u4E32\u9700\u6EE1\u8DB3</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B 1\uFF1A
\u8F93\u5165\uFF1As = &quot;()&quot;
\u8F93\u51FA\uFF1Atrue

\u793A\u4F8B 2\uFF1A
\u8F93\u5165\uFF1As = &quot;()[]{}&quot;
\u8F93\u51FA\uFF1Atrue

\u793A\u4F8B 3\uFF1A
\u8F93\u5165\uFF1As = &quot;(]&quot;
\u8F93\u51FA\uFF1Afalse

\u793A\u4F8B 4\uFF1A
\u8F93\u5165\uFF1As = &quot;([)]&quot;
\u8F93\u51FA\uFF1Afalse

\u793A\u4F8B 5\uFF1A
\u8F93\u5165\uFF1As = &quot;{[]}&quot;
\u8F93\u51FA\uFF1Atrue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7A7A\u5B57\u7B26\u4E32\u7B26\u5408\u6761\u4EF6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> leftToRight <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;(&#39;</span><span class="token operator">:</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;[&#39;</span><span class="token operator">:</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;{&#39;</span><span class="token operator">:</span> <span class="token string">&#39;}&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ch <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// \u5DE6\u62EC\u53F7</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftToRight<span class="token punctuation">[</span>ch<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53F3\u62EC\u53F7\u5F00\u59CB\u5339\u914D</span>
      <span class="token comment">// 1. \u5982\u679C\u6808\u5185\u6CA1\u6709\u5DE6\u62EC\u53F7\uFF0C\u76F4\u63A5false</span>
      <span class="token comment">// 2. \u6709\u6570\u636E\u4F46\u662F\u6808\u9876\u5143\u7D20\u4E0D\u662F\u5F53\u524D\u7684\u53F3\u62EC\u53F7</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> leftToRight<span class="token punctuation">[</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token operator">!==</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6700\u540E\u68C0\u67E5\u6808\u5185\u8FD8\u6709\u6CA1\u6709\u5143\u7D20\uFF0C\u6709\u8BF4\u660E\u8FD8\u6709\u672A\u5339\u914D\u5219\u4E0D\u7B26\u5408</span>
  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> obj<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">!</span>arr<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    fast <span class="token operator">=</span> <span class="token number">0</span>
  c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>fast<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isRightKuoHao</span><span class="token punctuation">(</span>c<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> top <span class="token operator">=</span> c<span class="token punctuation">[</span>slow <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>c<span class="token punctuation">[</span>slow<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;)&quot;</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">!=</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&quot;]&quot;</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">!=</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&quot;}&quot;</span><span class="token operator">:</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">!=</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      slow<span class="token operator">--</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      slow<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    fast<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> slow <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token keyword">function</span> <span class="token function">isRightKuoHao</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> c <span class="token operator">==</span> <span class="token string">&quot;)&quot;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token string">&quot;}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","JC-01.html.vue"]]);export{r as default};
