interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const normal: Chicken = {
  breed: "Silky",
  eggsPerWeek: 7,
  name: "normal",
  age: 1 / 2,
};

console.log(normal);
