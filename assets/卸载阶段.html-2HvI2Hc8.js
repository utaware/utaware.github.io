import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-KBOBa-TU.js";const t={},p=e(`<h1 id="卸载阶段" tabindex="-1"><a class="header-anchor" href="#卸载阶段" aria-hidden="true">#</a> 卸载阶段</h1><ul><li><code>beforeDestroy</code></li><li><code>destroyed</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Vue<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$destroy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vm<span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isBeingDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">)</span>
  vm<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// remove self from parent</span>
  <span class="token keyword">const</span> parent <span class="token operator">=</span> vm<span class="token punctuation">.</span>$parent
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>parent<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token keyword">abstract</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">remove</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>$children<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// teardown watchers</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">.</span>length
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// remove reference from data ob</span>
  <span class="token comment">// frozen object may not have observer.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>__ob__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>__ob__<span class="token punctuation">.</span>vmCount<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// call the last hook...</span>
  vm<span class="token punctuation">.</span>_isDestroyed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// invoke destroy hooks on current rendered tree</span>
  vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token comment">// fire destroyed hook</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// turn off all instance listeners.</span>
  vm<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// remove __vue__ reference</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// release circular reference (#6759)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 标记组件即将被销毁: _isBeingDestroyed = true</span>
<span class="token comment">// 2. 从parent.$children删除自身: remove(parent.$children, vm)</span>
<span class="token comment">// 3. 销毁相关watcher: vm._watcher.teardown()</span>
<span class="token comment">// 4. 执行销毁钩子函数: vm.__patch__(vm._vnode, null)</span>
<span class="token comment">// 5. 解绑相关事件: vm.$off()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> $destroy</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/core/vdom/create-component.js</span>
<span class="token keyword">const</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">destroy</span> <span class="token punctuation">(</span>vnode<span class="token operator">:</span> MountedComponentVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> componentInstance <span class="token punctuation">}</span> <span class="token operator">=</span> vnode
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>componentInstance<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","卸载阶段.html.vue"]]);export{d as default};
