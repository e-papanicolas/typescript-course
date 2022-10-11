"use strict";

class Player {
  // class fields dont need to be defined in the constructor
  // # is identifier for a private class field
  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  // wrapper method to access score outside of the class while using the private class field
  getScore() {
    return this.#score;
  }

  taunt() {
    console.log("BOOYAH");
  }

  #secret() {
    console.log("secret");
  }
}

const p1 = new Player("eleni", "papanicolas");
console.log(p1);
