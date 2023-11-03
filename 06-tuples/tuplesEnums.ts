const color: number[] = [2, 3, 4, 5];
const stuff: (string | number)[] = [1, 2, "dipesh", "ramesh", 3, 4];

// Tuples (general format)
const RGBColor: [number, number] = [255, 34];

type HTTPResponse = [number, string];
const goodResponse: HTTPResponse = [200, "OK"];
goodResponse[0] = "404";
goodResponse.push("Dipesh");
console.log(goodResponse);

{
  code: 200;
  message: "OK";
}

// HTTP response tuples
const responses: HTTPResponse[] = [
  [100, "Continue"],
  [200, "OK"],
  [400, "Bad Request"],
  [404, "Not Found"],
];

enum OrderStatusOne {
  PENDING,
  SHIPPED,
  DELIVERED = 7,
  RETURNED,
}

let statusOne = OrderStatusOne.PENDING;
let statusTwo = OrderStatusOne.SHIPPED;
let statusThree = OrderStatusOne.DELIVERED;
let statusFour = OrderStatusOne.RETURNED;
console.log(statusOne); // returns 0
console.log(statusTwo); // returns 1
console.log(statusThree); // returns 7
console.log(statusFour); // returns 8

function isDelivered(status: OrderStatusOne): boolean {
  return status === OrderStatusOne.DELIVERED;
}
console.log(isDelivered(7));
console.log(isDelivered(OrderStatusOne.RETURNED));

enum ArrowKey {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

const person: string = "Dipesh Paudel";

const enum OrderStatusTwo {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderOne = {
  orderNumber: 2020209,
  status: OrderStatusTwo.PENDING,
};

const orderTwo = {
  orderNumber: 202010,
  status: OrderStatusTwo.DELIVERED,
};
