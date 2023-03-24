"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phones = void 0;
var Phones = /** @class */ (function () {
    function Phones(type, number) {
        this._type = type;
        this._number = number;
    }
    Object.defineProperty(Phones.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phones.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: false,
        configurable: true
    });
    return Phones;
}());
exports.Phones = Phones;
