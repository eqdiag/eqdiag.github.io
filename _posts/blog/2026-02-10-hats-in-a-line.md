---
layout: post
category: notes
usemathjax: true
---

{%- include mathjax.html -%}

A couple months ago, someone at work mentioned one of these hat riddles or [induction puzzles](https://en.wikipedia.org/wiki/Induction_puzzles).

It goes a little something like this:
```
You have 100 people standing in a line facing forward.
Each has a hat on: either black or white.
Each person can see all of the hats in front of them but they don't know their own color or the ones behind them.

Now the game goes as follows, one at a time, from back to front, each person is given a chance to name a hat color, and this is all they can say.
The game ends when the person in the very front says a hat color.

The question is: what is the maximumum number of people that can correctly guess their own hat color? What strategy guarantees they can always achieve this maximumum number?

Also, assume before this scenario, all of these people are able to devise this strategy ahead of time.
```

It should be clear, that the first person can never guarantee that they know the color of their hat because they know no other info besides the color of the hats in front of them.
In the best case, they could guess, but that isn't a strategy that guarantees they get the correct color.

After a bit of thinking, I figured out that the second person (and all remaining) can always correctly their hat color.

Say generally there are $$n$$ people in a line with $$n \geq 2$$.
Here's a strategy that works:

Let $$h_i$$ be the hat color of the person $$i$$ where $$1 \leq i \leq n$$ is index from back to front of the line.
For convenience, define $$h_{i}$$
When person $$i$$ has a turn, they compute $$a \otimes b$$

<svg width="200" height="100">
  <circle cx="50" cy="50" r="10" stroke="black" stroke-width="1" fill="gray" class="move-right" />
  <circle cx="80" cy="50" r="10" stroke="black" stroke-width="1" fill="gray" class="move-right" />
  <circle cx="110" cy="50" r="10" stroke="black" stroke-width="1" fill="gray" class="move-right" />
  <circle cx="140" cy="50" r="10" stroke="black" stroke-width="1" fill="gray" class="move-right" />

</svg>
