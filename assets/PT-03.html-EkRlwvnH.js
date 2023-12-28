import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,b as n,e as s,d as i,a as c}from"./app-KBOBa-TU.js";const l={},u=n("h1",{id:"longest-substring-without-repeating-characters",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#longest-substring-without-repeating-characters","aria-hidden":"true"},"#"),s(" longest-substring-without-repeating-characters")],-1),r={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。</p><div class="hint-container tip"><p class="hint-container-title">示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1:

输入: s = &quot;abcabcbb&quot;
输出: 3
解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。

示例 2:

输入: s = &quot;bbbbb&quot;
输出: 1
解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。

示例 2:

输入: s = &quot;pwwkew&quot;
输出: 3
解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLongestSubstring</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> result<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(v,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("leetcode"),i(a)])]),d])}const g=e(l,[["render",k],["__file","PT-03.html.vue"]]);export{g as default};
