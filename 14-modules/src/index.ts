import * as hello from "./utils.js";
import User, { userHelper as helper } from "./User.js";

console.log(hello.sample([1, 2, 3, 4, 5]));
console.log(hello.add(7, 2));
console.log(hello.check);

helper();
const user = new User("dipeshpaudel", "dipeshpaudel@gmail.com");
user.logout();
user.mail();
