import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.a21ca551.js";const e={},p=t(`<h1 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h1><blockquote><p>\u5DE5\u5382\u6A21\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u7531\u5B50\u7C7B\u51B3\u5B9A\u5B9E\u4F8B\u5316\u54EA\u4E00\u4E2A\u7C7B\u3002\u8BE5\u6A21\u5F0F\u4F7F\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u5316\u5EF6\u8FDF\u5230\u4E86\u5B50\u7C7B\u3002\u800C\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u63A5\u53E3\u65B9\u6CD5\u4EE5\u4FBF\u521B\u5EFA\u7684\u65F6\u5019\u6307\u5B9A\u81EA\u5DF1\u7684\u5BF9\u8C61\u7C7B\u578B\u3002</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;system&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6BCF\u589E\u52A0\u4E00\u4EA7\u54C1\u5C31\u8981\u589E\u52A0\u4E00\u4E2A\u4EA7\u54C1\u5DE5\u5382\u7684\u7C7B\uFF0C\u589E\u52A0\u4E86\u989D\u5916\u7684\u5F00\u53D1\u91CF\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u4EA7\u54C1</th><th style="text-align:center;">\u5DE5\u5382</th><th style="text-align:center;">\u751F\u4EA7\u7EBF</th></tr></thead><tbody><tr><td style="text-align:center;">\u5DE5\u5382\u6A21\u5F0F</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</td><td style="text-align:center;">N</td><td style="text-align:center;">1</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:center;">\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td></tr></tbody></table><h2 id="\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</h2><blockquote><p>\u552F\u4E00\u5DE5\u5382\u7C7B\uFF0C\u4E00\u4E2A\u4EA7\u54C1\u62BD\u8C61\u7C7B\uFF0C\u5DE5\u5382\u7C7B\u7684\u521B\u5EFA\u65B9\u6CD5\u4F9D\u636E\u5165\u53C2\u5224\u65AD\u5E76\u521B\u5EFA\u5177\u4F53\u4EA7\u54C1\u5BF9\u8C61\u3002</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ISystem</span> <span class="token punctuation">{</span>
  <span class="token generic-function"><span class="token function">create</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">A</span> <span class="token keyword">extends</span> System<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token keyword">type</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0D\u5229\u4E8E\u6269\u5C55</span>
<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>WinSystem<span class="token punctuation">)</span>
f<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</h3><blockquote><p>\u591A\u4E2A\u5DE5\u5382\u7C7B\uFF0C\u4E00\u4E2A\u4EA7\u54C1\u62BD\u8C61\u7C7B\uFF0C\u5229\u7528\u591A\u6001\u521B\u5EFA\u4E0D\u540C\u7684\u4EA7\u54C1\u5BF9\u8C61\uFF0C\u907F\u514D\u4E86\u5927\u91CF\u7684if-else\u5224\u65AD\u3002</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> System
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7C7B\u7684\u4E2A\u6570\u6210\u500D\u589E\u52A0\uFF0C\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u590D\u6742\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h2><blockquote><p>\u591A\u4E2A\u5DE5\u5382\u7C7B\uFF0C\u591A\u4E2A\u4EA7\u54C1\u62BD\u8C61\u7C7B\uFF0C\u4EA7\u54C1\u5B50\u7C7B\u5206\u7EC4\uFF0C\u540C\u4E00\u4E2A\u5DE5\u5382\u5B9E\u73B0\u7C7B\u521B\u5EFA\u540C\u7EC4\u4E2D\u7684\u4E0D\u540C\u4EA7\u54C1\uFF0C\u51CF\u5C11\u4E86\u5DE5\u5382\u5B50\u7C7B\u7684\u6570\u91CF\u3002</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystem</span> <span class="token keyword">extends</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Win7System</span> <span class="token keyword">extends</span> <span class="token class-name">WinSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win7&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Win10System</span> <span class="token keyword">extends</span> <span class="token class-name">WinSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;win10&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacbookSystem</span> <span class="token keyword">extends</span> <span class="token class-name">MacSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac book&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacbookAirSystem</span> <span class="token keyword">extends</span> <span class="token class-name">MacSystem</span> <span class="token punctuation">{</span>
  <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mac book air&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> System
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Win7System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">new</span> <span class="token class-name">Win10System</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacSystemFactory</span> <span class="token keyword">extends</span> <span class="token class-name">SystemFactory</span> <span class="token punctuation">{</span>
  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">MacbookSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">new</span> <span class="token class-name">MacbookAirSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function l(o,i){return s(),a("div",null,c)}var d=n(e,[["render",l],["__file","DP-01.html.vue"]]);export{d as default};
