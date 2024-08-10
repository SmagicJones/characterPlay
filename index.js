"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var bob = (0, actions_1.makePerson)("bob", 39, 12);
var superBob = (0, actions_1.makeSuperPerson)("MegaBob", 39, 55, 99, "Stink wave", "Invisible Steel");
console.log("I have made a bob");
console.log(bob);
console.log("I have made a superBob");
console.log(superBob);
