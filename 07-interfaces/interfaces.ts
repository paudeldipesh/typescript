type PointOne = {
  x: number;
  y: number;
};
const pointsOne: PointOne = { x: 89, y: 34 };

// Interface
interface PointTwo {
  x: number;
  y: number;
}
const pointsTwo: PointTwo = { x: 98, y: 90 };

// Readonly and optional interface
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}
const newPerson: Person = {
  id: 1,
  first: "Thomas",
  last: "Hardy",
  sayHi: () => {
    return "Hello";
  },
};

// Function with parameters in interface
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}
const shoes: Product = {
  name: "Black Goldstar Shoe",
  price: 780,
  applyDiscount(value) {
    const newPrice = this.price * (1 - value);
    this.price = newPrice;
    return this.price;
  },
};
console.log(shoes.applyDiscount(0.4));
console.log(shoes.applyDiscount(0.4));

// Reopening Interfaces
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): boolean;
}

const newDog: Dog = {
  name: "Raatey",
  age: 5,
  breed: "Nepali Shepherd",
  bark: () => {
    return true;
  },
};

interface ServiceDog extends Dog {
  job: "protect" | "bomb" | "guide";
}

const otherDog: ServiceDog = {
  name: "Kaaley",
  age: 0.75,
  breed: "Nepali Nita",
  bark: () => {
    return false;
  },
  job: "bomb",
};

// Multiple inheritance of interface
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const newEngineer: Engineer = {
  name: "Rajesh Hamal",
  id: 9,
  email: "rajesh@gmail.com",
  level: "entry",
  languages: ["javascript", "python", "c"],
};

// Type vs Interface
type Color = "red" | "blue";

type Chicken = {
  breed: string;
};
type Chicken = {
  numEggs: number;
};

type Name = {
  name: string;
};
type Being = Name & {
  age: number;
};
