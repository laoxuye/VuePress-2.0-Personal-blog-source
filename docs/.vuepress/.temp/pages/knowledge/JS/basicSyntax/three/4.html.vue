<template><div><h1 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h1>
<p><code v-pre>typeof</code> 操作符返回一个字符串，表示未经计算的操作数的类型。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> operand<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>operand</code> 是一个 JavaScript 表达式。</p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>operand</td>
<td>必需。要返回其类型的操作数。</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">37</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> <span class="token number">3.14</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> Math<span class="token punctuation">.</span><span class="token constant">LN2</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> <span class="token number">Infinity</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">// true 尽管 NaN 是 "Not-A-Number" 的缩写</span>
<span class="token keyword">typeof</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">;</span> <span class="token comment">//true  但不要使用这种形式！</span>

<span class="token keyword">typeof</span> <span class="token string">"foo"</span> <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> <span class="token string">"bar"</span> <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span> <span class="token comment">// 但不要使用这种形式！</span>

<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token operator">===</span> <span class="token string">"boolean"</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token boolean">false</span> <span class="token operator">===</span> <span class="token string">"boolean"</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"boolean"</span><span class="token punctuation">;</span> <span class="token comment">// 但不要使用这种形式！</span>

<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token string">"undefined"</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">;</span> <span class="token comment">// 使用 typeof 判断数组会返回 "object"</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">;</span>

<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"symbol"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p><code v-pre>typeof</code> 操作符返回一个表示操作数类型的字符串。可能的返回值有：</p>
<table>
<thead>
<tr>
<th>返回值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>undefined</td>
<td><code v-pre>undefined</code></td>
</tr>
<tr>
<td>null</td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td>boolean</td>
<td><code v-pre>true</code> 或 <code v-pre>false</code></td>
</tr>
<tr>
<td>number</td>
<td>任何数字，包括 <code v-pre>NaN</code>（非数字）</td>
</tr>
<tr>
<td>string</td>
<td>任何字符串</td>
</tr>
<tr>
<td>symbol</td>
<td>任何 <code v-pre>Symbol</code></td>
</tr>
<tr>
<td>function</td>
<td>任何函数</td>
</tr>
<tr>
<td>object</td>
<td>任何对象，包括 <code v-pre>Array</code>、<code v-pre>Date</code>、<code v-pre>null</code>、<code v-pre>Math</code> 等</td>
</tr>
</tbody>
</table>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<ul>
<li><code v-pre>typeof</code> 操作符对于 <code v-pre>null</code> 值返回 <code v-pre>&quot;object&quot;</code>，这是一个已知的错误，因为 <code v-pre>null</code> 不是对象。</li>
</ul>
<h2 id="特别的-null" tabindex="-1"><a class="header-anchor" href="#特别的-null" aria-hidden="true">#</a> 特别的 <code v-pre>null</code></h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当运算符应用于 <code v-pre>null</code> 值时，其结果为 <code v-pre>&quot;object&quot;</code>。这是 JavaScript 语言设计上的一个历史遗留问题，属于一个已知的 Bug。</p>
<p><code v-pre>null</code> 表示一个空对象指针，也就是说它本质上是一个空的对象引用。在 JavaScript 早期的实现中，<code v-pre>null</code> 值被错误地识别为一个对象。这是因为在 JavaScript 中，对象的类型信息存储在对象的头部信息中，而 <code v-pre>null</code> 值的头部信息被设置为全零，与对象的头部信息相同。因此，当 <code v-pre>typeof</code> 运算符应用于 <code v-pre>null</code> 值时，它返回 <code v-pre>&quot;object&quot;</code>。</p>
<p>虽然这是一个已知的 Bug，但由于历史原因，为了保持向后兼容性，JavaScript 的实现中仍然保留了这个 Bug。因此，当您在代码中使用 <code v-pre>typeof null</code> 运算符时，其结果将始终为 <code v-pre>&quot;object&quot;</code>。</p>
<p>需要注意的是，这个 Bug 只会影响 <code v-pre>null</code> 值，对其他类型的值的 <code v-pre>typeof</code> 运算结果没有影响。</p>
</div></template>


