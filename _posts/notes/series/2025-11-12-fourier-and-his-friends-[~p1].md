---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}


## Basics of Signals

Signals are pretty much another name for real-valued functions.
If we're talking about the continuous world, by a function we just mean some $$x(t): \mathbb{R} \to \mathbb{R}$$.

It's useful to able to build signals from certain building blocks that makes general analysis quite a bit easier.

### Dirac Delta

One such example is the delta function $$\delta(t): \mathbb{R} \to \mathbb{R}$$ which is defined by the two following properties:

$$ 
    \int_{-\infty}^{\infty}\delta(t)dt = 1  
$$ 

and for any signal $$x(t)$$

$$ 
    \int_{-\infty}^{\infty}\delta(t)x(t)dt = x(0) \; \textit{(sifting property)}
$$ 

Intutively, the delta function is zero everywhere and infinitely tall at $$t=0$$, though this can be more precise with tools from
[distribution theory](https://en.wikipedia.org/wiki/Distribution_(mathematical_analysis)).

This delta friend shows up a lot in physics as well, and it's really this *sifting property* that is analytically useful.
Just to generalize a bit, notice that for any $$a \in \mathbb{R}$$, via a change of variables:

$$ 
    \int_{-\infty}^{\infty}\delta(t-a)x(t)dt = \int_{-\infty}^{\infty}\delta(t)x(t+a)dt = x(a)
$$ 

so really, it just allows you a convenient way to get a hold on a single value of a continuous function.

This allows us to write any signal in a strange but, as we will see soon, useful way:

$$ 
    x(t) = \int_{-\infty}^{\infty}x(\tau)\delta(t - \tau)d\tau
$$ 

If you stare at this for a moment, it's sorta like a sum, specifically a weighted linear combination where the weights
are the function values and basis functions are the delta function shifted to each point.
This will be useful in a sec, I promise.

## Basics of Systems

Informally, a system is an object that takes a function as input and spits out another function as output.
When I first encountered them when studying math, people called them "operators", but it seems like in engineering they tend to be called systems.

If we let $$\mathbb{X}$$ be the set of all functions, then we can define a system to just be a map $$F: \mathbb{X} \to \mathbb{X}$$, so $$F$$ maps functions to functions.


## LTI Systems

There is a particular subset of systems that get a lot of attention due to their nice algebraic properties.
These are so called "linear time-invariant systems".

Let's break that down.

*Linear* here for a system $$F$$ means we can do all the typical linear things.
So if $$\alpha,\beta \in \mathbb{R}$$ and $$x_1(t),x_2(t)$$ are signals, then

$$ F(\alpha x_1(t) + \beta x_2(t)) = \alpha F(x_1(t)) + \beta F(x_2(t))$$

*Time-invariant* means that for any $$t_0 \in \mathbb{R}$$, if we define $$y(t) = F(x(t))$$, then

$$ F(x(t-t_0)) = y(t-t_0)$$

Notationally, this feels a bit cumbersome to me, so I personally like to think of it as follows.
Define a special system called a *shift* as 
$$ S_{t_0}(x(t)) = x(t - t_0)$$.
It just translates the signal over by $$t_0$$.

Then time-invariance can be thought of as a relationship between operators, namely that this commutative relationship holds:

$$S_{t_0} \circ F = F \circ S_{t_0}$$

## Inevitable Convolution

Before learning about Fourier theory, convolution always felt, while clearly useful in many contexts, a bit arbitrary and unmotivated.

What's really cool is that it falls right out of the LTI properties of a system.
So if $$H$$ is an LTI system, we can evaluate it on a simple signal like the delta function, and define

$$h(t) = H(\delta(t))$$

More notation, yay.
No but for real, check this out, just *imagine* that integral is a sum so linearity gives us

$$ 
    H(x(t)) = H(\int_{-\infty}^{\infty}x(\tau)\delta(t-\tau)d\tau) \\
    = \int_{-\infty}^{\infty}x(\tau)H(\delta(t-\tau))d\tau
    = \int_{-\infty}^{\infty}x(\tau)(H \circ S_{\tau})(\delta(t))d\tau
$$ 

and then apply time-invariance using that commutative trick so 

$$ 
   H(x(t)) = \int_{-\infty}^{\infty}x(\tau)(S_{\tau} \circ H)(\delta(t))d\tau
= \int_{-\infty}^{\infty}x(\tau)S_{\tau}(h(t))d\tau
= \int_{-\infty}^{\infty}x(\tau)h(t - \tau)d\tau

$$ 

This *is* the convolution between $$x(t),h(t)$$, written 

$$
    x(t) * h(t) = \int_{-\infty}^{\infty}x(\tau)\delta(t - \tau)d\tau
$$

The neat thing with convolution, is that you can completely describe the behavior of an LTI system
by just evaluating it on the delta function and then convolving that output with the input signal.