---
layout: post
category: dreams
usemathjax: true
---

{%- include mathjax.html -%}

I think mesh networks are really cool, and embody the true ethos of distributed systems.
Often they are constructed in a diy way and are meant to be resilient + open to anyone who wants to join.
The fundamental goal is to provide communication infrastructure that is an alternative to major internet providers and completely bypasses their setups.

The real difficulty with this kinda thing is getting enough people involved to make the network reliable and robust in case any one node goes down.

Picture this: a string of mesh nodes spanning the towns from pvd <-> boston area, where you could send a message that basically hops along i-95 to get to your friend. And! It completely relies on a decentralized network of your friends, no cell phone towers, or big corporate octopi.

The best way to actualize this that I've seen is this [meshstatic](https://meshtastic.org/) project, which aims to provide software + embedded devices to achieve this type of thing.
The communication can be encrypted which is cool, though the disclaimer there is I think each device has a plaintext user id + timestamp that gets shared.
There might be ways to add layers on top of the existing meshstatic infrastructure to tighten up what exactly gets leaked over the network, which sounds exciting to me!

Also, I have no clue about the feasability of this rn, but it would be awesome to be able to transmit audio over a network like this, not sure what latency would look like (I expect horrible), but imagine like an internet radio/broadcast station over a mesh network o':