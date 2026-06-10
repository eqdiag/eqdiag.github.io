---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}

TODO: Geometric product

Here's a simple way to derive the geometric product from first principles, a kind of generalization of the dot and cross products.
The geometric product gives a natural way to extend multiplication to vectors and beyond.

Given a scalar $$a \in \mathbb{R}$$, when you perform $$aa = |a|^2$$, which motivates a similiar constraint for vector multiplication.
Note also that $$a(b+c) = ab + ac = (b+c)a$$ and $$a(kb) = k(ab)$$.
So if the goal then is generalize multiplication beyond scalars and capture the core algebraic properties, then we should demand at least the following properties:

(1)
$$
    vv = |v|^2
$$


(2)
$$
    u(v + w) = uv + uw 
$$

(3)
$$
    u(\alpha v) = \alpha (uv)
$$

Note that in general, the geometric proudct should be some map $$\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}^n$$.
Namely, it takes two vectors of the same dimension and gives you a new one of that dimensions.

Recall that $$\{e_1,...,e_n\}$$ forms a basis for $$\mathbb{R}^n$$.

By property (1) we have

$$
    2 = |e_i + e_j|^2 = (e_i +e_j)^2 = e_ie_i + e_ie_j +e_je_i + e_je_j \\
    = |e_i|^2 + e_ie_j + e_je_i + |e_j|^2 \\
    = 2 + e_ie_j + e_je_i
$$

but this implies

$$
    e_ie_j = -e_je_i
$$

This is a pretty important property, it says that in general the basis vectors do NOT commute.

What does this mean for example in $$\mathbb{R}^2$$.
Take 2 vectors there $$v,w$$ where
$$v = v_1e_1 + v_2e_2$$ and $$w = w_1e_1 + w_2e_2$$.
Then

$$
    vw = (v_1e_1 + v_2e_2)(w_1e_1 + w_2e_2) \\
    = v_1w_1e_1_
$$