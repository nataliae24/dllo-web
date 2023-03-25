"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(dni, name, surName, dateBirth, gender, favoriteColor) {
        //calculate age
        var today = new Date();
        var birthDate = new Date(dateBirth);
        var calculateAge = today.getFullYear() - birthDate.getFullYear();
        this._age = calculateAge;
        this._dni = dni;
        this._name = name;
        this._surName = surName;
        this._age = calculateAge;
        this._dateBirth = dateBirth;
        this._gender = gender;
        this._favoriteColor = favoriteColor;
    }
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surName", {
        get: function () {
            return this._surName;
        },
        set: function (value) {
            this._surName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dateBirth", {
        get: function () {
            return this._dateBirth;
        },
        set: function (value) {
            this._dateBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "favoriteColor", {
        get: function () {
            return this._favoriteColor;
        },
        set: function (value) {
            this._favoriteColor = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
