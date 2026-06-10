---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}

### Sinuosids and Exponentials


Fourier's big idea was to recognize that you can use sinuisoids as building blocks to construct general periodic signals.
A *sinuisoid* here is just some function of the form 

$$
    sin(\omega t + \phi)
$$

where $\omega, \phi \in \mathbb{R}$ can freely vary.

Cosines can be expressed as phase-shifted sines, and linear combinations of sines can be expressed as *exponentials* via

$$
    e^{i \omega t} = cos(\omega t) + i sin(\omega t)
$$

It turns out to be a bit nicer to work with exponentials, so we'll just stick with those since as just shown, we don't lose any expressibility.

### Fourier Series (Just try your best)

Put yourself in the mind of Fourier for a sec. He probably was thinking something along the lines of 

<center><em>i bet a function that repeats is just a ton of scaled sine waves added together</em></center>

How could we formalize this?

Well, a signal $x: \mathbb{R} \to \mathbb{R}$ that repeats is typically called *periodic*, and it just means there's some number $T \in \mathbb{R}$ where $x(t) = x(t + T)$ for any $t \in \mathbb{R}$.

So basically, there's at least one number where once you go past it, the signals just starts over again.
Typically, the smallest such positive value is called the *fundamental period*.

