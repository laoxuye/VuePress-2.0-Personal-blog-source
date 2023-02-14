<template><div><h1 id="类型检测" tabindex="-1"><a class="header-anchor" href="#类型检测" aria-hidden="true">#</a> 类型检测</h1>
<nav class="table-of-contents"><ul><li><router-link to="#typeof">typeof</router-link></li><li><router-link to="#instanceof">instanceof</router-link></li></ul></nav>
<p>类型检测的方法：</p>
<ol>
<li><code v-pre>typeof</code></li>
<li><code v-pre>instanceof</code></li>
<li><code v-pre>Object.prototype.toString</code></li>
<li><code v-pre>constructor</code></li>
</ol>
<h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2>
<p><code v-pre>typeof</code> 操作符返回一个字符串，表示未经计算的操作数的类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// "undefined"</span>

<span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// "object"</span>

<span class="token keyword">typeof</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// "number"</span>

<span class="token keyword">typeof</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token comment">// "number"</span>

<span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// "boolean"</span>

<span class="token keyword">typeof</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
<span class="token comment">// "string"</span>

<span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// "function"</span>

<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// "object"</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// "object"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>typeof</code> 操作符适合对 基本类型（除 null 之外）及 function 的检测使用，而对引用数据类型（如 Array）等不适合使用。</p>
<h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2>
<p><code v-pre>instanceof</code> 运算符用于检测一个对象在其 <strong>原型链</strong> 中是否存在一个构造函数的 <code v-pre>prototype</code> 属性。</p>
<p>左操作数为<strong>对象</strong>，不是就返回 <code v-pre>false</code>，右操作数必须是 <strong>函数对象</strong> 或者 <strong>函数构造器</strong>，不是就返回 <code v-pre>TypeError</code> 异常。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>obj <span class="token keyword">instanceof</span> <span class="token class-name">constr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


