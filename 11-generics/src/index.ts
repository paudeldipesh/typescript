console.log("Working");

// function doThing(thing: number | string): number | string {}
// const nums: number[] = [3, 6, 2, 0];
// const nums: Array<number> = [3, 6, 2, 0, "dipesh"];
// const colors: Array<string> = ["red", "green", "yellow", 489];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);

inputEl.value = "hacked";
const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

interface Cat {
  name: string;
  breed: string;
}

// Generic Function
function identity<Type>(item: Type): Type {
  return item;
}
identity<boolean>(true);
identity<string>("hello");
identity<number>(7);
identity<Cat>({ name: "suri", breed: "vaag" });

// Another Generic Function
function getRandomElement<Type>(list: Type[]): Type {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
console.log(getRandomElement<string>(["a", "b", "c", "d", "e"]));
console.log(getRandomElement<number>([1, 2, 3, 4, 5]));
console.log(getRandomElement([true, false, false, true]));

// Multiple Type
function merge<T extends object, U extends object>(objectOne: T, objectTwo: U) {
  return { ...objectOne, ...objectTwo };
}
const combo = merge<{ name: string }, { pets: string[] }>(
  { name: "Dipesh" },
  { pets: ["raatey", "mitthu"] }
);
console.log(combo);
console.log(merge({ name: "hari" }, { nums: 9 }));

interface Lengthy {
  length: number;
}

function printDoubleLength<Type extends Lengthy>(thing: Type): number {
  return thing.length * 2;
}

printDoubleLength("hello");
// printDoubleLength(897);

// Default
function makeEmptyArray<Type = number>(): Type[] {
  return [];
}
const str = makeEmptyArray<string>();
str.push("happy");
makeEmptyArray();

interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<Type> {
  public queue: Type[] = [];
  add(el: Type) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
// songs.add();
const videos = new Playlist<Video>();
// videos.add();
