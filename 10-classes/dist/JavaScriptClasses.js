"use strict";
console.log("It is working!");

class Player {
  static description = "He is handsome.";
  #score = 90;
  numLives = 2;
  constructor(first, last) {
    console.log("Hello Constructor");
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player("Ramesh", "Kharel");
  }
  taunt() {
    console.log(`${this.first} ${this.last} Booyah!`);
  }
  loseLife() {
    return (this.numLives -= 1);
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  #secret() {
    console.log("Secret!");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Positive number needed!");
    }
    this.#score = newScore;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const playerOne = new Player("Dipesh", "Paudel");
console.log(playerOne);

const adminPlayerOne = new AdminPlayer("Hello", "World", ["Create", "Read"]);
console.log(adminPlayerOne);

// console.log(playerOne.first);
// console.log(playerOne.last);
// playerOne.taunt();

// console.log(playerOne.numLives);
// playerOne.loseLife();
// console.log(playerOne.numLives);

// console.log(playerOne.score);
// playerOne.score = 7;
// console.log(playerOne);

// console.log(playerOne.getScore());
// playerOne.updateScore(78);
// console.log(playerOne.getScore());

// playerOne.#secret();

// console.log(playerOne.fullName);
// console.log(playerOne.score);

// console.log(playerOne.score);
// playerOne.score = 69;
// console.log(playerOne.score);

// console.log(playerOne.fullName);
// playerOne.fullName = "Swikriti Sharma";
// console.log(playerOne.fullName);

// console.log(Player.description);
// console.log(Player.randomPlayer());
