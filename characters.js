"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperPerson = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, level) {
        this.name = name;
        this.age = age;
        this.level = level;
    }
    Person.prototype.speak = function () {
        console.log("Hello my name is ".concat(this.name, ", my age is ").concat(this.age, " and I am currently at ").concat(this.level));
    };
    return Person;
}());
exports.Person = Person;
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(name, age, level, power, special, armour) {
        var _this = _super.call(this, name, age, level) || this;
        _this.power = power;
        _this.special = special;
        _this.armour = armour;
        return _this;
    }
    SuperPerson.prototype.bosh = function () {
        console.log("Time for my special move! ".concat(this.special, ".  Will also repel your next attack with ").concat(this.armour));
    };
    return SuperPerson;
}(Person));
exports.SuperPerson = SuperPerson;
