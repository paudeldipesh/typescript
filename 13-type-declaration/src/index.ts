import axios from "axios";
import _ from "lodash";

// _.sample();

const APIURL = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

// axios
//   .get<User>(`${APIURL}/${Math.ceil(Math.random() * 10)}`)
//   .then((response) => printUser(response.data))
//   .catch((error) => console.log(error.message));

axios
  .get<User[]>(APIURL)
  .then((response) => response.data.forEach(printUser))
  .catch((error) => console.log(error.message));

function printUser(user: User) {
  console.log(user.id);
  console.log(user.name);
}
