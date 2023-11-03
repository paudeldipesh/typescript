"use strict";
console.log("It is working!");
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 89;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("This is secret!");
//   }
// }
class Player {
    constructor(first, last, _score = 89) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("This is secret!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive.");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999999;
        console.log(`The score is ${this._score}`);
    }
}
const harry = new Player("Haris", "Khan");
// console.log(harry);
// console.log(harry.score);
// harry.secretMethod();
// console.log(harry.fullName);
// console.log(harry.score);
// harry.score = 48;
// console.log(harry.score);
const dipesh = new SuperPlayer("Dipesh", "Paudel");
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket.`);
    }
}
const bikeOne = new Bike("green");
const jacketOne = new Jacket("Nike", "Blue");
// jacketOne.print();
// Abstract Classes
// Employee - FullTimeEmployee - PartTimeEmployee;
// interface Payable {
//   getPay(): number;
// }
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello, World!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWork) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWork = hoursWork;
    }
    getPay() {
        return this.hourlyRate * this.hoursWork;
    }
}
const kaaley = new FullTimeEmployee("Krishna", "Kafle", 34);
console.log(kaaley.getPay());
const goorey = new PartTimeEmployee("Rajesh", "Giri", 15, 5);
console.log(goorey.getPay());
