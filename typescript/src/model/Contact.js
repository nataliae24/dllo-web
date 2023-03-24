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
    Contact.createContact = function (request) {
        var contact = new Contact(request.dni, request.name, request.surName, request.dateBirth, request.gender, request.favoriteColor, request._addresses, request._mails, request._phones, request._notes);
        this.contactList.push(contact);
        console.log('contacto creado: ', contact);
    };
    // @ts-ignore
    Contact.updateContact = function (request) {
        var response = this.findById(request);
        //setdata
        var contact = new Contact(response.dni, response.name, response.surName, response.dateBirth, response.gender, response.favoriteColor, response.addresses, response.mails, response.phones, response.notes);
        this.contactList.push(contact);
        //missing update
        console.log('contacto actualizado: ', this.contactList);
        return contact;
    };
    // @ts-ignore
    Contact.deleteContact = function (request) {
        console.log("deleteContact");
        this.findById(request.dni);
        //set Data missing
        console.log("deleteContact" + request);
    };
    Contact.findById = function (dni) {
        this.contactList.forEach(function (value) {
            if (dni == value.dni) {
                console.log("findById" + value);
                return value;
            }
        });
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
    return Contact;
}(Person_1.Person));
exports.Contact = Contact;
