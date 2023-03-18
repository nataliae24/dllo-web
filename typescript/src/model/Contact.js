"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const Person_1 = require("./Person");
class Contact extends Person_1.Person {
    constructor(dni, name, surName, age, dateBirth, gender, favoriteColor, addresses, mails, phones, notes) {
        super(dni, name, surName, age, dateBirth, gender, favoriteColor);
        this.addresses = addresses;
        this.mails = mails;
        this.phones = phones;
        this.notes = notes;
    }
}
exports.Contact = Contact;
