import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.d748702c.js";const p={},e=t(`<h1 id="vue\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#vue\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> vue\u751F\u547D\u5468\u671F</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/shared/constants.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LIFECYCLE_HOOKS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u521D\u59CB\u5316\u751F\u547D\u5468\u671F</span>
  <span class="token comment">// \u521D\u59CB\u5316\u4E8B\u4EF6</span>
  <span class="token comment">// \u521D\u59CB\u5316\u6E32\u67D3</span>
  <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u521D\u59CB\u5316injections</span>
  <span class="token comment">// \u521D\u59CB\u5316props,methods,data,computed,watch</span>
  <span class="token comment">// \u521D\u59CB\u5316 provide</span>
  <span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7236\u7EC4\u4EF6 -&gt; \u5B50\u7EC4\u4EF6 (new VueComponent)</span>
  <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;activated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;errorCaptured&#39;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>initMixin</code>\u6302\u8F7D<code>_init</code>\u65B9\u6CD5</p><h2 id="beforecreate-created" tabindex="-1"><a class="header-anchor" href="#beforecreate-created" aria-hidden="true">#</a> beforeCreate &amp;&amp; created</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/instance/init.js</span>
<span class="token comment">// 1. \u6302\u8F7D\u4E86\u4E00\u4E9B\u5C5E\u6027\u5E76\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u503C</span>
<span class="token comment">// 2. $parents $root $child\u4E4B\u95F4\u7684\u5173\u7CFB</span>
<span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
<span class="token comment">// 1. \u628A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4F20\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5728\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u8FDB\u884C\u521D\u59CB\u5316</span>
<span class="token comment">// 2. \u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u5728\u7236\u7EC4\u4EF6\u4E2D\u5904\u7406</span>
<span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
<span class="token comment">// 1. \u5C06\u7EC4\u4EF6\u7684\u63D2\u69FD\u7F16\u8BD1\u6210\u865A\u62DF\u8282\u70B9 DOM \u6811\uFF0C \u4EE5\u5217\u8868\u7684\u5F62\u5F0F\u6302\u8F7D\u5230 vm \u5B9E\u4F8B\uFF0C\u521D\u59CB\u5316\u4F5C\u7528\u57DF\u63D2\u69FD\u4E3A\u7A7A\u5BF9\u8C61\uFF1B</span>
<span class="token comment">// 2. \u5C06\u6A21\u677F\u7684\u7F16\u8BD1\u51FD\u6570\uFF08\u628A\u6A21\u677F\u7F16\u8BD1\u6210\u865A\u62DF DOM \u6811\uFF09\u6302\u8F7D\u5230 vm \u7684 _c \u548C $createElement \u5C5E\u6027\uFF1B</span>
<span class="token comment">// 3. \u6700\u540E\u628A\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684 $attrs \u548C $listeners \u5B9A\u4E49\u6210\u54CD\u5E94\u5F0F\u7684\u3002</span>
<span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u6839\u636Einject\u9009\u9879\u4E2D\u7684\u6570\u636Ekey\u81EA\u5E95\u5411\u4E0A\u67E5\u627E\u7236\u7EA7\u7EC4\u4EF6\u6240\u6CE8\u5165\u7684\u5BF9\u5E94\u503C</span>
<span class="token comment">// \u7531\u4E8Einject\u7684\u503C\u662F\u53EF\u80FD\u88AB\u63A5\u4E0B\u6765\u7684props\uFF0Cwatch\u7B49\u4F7F\u7528\u5230\uFF0C\u6240\u4EE5\u8981\u5148\u4E00\u6B65\u521D\u59CB\u5316</span>
<span class="token comment">// \u800C\u7531\u4E8Einject\u4E00\u5B9A\u662F\u4ECE\u7236\u7EA7\u5411\u5B50\u7EA7\u4F20\u503C\uFF0C\u800C\u5B50\u7EA7\u53C8\u662F\u5728\u7236\u7EA7beforeMounted\u524D\u521B\u5EFA</span>
<span class="token comment">// \u56E0\u6B64\u5373\u4FBFinject\u5728provide\u524D\u5B9E\u9645\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898</span>
<span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve injections before data/props</span>
<span class="token comment">// \u4F9D\u6B21\u6CE8\u5165props, methods, data, computed, watch\u7B49\u6570\u636E</span>
<span class="token comment">// \u4EE5\u4FDD\u8BC1\u5728\u540E\u7EED\u7684\u4F7F\u7528\u4E2D\u53EF\u4EE5\u4F7F\u7528\u5230\u5BF9\u5E94\u7684\u6570\u636E</span>
<span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
<span class="token comment">// \u800C\u7531\u4E8Eprovide\u53EF\u4EE5\u4F7F\u7528\u5230data\u4E4B\u7C7B\u7684\u6570\u636E\uFF0C\u56E0\u6B64\u5728state\u540E\u518D\u521D\u59CB\u5316</span>
<span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve provide after data/props</span>
<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="beforemount-mounted" tabindex="-1"><a class="header-anchor" href="#beforemount-mounted" aria-hidden="true">#</a> beforeMount &amp;&amp; mounted</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/platforms/web/runtime/index.js</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/core/instance/lifecycle.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token operator">?</span>Element<span class="token punctuation">,</span>
  hydrating<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render <span class="token operator">=</span> createEmptyVNode
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> updateComponent
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// we set this to vm._watcher inside the watcher&#39;s constructor</span>
  <span class="token comment">// since the watcher&#39;s initial patch may call $forceUpdate (e.g. inside child</span>
  <span class="token comment">// component&#39;s mounted hook), which relies on vm._watcher being already defined</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span>
  hydrating <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token comment">// manually mounted instance, call mounted on self</span>
  <span class="token comment">// mounted is called for render-created child components in its inserted hook</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="beforeupdate-updated" tabindex="-1"><a class="header-anchor" href="#beforeupdate-updated" aria-hidden="true">#</a> beforeUpdate &amp;&amp; updated</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/observer/scheduler.js</span>
<span class="token keyword">function</span> <span class="token function">callUpdatedHooks</span> <span class="token punctuation">(</span><span class="token parameter">queue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> vm <span class="token operator">=</span> watcher<span class="token punctuation">.</span>vm
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher <span class="token operator">===</span> watcher <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;updated&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentFlushTimestamp <span class="token operator">=</span> <span class="token function">getNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  flushing <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> watcher<span class="token punctuation">,</span> id

  <span class="token comment">// Sort queue before flush.</span>
  <span class="token comment">// This ensures that:</span>
  <span class="token comment">// 1. Components are updated from parent to child. (because parent is always</span>
  <span class="token comment">//    created before the child)</span>
  <span class="token comment">// 2. A component&#39;s user watchers are run before its render watcher (because</span>
  <span class="token comment">//    user watchers are created before the render watcher)</span>
  <span class="token comment">// 3. If a component is destroyed during a parent component&#39;s watcher run,</span>
  <span class="token comment">//    its watchers can be skipped.</span>
  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

  <span class="token comment">// do not cache length because more watchers might be pushed</span>
  <span class="token comment">// as we run existing watchers</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    watcher<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// keep copies of post queues before resetting state</span>
  <span class="token keyword">const</span> activatedQueue <span class="token operator">=</span> activatedChildren<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> updatedQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">resetSchedulerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// call component updated and activated hooks</span>
  <span class="token function">callActivatedHooks</span><span class="token punctuation">(</span>activatedQueue<span class="token punctuation">)</span>
  <span class="token function">callUpdatedHooks</span><span class="token punctuation">(</span>updatedQueue<span class="token punctuation">)</span>

  <span class="token comment">// devtool hook</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>devtools <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>devtools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    devtools<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;flush&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">watcher</span><span class="token operator">:</span> Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// src/core/observer/watcher.js</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="beforedestroy-destroyed" tabindex="-1"><a class="header-anchor" href="#beforedestroy-destroyed" aria-hidden="true">#</a> beforeDestroy &amp;&amp; destroyed</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/instance/lifecycle.js</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$destroy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isBeingDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">)</span>
  vm<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// remove self from parent</span>
  <span class="token keyword">const</span> parent <span class="token operator">=</span> vm<span class="token punctuation">.</span>$parent
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>parent<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>abstract<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activated-deactivated" tabindex="-1"><a class="header-anchor" href="#activated-deactivated" aria-hidden="true">#</a> activated &amp;&amp; deactivated</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/instance/lifecycle.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activateChildComponent</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> direct<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>direct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_directInactive <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInInactiveTree</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_directInactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_inactive <span class="token operator">||</span> vm<span class="token punctuation">.</span>_inactive <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vm<span class="token punctuation">.</span>$children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;activated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deactivateChildComponent</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> direct<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>direct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_directInactive <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInInactiveTree</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>_inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vm<span class="token punctuation">.</span>$children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="callhook" tabindex="-1"><a class="header-anchor" href="#callhook" aria-hidden="true">#</a> callHook</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">callHook</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token literal-property property">hook</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// #7573 disable dep collection when invoking lifecycle hooks</span>
  <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> handlers <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">[</span>hook<span class="token punctuation">]</span>
  <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hook<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> hook</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>handlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeWithErrorHandling</span><span class="token punctuation">(</span>handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_hasHookEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;hook:&#39;</span> <span class="token operator">+</span> hook<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="errorcaptured" tabindex="-1"><a class="header-anchor" href="#errorcaptured" aria-hidden="true">#</a> errorCaptured</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/core/util/error.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handleError</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">err</span><span class="token operator">:</span> Error<span class="token punctuation">,</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Deactivate deps tracking while processing error handler to avoid possible infinite rendering.</span>
  <span class="token comment">// See: https://github.com/vuejs/vuex/issues/1505</span>
  <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> cur <span class="token operator">=</span> vm
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>$parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> hooks <span class="token operator">=</span> cur<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>errorCaptured
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> capture <span class="token operator">=</span> hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> err<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>capture<span class="token punctuation">)</span> <span class="token keyword">return</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">globalHandleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> <span class="token string">&#39;errorCaptured hook&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">globalHandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","V-03.html.vue"]]);export{k as default};
