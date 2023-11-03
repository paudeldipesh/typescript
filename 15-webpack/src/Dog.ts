export default class Dog {
  constructor(public name: string, public breed: string, public age: number) {}

  bark() {
    console.log("Woof Woof!!!");
  }

  info() {
    console.log(`${this.name} - ${this.breed} - ${this.age}`);
  }
}
