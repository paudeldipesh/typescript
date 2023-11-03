let age: number | string;
age = 34;
age = "fifty";

type PointInfo = {
  x: number;
  y: number;
};

type LocationInfo = {
  lat: number;
  log: number;
};

let coordinates: PointInfo | LocationInfo;
coordinates = { x: 89, y: 90 };
coordinates = { lat: 639, log: 973 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(29);
printAge("twenty-two");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

console.log(calculateTax(45, 0.9));
console.log(calculateTax("$45", 0.9));

const nums: number[] = [1, 2, 3, 4, 5];
const everthing: any[] = [1, true, undefined, null, "hello"];

// OR
const something: (number | string)[] = [3, 5, "one", "two"];

// AND
const somebody: number[] | string[] = [3, 4];
const nobody: number[] | string[] = ["one", "two"];

const coords: (PointInfo | LocationInfo)[] = [];
coords.push({ lat: 233.38, log: 98439.83 });
coords.push({ x: 89, y: 976 });

// Literal types
let greet: "hi";
greet = "hi";
greet = "hello";

let zero: 0;
zero = 0;
zero = 89;

let mood: "happy" | "sad";
mood = "happy";
mood = "sad";
mood = "angry";

type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

let today: DayOfWeek;
today = "Sunday";
today = "Monday";
today = "Tuesday";
today = "Eatingday";
