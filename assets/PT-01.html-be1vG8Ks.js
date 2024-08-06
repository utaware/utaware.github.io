import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c,b as n,d as s,e as o,a as i}from"./app-qSMjXEym.js";const l={},r=n("h1",{id:"two-sum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#two-sum","aria-hidden":"true"},"#"),s(" two-sum")],-1),u={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><div class="hint-container tip"><p class="hint-container-title">示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">twoSum</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>cache<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>target <span class="token operator">-</span> item<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token comment">// // i为0会出错</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(v,m){const a=t("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[n("a",u,[s("leetcode"),o(a)])]),d])}const _=e(l,[["render",k],["__file","PT-01.html.vue"]]);export{_ as default};
