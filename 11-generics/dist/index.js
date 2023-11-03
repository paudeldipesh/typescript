"use strict";
console.log("Working");
// function doThing(thing: number | string): number | string {}
// const nums: number[] = [3, 6, 2, 0];
// const nums: Array<number> = [3, 6, 2, 0, "dipesh"];
// const colors: Array<string> = ["red", "green", "yellow", 489];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "hacked";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// Generic Function
function identity(item) {
    return item;
}
identity(true);
identity("hello");
identity(7);
identity({ name: "suri", breed: "vaag" });
// Another Generic Function
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement(["a", "b", "c", "d", "e"]));
console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement([true, false, false, true]));
// Multiple Type
function merge(objectOne, objectTwo) {
    return Object.assign(Object.assign({}, objectOne), objectTwo);
}
const combo = merge({ name: "Dipesh" }, { pets: ["raatey", "mitthu"] });
console.log(combo);
console.log(merge({ name: "hari" }, { nums: 9 }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("hello");
printDoubleLength(897);
// Default
function makeEmptyArray() {
    return [];
}
const str = makeEmptyArray();
str.push("happy");
makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add();
const videos = new Playlist();
videos.add();
