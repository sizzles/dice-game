## Dice Rolling Game
There are two main use cases in this game:
1) Roll Dice. Rolls the dice to see who has the higher score.
2) Reset. Resets scores back to 0. 

## Structure
Primarily based on react hooks. Main part of state is stored in the game component.
Roll engine is based on a Mersenne Twister. https://www.npmjs.com/package/mersenne-twister
This was used as it provides a pseudo-random generator with seed capability.
The seed capability is important for testing as it allows a deterministic approach to game outcomes.

## Testing
Based on Jest framework