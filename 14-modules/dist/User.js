// import { type Person } from "./types.js";
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
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
