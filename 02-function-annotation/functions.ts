function square(num: number): number {
  return num * num;
}
console.log(square(3));

function greet(person: string = "Stranger"): string {
  return `Hello ${person}!`;
}
console.log(greet());
console.log(greet("Dipesh"));

const doSomething = (person: string, age: number, isFunny: boolean): string => {
  return `${person} is ${age} years old and he is ${
    isFunny ? "funny" : "not funny"
  }.`;
};
console.log(doSomething("Dipesh", 22, true));

function randomNumber(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}
console.log(randomNumber(3));
console.log(randomNumber(6));
console.log(randomNumber(9));

const add = (x: number, y: number): number => {
  return x + y;
};

const colors: string[] = ["red", "orange", "yellow"];
colors.map((color: string) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

function makeError(msg: string = "Error Happened!"): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game loop is runnig!");
  }
}
