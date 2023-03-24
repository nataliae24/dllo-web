"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = void 0;
var Addresses = /** @class */ (function () {
    function Addresses(address, postalCode, country, city) {
        this._address = address;
        this._postalCode = postalCode;
        this._country = country;
        this._city = city;
    }
    Object.defineProperty(Addresses.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addresses.prototype, "postalCode", {
        get: function () {
            return this._postalCode;
        },
        set: function (value) {
            this._postalCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addresses.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Addresses.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    return Addresses;
}());
exports.Addresses = Addresses;
