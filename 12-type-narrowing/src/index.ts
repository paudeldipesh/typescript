console.log("Working!");

function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}
console.log(triple(9));
console.log(triple("hi"));

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You didn't passed in a word.");
  }
};

// Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x == y) {
    return y.toUpperCase();
  }
}
console.log(someDemo(3, "3"));

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}
console.log(getRuntime({ title: "Amades", duration: 140 }));
console.log(
  getRuntime({
    title: "Spongebob",
    numEpisodes: 8939,
    episodeDuration: 8388988,
  })
);

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// Type Predicates
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow";
  } else {
    return `${animal}`;
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Cow | Rooster | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "cow":
      return "Mooo!";

    case "pig":
      return "Oink!";

    case "rooster":
      return "Cockadoodledoo!";

    case "sheep":
      return "Baaa!";

    default:
      // We should never make it here, if we handled all cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 0.23,
  kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
