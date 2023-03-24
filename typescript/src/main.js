"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("./model/Contact");
var Addresses_1 = require("./model/Addresses");
var Mails_1 = require("./model/Mails");
var Phones_1 = require("./model/Phones");
var Notes_1 = require("./model/Notes");
//#1 listar, crear, actualizar, consultar
var options = [1, 2, 3];
console.log('------------- Starting ------------');
var contactList = new Map([
    ['persona 1', new Contact_1.Contact(123, "Maria", "Lopez", new Date("1980-09-24"), "F", "amarillo", new Map([['', new Addresses_1.Addresses('oficina', 2788, 'España', 'Valencia')]]), new Map([['email 1', new Mails_1.Mails('oficina', 'maria@gmail.com')]]), new Map([['teléfono 1', new Phones_1.Phones('oficina', 12345678)]]), new Map([['nota 1', new Notes_1.Notes('test', 'test')]]))],
    ['persona 2', new Contact_1.Contact(123, "Maria", "Lopez", new Date("1980-09-24"), "F", "amarillo", new Map([['', new Addresses_1.Addresses('oficina', 'maria@gmail.com', 'España', 'Barcelona')]]), new Map([['email 1', new Mails_1.Mails('oficina', 'maria@gmail.com')]]), new Map([['teléfono 1', new Phones_1.Phones('oficina', 12345678)]]), new Map([['nota 1', new Notes_1.Notes('test', 'test')]]))],
    ['persona 3', new Contact_1.Contact(123, "Maria", "Lopez", new Date("1980-09-24"), "F", "amarillo", new Map([['', new Addresses_1.Addresses('oficina', 2889, 'España', 'Madrid')]]), new Map([['email 1', new Mails_1.Mails('oficina', 'maria@gmail.com')]]), new Map([['teléfono 1', new Phones_1.Phones('oficina', 12345678)]]), new Map([['nota 1', new Notes_1.Notes('test', 'test')]]))]
]);
console.log('contacto: ', contactList);
//realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono
console.log('Ingrese DNI para actualizar: ', Contact_1.Contact.updateContact(123));
console.log('agregar dirección: ', Contact_1.Contact.updateContact(123));
