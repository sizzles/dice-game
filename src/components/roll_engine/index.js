import MersenneTwister from 'mersenne-twister';

//Using a pseudo random number generator allows this core bit of logic to be testable
export class RollEngine {
    constructor(seed) {
      this.generator =  typeof seed === undefined ? new MersenneTwister() : new MersenneTwister(seed);
    }

    GetRoll() {
        let rand = this.generator.random();
        return Math.ceil(rand * 6);
    }
}