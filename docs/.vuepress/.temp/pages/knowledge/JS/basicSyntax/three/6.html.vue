<template><div><h1 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h1>
<p>算术运算符使用数值（字面量或者变量）作为操作数进行运算并返回一个数值。</p>
<p>标准的算术运算符就是加减乘除 <code v-pre>+</code>、<code v-pre>-</code>、<code v-pre>*</code> 和 <code v-pre>/</code>。</p>
<p>当操作数是浮点数时，这些运算符表现得跟它们在大多数编程语言中一样（特殊要注意的是，除零会产生 <code v-pre>Infinity</code> ）。</p>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>+</code></td>
<td>加法</td>
<td><code v-pre>1 + 2</code> = <code v-pre>3</code></td>
</tr>
<tr>
<td><code v-pre>-</code></td>
<td>减法</td>
<td><code v-pre>2 - 1</code> = <code v-pre>1</code></td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>乘法</td>
<td><code v-pre>2 * 2</code> = <code v-pre>4</code></td>
</tr>
<tr>
<td><code v-pre>/</code></td>
<td>除法</td>
<td><code v-pre>4 / 2</code> = <code v-pre>2</code></td>
</tr>
<tr>
<td><code v-pre>%</code></td>
<td>求余，返回相除后余值</td>
<td>12 % 5 = 2</td>
</tr>
<tr>
<td><code v-pre>++</code></td>
<td>自增（更新运算符），分为前自增和后自增</td>
<td>具体参考 更新运算符</td>
</tr>
<tr>
<td><code v-pre>--</code></td>
<td>自减（更新运算符），分为前自减和后自减</td>
<td>具体参考 更新运算符</td>
</tr>
<tr>
<td><code v-pre>-</code></td>
<td>一元负值符，返回操作数的负值</td>
<td><code v-pre>-foo</code></td>
</tr>
<tr>
<td><code v-pre>*</code></td>
<td>一元正值符，若操作数在操作前非数字类型，将试图将其转换成数字类型</td>
<td><code v-pre>+foo</code></td>
</tr>
<tr>
<td><code v-pre>**</code></td>
<td>指数运算符，计算 base（底数） 的 exponent（指数）次方</td>
<td><code v-pre>2 \*\* 3 = 8</code></td>
</tr>
</tbody>
</table>
</div></template>


