<template><div><h1 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h1>
<p><code v-pre>delete</code> 关键字用于删除 JavaScript 对象的属性，从而将其定义为 undefined。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">delete</span> object<span class="token punctuation">.</span>property<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>expression</code> 的计算结果应该是某个属性的引用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">delete</span> object<span class="token punctuation">.</span>property<span class="token punctuation">;</span>
<span class="token keyword">delete</span> object<span class="token punctuation">[</span><span class="token string">"property"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>object</td>
<td>必需。要删除属性的对象。</td>
</tr>
<tr>
<td>property</td>
<td>必需。要删除的属性的名称。</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p><code v-pre>delete</code> 运算符会从一个对象中移除指定的属性。如果删除成功，它会返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code>。</p>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<ul>
<li><code v-pre>delete</code> 关键字只能用于删除对象的属性，不能用于删除变量。</li>
<li><code v-pre>delete</code> 只能删除对象的非继承属性，不能删除继承属性。</li>
<li><code v-pre>delete</code> 不会影响原型链。</li>
</ul>
</div></template>


