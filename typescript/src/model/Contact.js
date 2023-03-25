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
exports.Contact = void 0;
var Person_1 = require("./Person");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(dni, name, surName, dateBirth, gender, favoriteColor, addresses, mails, phones, notes) {
        var _this = _super.call(this, dni, name, surName, dateBirth, gender, favoriteColor) || this;
        _this._addresses = addresses;
        _this._mails = mails;
        _this._phones = phones;
        _this._notes = notes;
        return _this;
    }
    // @ts-ignore
    Contact.updateContact = function (request) {
        var id = request.get("dni");
        var response = this.findById(id);
        if (response == null) {
            console.log("DNI No encontrado!! ");
        }
        else {
            response.addresses.push(request.get("addresses"));
            response.mails.push(request.get("mails"));
            response.phones.push(request.get("phones"));
            return response;
        }
    };
    /**
     * findById
     * @param dni
     */
    Contact.findById = function (dni) {
        for (var _i = 0, _a = this._contactList; _i < _a.length; _i++) {
            var iterator = _a[_i];
            if (dni == iterator.dni) {
                return iterator;
            }
        }
    };
    // @ts-ignore
    Contact.findAll = function (list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var iterator = list_1[_i];
            console.log(iterator);
        }
    };
    Object.defineProperty(Contact.prototype, "addresses", {
        //Getter and setter
        get: function () {
            return this._addresses;
        },
        set: function (value) {
            this._addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (value) {
            this._mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phones", {
        get: function () {
            return this._phones;
        },
        set: function (value) {
            this._phones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact, "contactList", {
        get: function () {
            return this._contactList;
        },
        set: function (value) {
            this._contactList = value;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}(Person_1.Person));
exports.Contact = Contact;
