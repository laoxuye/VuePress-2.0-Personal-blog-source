<template><div><h1 id="类型检测" tabindex="-1"><a class="header-anchor" href="#类型检测" aria-hidden="true">#</a> 类型检测</h1>
<nav class="table-of-contents"><ul><li><router-link to="#typeof">typeof</router-link></li><li><router-link to="#instanceof">instanceof</router-link></li><li><router-link to="#object-prototype-tostring">Object.prototype.toString</router-link></li><li><router-link to="#constructor">constructor</router-link></li><li><router-link to="#数组检测">数组检测</router-link></li></ul></nav>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任何一个构造函数都有一个 <code v-pre>prototype</code> 对象属性，这个对象属性将用作 new 实例化对象的原型对象。</p>
<p><code v-pre>instanceof</code> 适合用于判断对象是否属于 Array、Date 和 RegExp 等内置对象。</p>
<p>不同 window 或 <code v-pre>iframe</code> 之间的对象类型检测无法使用 <code v-pre>instanceof</code> 检测。</p>
<h2 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> Object.prototype.toString</h2>
<p>可以通过 <code v-pre>toString()</code> 来获取每个对象的类型。</p>
<p>为了 <strong>每个对象</strong> 都能通过 <code v-pre>Object.prototype.toString</code> 来检测，需要以 <code v-pre>Function.prototype.call</code> 或者 <code v-pre>Function.prototype.apply</code> 的形式来调用，传递要检查的对象作为第一个参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Undefined]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Null]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Boolean]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>；
<span class="token comment">/// "[object String]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Number]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Array]"</span>

<span class="token class-name">Obejct</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>；
<span class="token comment">//  "[object Object]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>Object.prototype.toString</code> 方法能精准地判断出值的数据类型。</p>
<p><strong>注意事项：</strong></p>
<ul>
<li>方法重写：<code v-pre>Object.prototype.toString</code> 属于 Object 的原型方法，而 Array 或 Function 等类型作为 Object 的实例，都重写了 <code v-pre>toString</code> 方法。因此，不同对象类型调用 <code v-pre>toString</code> 方法时，调用的是重写后的 <code v-pre>toString</code> 方法，而非 Object 上原型 <code v-pre>toString</code> 方法，所以采用 <code v-pre>xxx.toString()</code> 不能得到其对象类型，只能将 <code v-pre>xxx</code> 转换成字符串类型。</li>
</ul>
<h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2>
<p>任何对象都有 <code v-pre>constructor</code> 属性，继承自原型对象，constructor 会指向构造这个对象的构造器或构造函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Student<span class="token punctuation">;</span>
<span class="token comment">//  true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组检测" tabindex="-1"><a class="header-anchor" href="#数组检测" aria-hidden="true">#</a> 数组检测</h2>
<p>ECMAScript5 将 <code v-pre>Array.isArray()</code> 正式引入 JavaScript，该方法能准确检测一个变量是否为数组类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


