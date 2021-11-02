import MersenneTwister from 'mersenne-twister';

//Using a pseudo random number generator allows this core bit of logic to be testable
export class RollEngine {
    constructor(seed) {

      if (typeof seed === undefined || seed === null) {
        this.generator =  new MersenneTwister();
      }

      else {
        this.generator = new MersenneTwister(seed);
      }
    }

    GetRoll() {
        let rand = this.generator.random();
        return Math.ceil(rand * 6);
    }
}