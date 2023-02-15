<template><div><h1 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h1>
<p><code v-pre>instanceof</code> 运算符用于测试构造函数的 <code v-pre>prototype</code> 属性是否出现在对象的原型链中的任何位置。</p>
<p>代码示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>object <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>object</code></td>
<td>某个实例对象</td>
</tr>
<tr>
<td><code v-pre>constructor</code></td>
<td>某个构造函数</td>
</tr>
</tbody>
</table>
<h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2>
<p>如果 <code v-pre>object</code> 是 <code v-pre>constructor</code> 的实例，返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code>。</p>
<h2 id="检测类型" tabindex="-1"><a class="header-anchor" href="#检测类型" aria-hidden="true">#</a> 检测类型</h2>
<p><code v-pre>instanceof</code> 可以检测某个对象是否是另一个对象的 <strong>实例</strong>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>instanceof</code> 可以检测父类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 继承原型</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> p<span class="token punctuation">;</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


