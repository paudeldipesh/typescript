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
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 89
  ) {}

  private secretMethod(): void {
    console.log("This is secret!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
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
  public isAdmin: boolean = true;

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
// console.log(dipesh);
// dipesh.maxScore();

// Classes and Interfaces
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
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

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello, World!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWork: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWork;
  }
}

const kaaley = new FullTimeEmployee("Krishna", "Kafle", 34);
console.log(kaaley.getPay());
const goorey = new PartTimeEmployee("Rajesh", "Giri", 15, 5);
console.log(goorey.getPay());
