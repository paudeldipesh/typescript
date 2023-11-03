let movieTitle: string = "Intersteller";
movieTitle = "Shutter Island";
movieTitle = 7;
movieTitle.upper();
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "Zero";

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// Type Inference
let tvShow = "Tito Satya";
tvShow = false;

let isFunny = false;
isFunny = "dipesh";

// the any type
let thingOne: any = "Hello";
thingOne = 1;
thingOne = true;
thingOne = [];
thingOne();
thingOne.upper();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Aliens") {
    foundMovie = movie;
    console.log(foundMovie);
  }
}
