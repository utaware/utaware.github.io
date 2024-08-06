import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-qSMjXEym.js";const o={},p=e(`<h1 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode" aria-hidden="true">#</a> vnode</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VNode</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> VNodeData <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">elm</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">ns</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token comment">// rendered in this component&#39;s scope</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> VNodeComponentOptions <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token comment">// component instance</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token comment">// component placeholder node</span>

  <span class="token comment">// strictly internal</span>
  <span class="token literal-property property">raw</span><span class="token operator">:</span> boolean <span class="token comment">// contains raw HTML? (server only)</span>
  <span class="token literal-property property">isStatic</span><span class="token operator">:</span> boolean <span class="token comment">// hoisted static node</span>
  <span class="token literal-property property">isRootInsert</span><span class="token operator">:</span> boolean <span class="token comment">// necessary for enter transition check</span>
  <span class="token literal-property property">isComment</span><span class="token operator">:</span> boolean <span class="token comment">// empty comment placeholder?</span>
  <span class="token literal-property property">isCloned</span><span class="token operator">:</span> boolean <span class="token comment">// is a cloned node?</span>
  <span class="token literal-property property">isOnce</span><span class="token operator">:</span> boolean <span class="token comment">// is a v-once node?</span>
  <span class="token literal-property property">asyncFactory</span><span class="token operator">:</span> Function <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token comment">// async component factory function</span>
  <span class="token literal-property property">asyncMeta</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">isAsyncPlaceholder</span><span class="token operator">:</span> boolean
  <span class="token literal-property property">ssrContext</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token literal-property property">fnContext</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token comment">// real context vm for functional nodes</span>
  <span class="token literal-property property">fnOptions</span><span class="token operator">:</span> <span class="token operator">?</span>ComponentOptions <span class="token comment">// for SSR caching</span>
  <span class="token literal-property property">devtoolsMeta</span><span class="token operator">:</span> <span class="token operator">?</span>Object <span class="token comment">// used to store functional render context for devtools</span>
  <span class="token literal-property property">fnScopeId</span><span class="token operator">:</span> <span class="token operator">?</span>string <span class="token comment">// functional scope id support</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter">tag<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
    children<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    text<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    elm<span class="token operator">?</span><span class="token operator">:</span> Node<span class="token punctuation">,</span>
    context<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    componentOptions<span class="token operator">?</span><span class="token operator">:</span> VNodeComponentOptions<span class="token punctuation">,</span>
    asyncFactory<span class="token operator">?</span><span class="token operator">:</span> Function</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text
    <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm
    <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnContext <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnOptions <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnScopeId <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> asyncFactory
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// DEPRECATED: alias for componentInstance for backwards compat.</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">get</span> <span class="token function">child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[p];function r(l,c){return s(),a("div",null,t)}const d=n(o,[["render",r],["__file","00.html.vue"]]);export{d as default};
