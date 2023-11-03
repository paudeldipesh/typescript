"use strict";
console.log("Working!");
function triple(value) {
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
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You didn't passed in a word.");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x == y) {
        return y.toUpperCase();
    }
}
console.log(someDemo(3, "3"));
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amades", duration: 140 }));
console.log(getRuntime({
    title: "Spongebob",
    numEpisodes: 8939,
    episodeDuration: 8388988,
}));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
// Type Predicates
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    else {
        return `${animal}`;
    }
}
function getFarmAnimalSound(animal) {
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
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 0.23,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
