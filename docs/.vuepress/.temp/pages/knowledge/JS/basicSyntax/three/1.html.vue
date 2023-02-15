<template><div><h1 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h1>
<p><code v-pre>in</code> 是 JavaScript 中的一个成员操作符，用于检查某个属性是否出现在某个对象中。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>key <span class="token keyword">in</span> obj<span class="token punctuation">;</span>
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
<td><code v-pre>key</code></td>
<td>一个字符串类型或者 Symbol 类型的属性名或者数组索引（非 Symbol 类型将会强制转为字符串）。</td>
</tr>
<tr>
<td><code v-pre>obj</code></td>
<td>检查（或其原型链）是否包含具有指定名称的属性的对象。</td>
</tr>
</tbody>
</table>
<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<h3 id="自定义对象" tabindex="-1"><a class="header-anchor" href="#自定义对象" aria-hidden="true">#</a> 自定义对象</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用in操作符</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a'</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'c'</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<p>**注意：**必须使用索引号，而不是数组元素的值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用in操作符</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">in</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token keyword">in</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


