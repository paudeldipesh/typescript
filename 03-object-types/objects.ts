const dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};

const coordinate: { x: number; y: number } = { x: 22, y: 8 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last} is a human!`);
}
console.log(printName({ first: "Swikriti", last: "Sharma" }));

printName({ first: "Raju", last: "Pariyar", age: 34 });
const singer = { first: "Raju", last: "Pariyar", age: 34, isAlive: true };
printName(singer);

type Point = { x: number; y: number };
const scorePoints: Point = { x: 29, y: 81 };

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

const songDetails: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 123456,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.377;
}
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

console.log(calculatePayout(songDetails));
console.log(printSong(songDetails));

type ThreeD = {
  x: number;
  y: number;
  z?: number;
};

const threeDPoint: ThreeD = { x: 1, y: 2 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 9345, username: "dipeshpaudelofficial" };
console.log(user.id);
user.id = 89;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// Intersection
type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
  radius: 7,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const kristy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
