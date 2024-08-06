import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-qSMjXEym.js";const o={},t=e(`<h1 id="继承-二" tabindex="-1"><a class="header-anchor" href="#继承-二" aria-hidden="true">#</a> 继承(二)</h1><h2 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> <code>__proto__</code></h2><p>作为<code>Object.prototype</code>上的一个存取器属性主要用来获取或者设置某个对象的<code>[[prototype]]</code> internal-slot。它形成对象的原型链，用于对象的属性访问。</p><h2 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> <code>prototype</code></h2><p><code>prototype</code>用于存储实例的公共属性，如果一个Built-in function本来就不打算用于创建&amp;&amp;初始化一个对象(即不作为constructor使用)，那么引擎就没有必要事先为其定义prototype属性。</p><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> <code>constructor</code></h2><p>如果一个function-object 既具有<code>prototype</code>属性，又具有<code>[[construct]]</code>internal-method，那么它就是一个constructor，此时该function-object承担着creates and initializes objects的责任。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ol><li><code>Proxy</code>产生的对象并没有<code>__proto__</code></li><li><code>Math</code>下的函数并没有<code>prototype</code>和<code>constructor</code></li></ol></div><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> <code>new</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">newOperator</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个新对象o</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 将构造函数的this指向新对象o</span>
  <span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token comment">// 将新对象o的原型对象指向构造函数的原型属性</span>
  <span class="token comment">// o.__proto__ = fn.prototype</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token comment">// 如果返回值是个对象(引用类型)则返回该对象，否则返回新对象o</span>
  <span class="token keyword">return</span> f <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> f <span class="token operator">:</span> o
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="假想" tabindex="-1"><a class="header-anchor" href="#假想" aria-hidden="true">#</a> 假想</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 首先假定了一个环境中只含有对象这一概念</span>
<span class="token comment">// 那么可以通过简单的方式创建一些对象</span>
<span class="token keyword">var</span> a0 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
<span class="token comment">// 但如果创建相似结构的对象，随着属性的增多，这似乎开始显得繁琐</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> a2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jerry&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span>
<span class="token comment">// 那么能否通过一种方式，更便捷的创建对象</span>
<span class="token comment">// 使用function似乎是一种不错的选择，但他不是已经被我们用来执行代码了吗</span>
<span class="token comment">// 嘿，那只是一种方式，我们难道不能通过些其他的东西变成其他方式吗</span>
<span class="token comment">// 哦，也许使用一个new作为关键字好像不错，似乎创建了一个新的对象</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;simth&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
<span class="token comment">// 这看上去好像不错，但假设他们具有完全相同的属性，这是否显得有些不必要？</span>
<span class="token comment">// 显然，如果再去逐一增加某一项属性会显得更加笨拙</span>
<span class="token comment">// 如果给这些对象添加一个能连接到相同属性集合的通道怎么样？</span>
<span class="token comment">// 把他们连接起来，这好像非常不错</span>
<span class="token comment">// 如果还是写在里面好像，会不太合适，也许他应该更特殊一些</span>
<span class="token comment">// 既然他们具有相同的属性，反过来说不也像是通过类似的方式被创建出来的</span>
<span class="token comment">// 的确，那么就叫[[prototype]]怎么样，就像是创建他们的原型</span>
<span class="token comment">// 那我们如何去描述这种联系呢？</span>
<span class="token comment">// 既然是函数创建了他们，那么在函数上添加这个属性怎么样</span>
<span class="token comment">// 可那是函数，添加属性不应该是在对象上的行为吗</span>
<span class="token comment">// 嘿，既然他已经能做那么多事了，为什么我们不能让他看起来也像一个对象</span>
<span class="token comment">// 并且这样就只有对象了？一个可执行的对象!</span>
<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token string">&#39;person&#39;</span> <span class="token punctuation">}</span>
Person<span class="token punctuation">[</span><span class="token punctuation">[</span>prototype<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> common
a3<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> common
<span class="token comment">// 也许为了标明这个对象和函数的关系还应该做一些措施</span>
common<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Person
<span class="token comment">// 这好像是一种类似于继承的关系，那么我怎么样去确定这种关系？</span>
<span class="token keyword">function</span> <span class="token function">instanceOf</span> <span class="token punctuation">(</span><span class="token parameter">o<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> o<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> f<span class="token punctuation">.</span>prototype
<span class="token punctuation">}</span>
<span class="token comment">// 如果有很多的对象最终串联到一个顶级对象</span>
<span class="token comment">// 或者更确切的说一个顶级对象衍生了下面无数对象</span>
<span class="token comment">// 下面的对象可以通过__proto__一直往上串联起来</span>
<span class="token comment">// 这就好像一颗大树一样，而单一条而言又像一条链一样</span>
<span class="token comment">// 从这个过程来看，两个属性本没有什么特别意义，都是为了简化这一实现的接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[t];function c(l,i){return s(),a("div",null,p)}const u=n(o,[["render",c],["__file","继承(二).html.vue"]]);export{u as default};
