"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mails = void 0;
var Mails = /** @class */ (function () {
    function Mails(type, email) {
        this._title = type;
        this._email = email;
    }
    Object.defineProperty(Mails.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mails.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mails;
}());
exports.Mails = Mails;
