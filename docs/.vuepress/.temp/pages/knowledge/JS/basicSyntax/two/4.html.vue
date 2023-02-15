<template><div><h1 id="属性访问器" tabindex="-1"><a class="header-anchor" href="#属性访问器" aria-hidden="true">#</a> 属性访问器</h1>
<p>属性访问表达式运算得到一个对象属性或一个数组元素的值。</p>
<p>JavaScript 为属性访问定义了两种语法。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<ul>
<li>第一种写法是一个表达式后跟随一个句点和标识符。表达式指定对象，标识符则指定需要访问的属性的名称。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>expression<span class="token punctuation">.</span>identifiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>第二种写法是使用方括号，方括号内是另一个表达式（这种方法适用于对象和数组）。第二个表达式指定要访问的属性的名称或代表要访问数组元素的索引。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>expression<span class="token punctuation">[</span>expression<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不管使用哪种形式的属性访问器，在句点和左方括号之前的表达式总是会首先计算。</p>
<ul>
<li>如果计算结果是 <code v-pre>null</code> 或 <code v-pre>undefined</code>，表达式会抛出一个类型错误异常，因为这两个值都不能包含任意属性</li>
<li>如果计算结果不是对象，JavaScript 会将其<strong>转换为对象</strong></li>
<li>如果对象表达式后跟随句点和标识符，则会查找由这个标识符指定的<strong>属性值</strong>，并将其作为整个表达式的值返回</li>
<li>如果对象表达式后跟随一对方括号，则会计算方括号内的表达式的值并将其转换为<strong>字符串</strong></li>
</ul>
<p>不论哪种情况，如果命名的属性不存在，那么整个属性访问表达式的值就是 undefined。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 一个示例对象</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 一个包含这个对象的示例数组</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token string">"x"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"1"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 6</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


