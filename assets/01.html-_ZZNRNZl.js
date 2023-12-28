import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-KBOBa-TU.js";const p={},e=t(`<h1 id="entry-runtime-with-compiler" tabindex="-1"><a class="header-anchor" href="#entry-runtime-with-compiler" aria-hidden="true">#</a> entry-runtime-with-compiler</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/platforms/web/entry-runtime-with-compiler.js</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;core/config&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> warn<span class="token punctuation">,</span> cached <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mark<span class="token punctuation">,</span> measure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core/util/perf&#39;</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;./runtime/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compileToFunctions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./compiler/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  shouldDecodeNewlines<span class="token punctuation">,</span>
  shouldDecodeNewlinesForHref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./util/compat&#39;</span>

<span class="token keyword">const</span> idToTemplate <span class="token operator">=</span> <span class="token function">cached</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">return</span> el <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>innerHTML
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> mount <span class="token operator">=</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">===</span> document<span class="token punctuation">.</span>body <span class="token operator">||</span> el <span class="token operator">===</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Do not mount Vue to &lt;html&gt; or &lt;body&gt; - mount to normal elements instead.</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options
  <span class="token comment">// resolve template/el and convert to render function</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template
    <span class="token comment">// template选项</span>
    <span class="token comment">//   1. #开头的html模板</span>
    <span class="token comment">//   2. dom元素节点</span>
    <span class="token comment">//   3. 以上都不满足(this)</span>
    <span class="token comment">// el选项</span>
    <span class="token comment">//   - 获取对应的html</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          template <span class="token operator">=</span> <span class="token function">idToTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
          <span class="token comment">/* istanbul ignore if */</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn</span><span class="token punctuation">(</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Template element not found or is empty: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span>template<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
              <span class="token keyword">this</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        template <span class="token operator">=</span> template<span class="token punctuation">.</span>innerHTML
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;invalid template option:&#39;</span> <span class="token operator">+</span> template<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      template <span class="token operator">=</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> staticRenderFns <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>
        template<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">outputSourceRange</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
          shouldDecodeNewlines<span class="token punctuation">,</span>
          shouldDecodeNewlinesForHref<span class="token punctuation">,</span>
          <span class="token literal-property property">delimiters</span><span class="token operator">:</span> options<span class="token punctuation">.</span>delimiters<span class="token punctuation">,</span>
          <span class="token literal-property property">comments</span><span class="token operator">:</span> options<span class="token punctuation">.</span>comments<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">this</span>
      <span class="token punctuation">)</span>
      options<span class="token punctuation">.</span>render <span class="token operator">=</span> render
      options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> staticRenderFns

      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
        <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> compile</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;compile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;compile end&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */</span>
<span class="token keyword">function</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">el</span><span class="token operator">:</span> Element</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>outerHTML<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el<span class="token punctuation">.</span>outerHTML
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> container<span class="token punctuation">.</span>innerHTML
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span>compile <span class="token operator">=</span> compileToFunctions

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark</h2><blockquote><p>在 <code>Vue</code> 原型上提供 <code>$mount</code> 方法，在 <code>render</code> 选项不存在的情况下尝试通过 <code>el</code> 和 <code>template</code> 选项补充转化为所需 <code>render</code> 内容、在后续的 <code>mountComponent</code> 中创建 <code>Wather</code> 动态渲染，完成 <code>mounted</code> 过程</p></blockquote>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","01.html.vue"]]);export{k as default};
