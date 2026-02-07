---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}


Recently, a close friend of mine was reading the *The Left Hand of Darkness*.
I haven't read the book but from what I know, there's some kind of matching/mating ritual that takes place between people in this society according to a predetermined set of rules.

Anyways, we were interested in some questions related to the matching process and while thinking about it, inevitably more questions emerged.

Here's the motivating question:
```
Given 150 people who have a "special period" lasting 2 days that occurs every 26 days, how close to always will it be the case that at least 2 of the 150 people are have the same "special period" at the same time?
```

To me, there are some implicit assumptions here that need to be teased out to propery frame the problem, and also some simplifications that make it a bit easier to reason about.

## Problem

Here's a first stab at modeling the problem:
1. Initially, each person is uniformly assigned an "event" that occurs on a day from 1-26 that lasts exactly one day
2. After that, each person's event occurs exactly 26 days after the first occurence, indefinitely

After talking more about the problem, we figured the more interesting questions were about understanding when the system fails, or when the matching algorithm ends up leaving people alone.

This naturally leads to several questions:
1. What's the chance of at least one singleton? (some day in 1-26 with exactly 1 person)
2. How does this fluctuate with the number of people + the number of days?

## Analysis

Let's answer question (1).
If some person is alone on a day, call it day $$i \in \{1,...,26\}$$, then we want to count all ways this can happen.
For a fixed day $$i$$ then, we want to count the ways to assign $$149$$ people to $$25$$ remaining days, that's

$$
    25^{149}
$$

There are $$26$$ ways to choose the single person, so ultimately the probability of this is

$$
    26 * \frac{25^{149}}{26^{150}}
$$

Let's generalize.
Say we have $$n$$ people and $$k$$ days.
Then let $$X_1=$$"At least one person is not matched"

$$
    Pr(X_1) = k * \frac{(k-1)^{(n-1)}}{k^n} = (\frac{k-1}{k})^{n-1}
$$

This can be pushed a bit further as well.
Then let $$X_j=$$"At least j people are not matched", where of course $$j$$ can't exceed $$k-1$$.

Warming up a bit, let's try $$Pr(X_2)$$.
The same procedure works, find all ways to place the first $$j$$ people alone, then count the ways to assign the remaining people to the leftover slots.

So

$$
    Pr(X_2) = \binom{k}{2} \frac{(k-2)^{n-2}}{k^n} = \frac{k!}{(k-2)!2!} * \frac{(k-2)^{n-2}}{k^n} \\
    = \frac{1}{2!} * \frac{k(k-1)}{k*k} * (\frac{k-2}{k})^{n-2}
$$

Generally

$$
    Pr(X_j) = \binom{k}{j} \frac{(k-j)^{n-j}}{k^n} 
$$

TODO: Compute approximation for general probabilty using stirling's formula?

TODO: Add some code here for simulating stuff related to 