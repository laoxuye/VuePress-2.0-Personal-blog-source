<template><div><h1 id="对象初始化表达式" tabindex="-1"><a class="header-anchor" href="#对象初始化表达式" aria-hidden="true">#</a> 对象初始化表达式</h1>
<p>对象和数组初始化表达式实际上是一个新创建的对象和数组。这些初始化表达式有时称作 <strong>对象直接量</strong> 和 <strong>数组直接量</strong>。然而和布尔值直接量不同，它们实际上不是原始表达式，因为它们所包含的成员或者元素都是子表达式。</p>
<p>对象初始化表达式和数组初始化表达式非常相似，只是方括号被花括号代替，并且每个子表达式都包含一个属性名和一个冒号作为前缀。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 一个拥有两个属性成员的对象</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2.3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1.2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 一个空对象</span>
<span class="token keyword">var</span> q <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// q 的属性成员和 p 的一样</span>
q<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2.3</span><span class="token punctuation">;</span>
q<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象直接量也可以嵌套。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> rectangle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">upperLeft</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lowRight</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 求对象初始化表达式的值的时候，对象表达式也都会各自计算一次，并且它们不必包含常数值：它们可以是任意 JavaScript 表达式。</p>
<p>同样，对喜爱那个直接量中的属性名称可以是字符串而不是标识符（这在那些只能使用保留字或一些非法标识符作为属性名的地方非常有用）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> side <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> square <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">upperLeft</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> p<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> p<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lowerRight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> p<span class="token punctuation">.</span>x <span class="token operator">+</span> side<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> p<span class="token punctuation">.</span>y <span class="token operator">+</span> side<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


