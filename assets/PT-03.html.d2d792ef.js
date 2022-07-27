import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,b as n,d as i,e as s,a as c}from"./app.d748702c.js";const l={},u=n("h1",{id:"longest-substring-without-repeating-characters",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#longest-substring-without-repeating-characters","aria-hidden":"true"},"#"),s(" longest-substring-without-repeating-characters")],-1),r={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},d=s("leetcode"),k=c(`<p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u7684\u957F\u5EA6\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u793A\u4F8B 1:

\u8F93\u5165: s = &quot;abcabcbb&quot;
\u8F93\u51FA: 3
\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;abc&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002

\u793A\u4F8B 2:

\u8F93\u5165: s = &quot;bbbbb&quot;
\u8F93\u51FA: 1
\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;b&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002

\u793A\u4F8B 2:

\u8F93\u5165: s = &quot;pwwkew&quot;
\u8F93\u51FA: 3
\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;wke&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002
     \u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C&quot;pwke&quot; \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLongestSubstring</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[d,i(a)])]),k])}var f=e(l,[["render",v],["__file","PT-03.html.vue"]]);export{f as default};
