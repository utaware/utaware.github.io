import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as e,c as o,b as n,d as s,e as c,a as l}from"./app-qSMjXEym.js";const i={},u=n("h1",{id:"valid-parentheses",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#valid-parentheses","aria-hidden":"true"},"#"),s(" valid-parentheses")],-1),r={href:"https://leetcode.cn/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。 有效字符串需满足</p><div class="hint-container tip"><p class="hint-container-title">示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：
输入：s = &quot;()&quot;
输出：true

示例 2：
输入：s = &quot;()[]{}&quot;
输出：true

示例 3：
输入：s = &quot;(]&quot;
输出：false

示例 4：
输入：s = &quot;([)]&quot;
输出：false

示例 5：
输入：s = &quot;{[]}&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 空字符串符合条件</span>
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
    <span class="token comment">// 左括号</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftToRight<span class="token punctuation">[</span>ch<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 右括号开始匹配</span>
      <span class="token comment">// 1. 如果栈内没有左括号，直接false</span>
      <span class="token comment">// 2. 有数据但是栈顶元素不是当前的右括号</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> leftToRight<span class="token punctuation">[</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span> <span class="token operator">!==</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 最后检查栈内还有没有元素，有说明还有未匹配则不符合</span>
  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(v,m){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("leetcode"),c(a)])]),k])}const w=p(i,[["render",d],["__file","PT-00.html.vue"]]);export{w as default};
