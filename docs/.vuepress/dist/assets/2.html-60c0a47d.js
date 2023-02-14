import{_ as o,M as c,p,q as l,R as n,N as e,V as t,t as s,a1 as i}from"./framework-de73eade.js";const u={},d=n("h1",{id:"类型检测",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型检测","aria-hidden":"true"},"#"),s(" 类型检测")],-1),r={class:"table-of-contents"},k=i(`<p>类型检测的方法：</p><ol><li><code>typeof</code></li><li><code>instanceof</code></li><li><code>Object.prototype.toString</code></li><li><code>constructor</code></li></ol><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p><code>typeof</code> 操作符返回一个字符串，表示未经计算的操作数的类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;undefined&quot;</span>

<span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;object&quot;</span>

<span class="token keyword">typeof</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;number&quot;</span>

<span class="token keyword">typeof</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;number&quot;</span>

<span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;boolean&quot;</span>

<span class="token keyword">typeof</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;string&quot;</span>

<span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;function&quot;</span>

<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;object&quot;</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;object&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>typeof</code> 操作符适合对 基本类型（除 null 之外）及 function 的检测使用，而对引用数据类型（如 Array）等不适合使用。</p><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p><code>instanceof</code> 运算符用于检测一个对象在其 <strong>原型链</strong> 中是否存在一个构造函数的 <code>prototype</code> 属性。</p><p>左操作数为<strong>对象</strong>，不是就返回 <code>false</code>，右操作数必须是 <strong>函数对象</strong> 或者 <strong>函数构造器</strong>，不是就返回 <code>TypeError</code> 异常。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>obj <span class="token keyword">instanceof</span> <span class="token class-name">constr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Student<span class="token punctuation">;</span>

<span class="token keyword">const</span> ben <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ben <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>

<span class="token keyword">const</span> one <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
one <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
one <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
ben <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(m,b){const a=c("router-link");return p(),l("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#typeof"},{default:t(()=>[s("typeof")]),_:1})]),n("li",null,[e(a,{to:"#instanceof"},{default:t(()=>[s("instanceof")]),_:1})])])]),k])}const y=o(u,[["render",v],["__file","2.html.vue"]]);export{y as default};
