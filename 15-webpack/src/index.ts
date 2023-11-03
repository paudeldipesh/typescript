import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("Working");
const dogOne = new Dog("Kaaley", "Nepali", 5);
dogOne.bark();
dogOne.info();

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(1, 3));

const dogTwo = new ShelterDog("Raatey", "Nepali", 6, "Gulariya");
dogTwo.bark();
dogTwo.info();
