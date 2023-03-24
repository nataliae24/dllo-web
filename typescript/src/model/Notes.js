"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
var Notes = /** @class */ (function () {
    function Notes(title, description) {
        this._title = title;
        this._description = description;
    }
    Object.defineProperty(Notes.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    return Notes;
}());
exports.Notes = Notes;
