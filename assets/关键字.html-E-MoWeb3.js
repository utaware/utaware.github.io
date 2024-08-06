import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-qSMjXEym.js";const t={},p=e(`<h1 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h1><h2 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof</h2><blockquote><p>用于获取对象类型或接口类型中所有键</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TPerson</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TKP</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> TPerson <span class="token comment">// &#39;name&#39; | &#39;age&#39;</span>

<span class="token keyword">const</span> ex1<span class="token operator">:</span> <span class="token constant">TKP</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span>
<span class="token keyword">const</span> ex2<span class="token operator">:</span> <span class="token constant">TKP</span> <span class="token operator">=</span> <span class="token string">&#39;age&#39;</span>
<span class="token keyword">const</span> ex3<span class="token operator">:</span> <span class="token constant">TKP</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><blockquote><p>上下文中获取变量或者属性的类型</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Nyingchi&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> person
<span class="token comment">// type Person = {</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h2><blockquote><p>用于遍历目标类型的属性 key 值</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">O</span></span><span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>p <span class="token keyword">in</span> Keys<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// type O = { name:string, age:string, gender:string }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h2><blockquote><p>创建一个不可变的只读属性</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 只读数组</span>
<span class="token keyword">let</span> numbers<span class="token operator">:</span> <span class="token keyword">readonly</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 报错，无法修改只读数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="infer" tabindex="-1"><a class="header-anchor" href="#infer" aria-hidden="true">#</a> infer</h2><blockquote><p><code>infer</code>相较于<code>any</code>通常作为一个占位符使用, 用来辅助类型推断</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">M</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token constant">T</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> <span class="token constant">M</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> <span class="token constant">M</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// string</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">MC</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token constant">T</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TC1</span></span> <span class="token operator">=</span> <span class="token constant">MC</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TC2</span></span> <span class="token operator">=</span> <span class="token constant">MC</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as" tabindex="-1"><a class="header-anchor" href="#as" aria-hidden="true">#</a> as</h2><blockquote><p>类型断言和类型断路</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> num <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is" tabindex="-1"><a class="header-anchor" href="#is" aria-hidden="true">#</a> is</h2><blockquote><p><code>is</code>关键字经常用来封装&quot;类型判断函数&quot;，通过和函数返回值的比较，从而进行类型收束</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isString_1</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> s <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isString_2</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> s <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> s <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">toUpperCase</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString_1</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Error, x is type of &#39;unknown&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString_2</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Ok</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="override" tabindex="-1"><a class="header-anchor" href="#override" aria-hidden="true">#</a> override</h2><blockquote><p>使用<code>override</code>明确表达方法的重写关系</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;声音&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  override <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;汪&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","关键字.html.vue"]]);export{k as default};
