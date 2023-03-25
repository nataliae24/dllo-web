"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("./model/Contact");
var Addresses_1 = require("./model/Addresses");
var Mails_1 = require("./model/Mails");
var Phones_1 = require("./model/Phones");
var Notes_1 = require("./model/Notes");
console.log('------------- Starting ------------');
var contact1 = new Contact_1.Contact(1001, "Maria", "Lopez", new Date("1973-06-24"), "F", "amarillo", [(new Addresses_1.Addresses('oficina', 2788, 'España', 'Valencia'))], [(new Mails_1.Mails('oficina', 'maria@gmail.com'))], [(new Phones_1.Phones('oficina', 12345678))], [(new Notes_1.Notes('test', 'test'))]);
var contact2 = new Contact_1.Contact(1002, "Maria", "Lopez", new Date("1989-02-01"), "F", "amarillo", [(new Addresses_1.Addresses('oficina', 28, 'España', 'Barcelona'))], [(new Mails_1.Mails('oficina', 'maria@gmail.com'))], [(new Phones_1.Phones('oficina', 12345678))], [(new Notes_1.Notes('test', 'test'))]);
var contact3 = new Contact_1.Contact(123, "Maria", "Lopez", new Date("1980-09-24"), "F", "amarillo", [(new Addresses_1.Addresses('oficina', 3889, 'España', 'Madrid'))], [(new Mails_1.Mails('oficina', 'maria@gmail.com'))], [(new Phones_1.Phones('oficina', 12345678))], [(new Notes_1.Notes('test', 'test'))]);
var getContactList = [contact1, contact2, contact3];
//Lista agenda
Contact_1.Contact.contactList = getContactList;
Contact_1.Contact.findAll(Contact_1.Contact.contactList);
console.log('--------------------------------------------------');
//Agregar Dirección, Mail y Teléfono
var addAddress = new Addresses_1.Addresses('Calle Alcalá 19', 2889, 'España', 'Madrid');
var addMails = new Mails_1.Mails('trabajo', 'oficina@gmail.com');
var addPhones = new Phones_1.Phones('casa', 699885663);
var request = new Map();
request.set("dni", 123);
request.set("addresses", addAddress);
request.set("mails", addMails);
request.set("phones", addPhones);
console.log('--------Contacto actualizado>>>>-------- ', Contact_1.Contact.updateContact(request));
/*console.log('--------AGENDA ACTUALIZADA>>>>-------- ', Contact.findAll());*/
var contactUpdated = Contact_1.Contact.updateContact(request);
// @ts-ignore
Contact_1.Contact.contactList.forEach(function (value, index) {
    if (value.dni == contactUpdated.dni) {
        Contact_1.Contact.contactList.splice(index, 1);
        Contact_1.Contact.contactList.push(contactUpdated);
    }
});
;
console.log('--------LISTA ACUTALIZADA-------- ');
Contact_1.Contact.findAll(Contact_1.Contact.contactList);
console.log("aaaaaaaaa " + Contact_1.Contact.contactList);
