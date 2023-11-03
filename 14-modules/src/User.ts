import type { Person } from "./types.js";
// import { type Person } from "./types.js";

export default class User implements Person {
  constructor(public username: string, public email: string) {}

  logout() {
    console.log(`${this.username} has logout`);
  }

  mail() {
    console.log(`check your mail ${this.email}`);
  }
}

export function userHelper() {
  console.log("This is a helper!");
}
