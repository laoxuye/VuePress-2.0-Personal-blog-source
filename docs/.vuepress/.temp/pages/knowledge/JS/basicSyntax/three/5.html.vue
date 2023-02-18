<template><div><h1 id="字符串运算符" tabindex="-1"><a class="header-anchor" href="#字符串运算符" aria-hidden="true">#</a> 字符串运算符</h1>
<p>字符串运算符（用 <code v-pre>+</code> 加号表示）用于把两个字符串值相连接。操作值位于运算符两侧，运算返回另一个字符串，它是两个操作数串的结合。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">'Hello'</span> <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> <span class="token string">'world!'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 'Hello world!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写操作符 （<code v-pre>+=</code> 用加等于号表示）也可以用来拼接字符串，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span>

foo <span class="token operator">+=</span> <span class="token string">' world!'</span><span class="token punctuation">;</span>
<span class="token comment">// 相当于 myString = myString + 'bet'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// "Hello world!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


