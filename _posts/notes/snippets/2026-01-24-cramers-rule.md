---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}

Say you want to solve a linear system $$A \bf{x} = b$$ where $$A$$ is an $$m \times n$$ matrix with entries in $$\mathbb{R}$$, where we assume the solution exists and is unique (so $$det[A] \neq 0$$).

Here's one way to do it with a little trick from Cramer.
Let the $n$ columns of $$A$$ be written as $$\bf{a_i}$$ which are each $$m \times 1$$ vectors.

For each column of $$A$$ define a new $$n \times n$$ matrix $$I_i(x) = [\bf{e_1} \ldots \bf{x} \ldots \bf{e_n}]$$ where $$\bf{x}$$ is in column $$i$$.
If we define $$A_i(x)$$ to the matrix $$A$$ but with column $$i$$ replace with $$\bf{b}$$, then we get

$$ 
    A I_i(x) = A_i(x)
$$ 

From properties of determinants we then have 

$$ 
    det [A_i(x)] = det[A]det[I_i(x)]
$$ 

Repeatedly applying row reduction to the rows of $$I_i(x)$$ results in 

$$
    det(I_i(x)) = x_i
$$

so we ultimately get

$$
    x_i = \frac{det[A_i(x)]}{det[A]}
$$

