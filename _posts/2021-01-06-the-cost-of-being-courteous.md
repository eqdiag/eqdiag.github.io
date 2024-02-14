---
layout: post
category: puzzle
usemathjax: true
---

During most parts of the year I like to ride my bike to my office. This is often pretty pleasant since it takes a few minutes short of the ideal commute time of 15 minutes. But sometimes I've been hit by cars and that really sucks. 

I try to avoid this by acting like I'm a car and trying to be as assertive as possible when riding so that my intentions to cars are clear.

This oftentimes doesn't cut it and I still run into some road ramming/jamming with drivers. One of the most frustrating and common miscommunications I have with drivers takes place at the 4-way stop. The rules in this situation for any of the involved parties are straightforward:
- If you arrive first, then you can pass through the intersection.
- If you arrive simultaneously to someone else, you yield to the driver on your right.

This situation becomes interesting when 4 cars arrive at an intersection simultaneously. In this case there is no well defined rightmost car so some tie breaking strategy needs to be used. Oftentimes people will choose to yield to each other and wave each other on to go ahead.
In some cases this can turn into a weird "you go, no you go" kind of situation. It can be pretty darn infuriating. As someone who likes these types of interactions to be streamlined and as a biker this drives me nuts. It's because of this indecisive ping ponging that I've been hit at least 3 times!


## Defining the Game

I wanted to analyze this problem a little more formally using game theory to understand exactly why drivers being courteous seemed to result in bad experiences for everyone. Fundamentally the issue is one of communication,coordination, and mismatched expectations. Overwhelmingly drivers tend to give me the "go ahead" to go in front of them. However, there have been situations where this certainly hasn't been the case which has resulted in bangs and bruises! Because of this handful of bad experiences I've opted to be extra cautious when coming to 4-ways. I'm convinced that cars being courteous actually causes a net negative overall.

The diagram below shows an example of the situation I'm talking about. The biker (me) is blue. $$C1-C3$$ which are red denote the cars at the other roads in the intersection.

<center>
<img src="/assets/images/intersection.png" alt="intersection.png" width="200" height ="200">
</center>
￼
From the perspective of the biker the stakes are much higher if a collision occurs with a car. So it seemed intuitively clear to me that the safest option is simply for the biker to wait until there are no more cars at the intersection, then go. 

To get a better understanding of this I'm going to describe a simple game between a car and a biker.
Each party has either an option to yield (written as $$Y$$) or go (written as $$G$$) and there's an associated cost with each of these actions. Oftentimes in game theory, these cost values are arbitrary and its the ordering between differing costs across all of the possible actions that truly matters.

The values for each of entries of this matrix below correspond to payoffs for each party. For example, the $$(Y,G)$$ entry corresponds to the car getting $$-1$$ payoff and the bike getting $$1$$ payoff in the state that they end in.
￼
So what does the above actually express? Well, we're assuming here that both parties would definitely prefer someone going over no one going since that involves overall progress. Now the driver would prefer going to not going, but certainly would prefer a collision less than going without one. On the other hand, the biker absolutely does not want a collision. Notice the asymmetry of the situation (that isn't considered much in practice :p) where the biker is much more at risk than the car.
Notice something interesting about the Car's payoff. Regardless of what the biker does, it is in the best interest for the Car to always choose to go! In game theory, this is called a dominated strategy for the Car since it will choose this action regardless of what the biker does. Uh oh, this doesn't seem so great for the biker. Maybe my caution is justified after all. So if I'm being a rational biker that is assuming that the Car is also rational, then I know the Car will always choose to go. Well, I don't wanna die and get the worst possible payoff so I need to yield.
So it seems like the thing that will happen is we end up in the state where the Car goes and the Bike yields. This is in fact the case if both parties are rational. This (G,Y) state is known as a Nash equilibrium and corresponds to a stable state of the game where no party has an incentive to change their mind. In fact, this is the only Nash equilibrium to this game (it is unique).


## More cars...
Ok, so we understand how the reasoning works with a car and a bike. What happens when we're back in the 4-way intersection situation? Well, remember we are considering the cost of drivers being courteous in this situation. According the previous analysis, being courteous (yielding as a driver) is not a Nash equilibrium of the game. This means the driver is not behaving rationally according to their payoff function. From the perspective of the biker, the cars behaviour is completely arbitrary.
For the purpose of comparison, we first see what happens when all parties do behave rationally. So we have 3 independent games involving a (car,biker) pair. Since everyone is rational, the biker yields and the remaining cars default to the rightmost rule for determing who goes. We get:
	-	Round 1: B=Y,C1=G,C2=Y,C3=Y
	-	Round 2:B=Y,C2=G,C3=Y
	-	Round 3:B=Y,C3=G
	-	Round 4:B=G
So everyone is able to pass through the intersection in at most 4 rounds or turns. The order is C1->C2->C3->B. Now we see what happens when cars behave courteously rather than rationally. We assume throughout that the biker is rational so whenever there is another car that has not communicated with the biker yet, the biker assumes the car's behavior to be arbitrary. So without communication, the biker will always yield to all cars.
	•	Round 1: B=Y,C1=Y,C2=Y,C3=Y (Nothing happens since all yielding)
	•	Round 2: B=Y,C1=Y,C2=Y,C3=Y (C1 signals B to go,B doesn't have confirmation from C2,C3)
	•	Round 3: B=Y,C1=Y,C2=Y,C3=Y
	•	(C2 signals B to go,B doesn't have confirmation from C3)
	•	Round 4: B=G,C1=Y,C2=Y,C3=Y
	•	(C3 signals B to go)
	•	Round 5: C1=G,C2=Y,C3=Y
	•	Round 6: C2=G,C3=Y
	•	Round 7: C3=G
This takes 3 additional rounds of waiting for everyone at the intersection! The interesting implication here is without the assumption that parties will behave rationally, we need extra communication in order to reach agreement on the right decision.
For fun, I generalized this to an entirely unrealistic intersection example. Suppose that we have a spoke-like intersection where there are 2n -1 cars and 1 biker. If all parties are rationally, everyone will make it through the intersection in n rounds. However, if all the cars behave courteously then it will take n + (n-1) = 2n -1 rounds to terminate. Hence we a factor of 2 - 1/n slowdown once all the cars decide to be courteous instead of rational.
Yea but do drivers really act like...?
There are plenty of ways to improve on how I'm modeling the game. One interesting extension I want to add is modeling the patience of cars arriving at the intersection. I was thinking driver patience could be modeled based on a preference for how many rounds they are willing to wait until they fly through the intersection. Every time they are delayed again their patience thins and they are willing to wait even fewer rounds. Also, driver initial patience could start with some randomized initial value between some min and max patience value. Drivers can be impatient to the detriment to safety, this is closer to what actually happens.
What to do?
My new strategy is location dependent. Because I bike around often, I know the areas of town where drivers have differing behaviours. In the cases where cars and needlessly courteous, I become an agressive biker and shoot through the intersections which is a lot of fun. It reduces the number of rounds of waiting and is a social good for everyone! Now, when I'm in an area where I know new england drivers are going to be bouncing around on potholes and not thinking/caring about bikes at all, I assume the cars are rational (go,go,go). This means I yield to everyone. That way, I don't get smacked.




