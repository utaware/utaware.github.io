import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-KBOBa-TU.js";const e={},p=t(`<h2 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> runtime</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* @flow */</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;core/index&#39;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;core/config&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> extend<span class="token punctuation">,</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mountComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/instance/lifecycle&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> devtools<span class="token punctuation">,</span> inBrowser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  query<span class="token punctuation">,</span>
  mustUseProp<span class="token punctuation">,</span>
  isReservedTag<span class="token punctuation">,</span>
  isReservedAttr<span class="token punctuation">,</span>
  getTagNamespace<span class="token punctuation">,</span>
  isUnknownElement<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;web/util/index&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./patch&#39;</span>
<span class="token keyword">import</span> platformDirectives <span class="token keyword">from</span> <span class="token string">&#39;./directives/index&#39;</span>
<span class="token keyword">import</span> platformComponents <span class="token keyword">from</span> <span class="token string">&#39;./components/index&#39;</span>

<span class="token comment">// install platform specific utils</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>mustUseProp <span class="token operator">=</span> mustUseProp
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isReservedTag <span class="token operator">=</span> isReservedTag
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isReservedAttr <span class="token operator">=</span> isReservedAttr
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>getTagNamespace <span class="token operator">=</span> getTagNamespace
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>isUnknownElement <span class="token operator">=</span> isUnknownElement

<span class="token comment">// install platform runtime directives &amp; components</span>
<span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>directives<span class="token punctuation">,</span> platformDirectives<span class="token punctuation">)</span>
<span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">,</span> platformComponents<span class="token punctuation">)</span>

<span class="token comment">// install platform patch function</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__patch__ <span class="token operator">=</span> inBrowser <span class="token operator">?</span> patch <span class="token operator">:</span> noop

<span class="token comment">// public mount method</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// devtools global hook</span>
<span class="token comment">/* istanbul ignore next */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>inBrowser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>devtools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>devtools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        devtools<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> Vue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
        process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
        process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;test&#39;</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">[</span>console<span class="token punctuation">.</span>info <span class="token operator">?</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Download the Vue Devtools extension for a better development experience:\\n&#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;https://github.com/vuejs/vue-devtools&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">&amp;&amp;</span>
      config<span class="token punctuation">.</span>productionTip <span class="token operator">!==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">typeof</span> console <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">[</span>console<span class="token punctuation">.</span>info <span class="token operator">?</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">You are running Vue in development mode.\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Make sure to turn on production mode when deploying for production.\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">See more tips at https://vuejs.org/guide/deployment.html</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","02.html.vue"]]);export{k as default};
