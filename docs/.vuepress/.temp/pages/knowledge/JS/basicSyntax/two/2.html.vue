<template><div><h1 id="数组初始化表达式" tabindex="-1"><a class="header-anchor" href="#数组初始化表达式" aria-hidden="true">#</a> 数组初始化表达式</h1>
<p><strong>数组初始化表达式</strong> 由一对方括号和其中由逗号分隔的列表组成，其结果是一个新创建的数组。通俗的说就是创建一个数据。</p>
<h2 id="逗号分隔" tabindex="-1"><a class="header-anchor" href="#逗号分隔" aria-hidden="true">#</a> 逗号分隔</h2>
<p>数组的元素是 <strong>逗号分隔</strong> 的表达式的值。</p>
<p>空数组：<code v-pre>[]</code> 内留空即表示该数组没有任何元素</p>
<p>拥有两个元素的数组：第一个是 3，第二个是 7。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="嵌套数组" tabindex="-1"><a class="header-anchor" href="#嵌套数组" aria-hidden="true">#</a> 嵌套数组</h2>
<p>数组初始化表达式中的元素初始化表达式也可以是数组的初始化表达式。也就是说，这些表达式是可以嵌套的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="可省略元素" tabindex="-1"><a class="header-anchor" href="#可省略元素" aria-hidden="true">#</a> 可省略元素</h2>
<p>数组直接量中的列表逗号之间的元素可以省略，这时省略的空位会填充值不存在。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sparseArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment">// 相当于</span>
<span class="token comment">// [1, empty x 3, 5]</span>

<span class="token comment">//控制台输出 [ 1, , , , 5 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组直接量的元素列表结尾处可以留下单个逗号，这时并不会创建一个新的值为 <code v-pre>undefined</code> 的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引赋值" tabindex="-1"><a class="header-anchor" href="#索引赋值" aria-hidden="true">#</a> 索引赋值</h2>
<p>通过数组索引赋值，只会给指定索引所在位置赋值，而未赋值的索引位置则表示为<code v-pre>空（empty）</code>，而不是定义为<code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>

arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [0, 1, empty x 8, 10]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 11</span>

ary<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


