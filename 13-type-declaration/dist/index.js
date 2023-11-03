"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// _.sample();
const APIURL = "https://jsonplaceholder.typicode.com/users";
// axios
//   .get<User>(`${APIURL}/${Math.ceil(Math.random() * 10)}`)
//   .then((response) => printUser(response.data))
//   .catch((error) => console.log(error.message));
axios_1.default
    .get(APIURL)
    .then((response) => response.data.forEach(printUser))
    .catch((error) => console.log(error.message));
function printUser(user) {
    console.log(user.id);
    console.log(user.name);
}
