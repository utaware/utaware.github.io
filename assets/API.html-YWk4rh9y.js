import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as d,b as t,d as a,e as n,a as e}from"./app-qSMjXEym.js";const p={},i=t("h1",{id:"npm-request-api",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#npm-request-api","aria-hidden":"true"},"#"),a(" npm request api")],-1),c={href:"https://github.com/npm/registry/tree/master/docs",target:"_blank",rel:"noopener noreferrer"},u=e(`<h2 id="point" tabindex="-1"><a class="header-anchor" href="#point" aria-hidden="true">#</a> point</h2><p><code>GET https://api.npmjs.org/downloads/point/{period}[/{package}]</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">downloads</span><span class="token operator">:</span> <span class="token number">31623</span><span class="token punctuation">,</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">&quot;2014-01-01&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">&quot;2014-01-31&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&quot;jquery&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>All packages, last day: <ul><li>/downloads/point/last-day</li></ul></li><li>All packages, specific date: <ul><li>/downloads/point/2014-02-01</li></ul></li><li>Package &quot;express&quot;, last week: <ul><li>/downloads/point/last-week/express</li></ul></li><li>Package &quot;express&quot;, given 7-day period: <ul><li>/downloads/point/2014-02-01:2014-02-08/express</li></ul></li><li>Package &quot;@slack/client&quot;, last 30 days: <ul><li>/downloads/point/last-month/@slack/client</li></ul></li><li>Package &quot;jquery&quot;, specific month: <ul><li>/downloads/point/2014-01-01:2014-01-31/jquery</li></ul></li></ul><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h2><p><code>GET https://api.npmjs.org/downloads/range/{period}[/{package}]</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">downloads</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&quot;2014-02-27&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">downloads</span><span class="token operator">:</span> <span class="token number">1904088</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&quot;2014-03-04&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">downloads</span><span class="token operator">:</span> <span class="token number">7904294</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">&quot;2014-02-25&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">&quot;2014-03-04&quot;</span><span class="token punctuation">,</span>
	<span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&quot;somepackage&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Downloads per day, last 7 days <ul><li>/downloads/range/last-week</li></ul></li><li>Downloads per day, specific 7 days <ul><li>/downloads/range/2014-02-07:2014-02-14</li></ul></li><li>Downloads per day, last 30 days <ul><li>/downloads/range/last-month/jquery</li></ul></li><li>Downloads per day, specific 30 day period <ul><li>/downloads/range/2014-01-03:2014-02-03/jquery</li></ul></li></ul><h2 id="批量查询" tabindex="-1"><a class="header-anchor" href="#批量查询" aria-hidden="true">#</a> 批量查询</h2><ul><li>Packages &quot;npm&quot;, &quot;express&quot;, last day: /downloads/point/last-day/npm,express</li></ul><h2 id="不同版本号下载量" tabindex="-1"><a class="header-anchor" href="#不同版本号下载量" aria-hidden="true">#</a> 不同版本号下载量</h2><p><code>GET https://api.npmjs.org/versions/{package}/last-week</code></p><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><p><code>GET https://registry.npmjs.org/-/v1/search?text=yargs</code></p><table><thead><tr><th>Name</th><th>Value</th><th>Kind</th><th>Required?</th><th>Notes</th></tr></thead><tbody><tr><td>text</td><td>String</td><td><strong>Query</strong></td><td>❌</td><td>full-text search to apply</td></tr><tr><td>size</td><td>integer</td><td><strong>Query</strong></td><td>❌</td><td>how many results should be returned (default 20, max 250)</td></tr><tr><td>from</td><td>integer</td><td><strong>Query</strong></td><td>❌</td><td>offset to return results from</td></tr><tr><td>quality</td><td>float</td><td><strong>Query</strong></td><td>❌</td><td>how much of an effect should quality have on search results</td></tr><tr><td>popularity</td><td>float</td><td><strong>Query</strong></td><td>❌</td><td>how much of an effect should popularity have on search results</td></tr><tr><td>maintenance</td><td>float</td><td><strong>Query</strong></td><td>❌</td><td>how much of an effect should maintenance have on search results</td></tr></tbody></table>`,15),h={href:"https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md",target:"_blank",rel:"noopener noreferrer"},k=e('<h2 id="包-版本信息" tabindex="-1"><a class="header-anchor" href="#包-版本信息" aria-hidden="true">#</a> 包/版本信息</h2><p><code>GET https://registry.npmjs.org/{package}/{version}</code></p><table><thead><tr><th>Name</th><th>Value</th><th>Kind</th><th>Required?</th><th>Notes</th></tr></thead><tbody><tr><td>package</td><td>String</td><td><strong>Path</strong></td><td>✅</td><td>the name of the package</td></tr><tr><td>version</td><td>String</td><td><strong>Path</strong></td><td>✅</td><td>a version number or <code>latest</code></td></tr></tbody></table><h2 id="limits" tabindex="-1"><a class="header-anchor" href="#limits" aria-hidden="true">#</a> Limits</h2><ul><li>批量查询一次最多只能处理128个包和最多365天的数据。</li><li>仅限于最多18个月的数据。返回数据的最早日期是2015年1月10日</li></ul>',5);function m(g,v){const s=r("ExternalLinkIcon");return l(),d("div",null,[i,t("p",null,[t("a",c,[a("npm"),n(s)])]),u,t("p",null,[t("a",h,[a("special"),n(s)])]),k])}const f=o(p,[["render",m],["__file","API.html.vue"]]);export{f as default};