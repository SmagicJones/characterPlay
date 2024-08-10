import { makePerson, makeSuperPerson } from "./actions";

const bob = makePerson("bob", 39, 12);

const superBob = makeSuperPerson(
  "MegaBob",
  39,
  55,
  99,
  "Stink wave",
  "Invisible Steel"
);

console.log("I have made a bob");

console.log(bob);

console.log("I have made a superBob");

console.log(superBob);
