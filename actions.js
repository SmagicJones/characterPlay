"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = makePerson;
exports.makeSuperPerson = makeSuperPerson;
var characters_1 = require("./characters");
function makePerson(name, age, level) {
    return new characters_1.Person(name, age, level);
}
function makeSuperPerson(name, age, level, power, special, armour) {
    return new characters_1.SuperPerson(name, age, level, power, special, armour);
}
