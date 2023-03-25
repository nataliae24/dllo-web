import {Contact} from "./model/Contact";
import {Addresses} from "./model/Addresses";
import {Mails} from "./model/Mails";
import {Phones} from "./model/Phones";
import {Notes} from "./model/Notes";

console.log ('------------- Starting ------------');

let contact1 = new Contact(1001, "Maria", "Lopez",
    new Date("1973-06-24"), "F", "amarillo",
    [(new Addresses('oficina', 2788, 'España', 'Valencia'))],
    [(new Mails('oficina', 'maria@gmail.com'))],
        [(new Phones('oficina', 12345678))],
            [(new Notes('test', 'test'))]);

let contact2 = new Contact(1002, "Maria", "Lopez",
    new Date("1989-02-01"), "F", "amarillo",
    [(new Addresses('oficina', 28, 'España', 'Barcelona'))],
    [(new Mails('oficina', 'maria@gmail.com'))],
    [(new Phones('oficina', 12345678))],
    [(new Notes('test', 'test'))]);

let contact3 = new Contact(123, "Maria", "Lopez",
    new Date("1980-09-24"), "F", "amarillo",
    [(new Addresses('oficina', 3889, 'España', 'Madrid'))],
    [(new Mails('oficina', 'maria@gmail.com'))],
    [(new Phones('oficina', 12345678))],
    [(new Notes('test', 'test'))]);

let getContactList = [contact1,contact2,contact3];

//Lista agenda
Contact.contactList = getContactList;
Contact.findAll(Contact.contactList);
console.log ('--------------------------------------------------');

//Agregar Dirección, Mail y Teléfono
let addAddress = new Addresses('Calle Alcalá 19', 2889, 'España', 'Madrid');
let addMails = new Mails('trabajo', 'oficina@gmail.com');
let addPhones = new Phones('casa', 699885663);

let request: Map<string, Object> = new Map();
request.set("dni", 123);
request.set("addresses", addAddress);
request.set("mails", addMails);
request.set("phones", addPhones);

console.log('--------Contacto actualizado>>>>-------- ', Contact.updateContact(request));

/*console.log('--------AGENDA ACTUALIZADA>>>>-------- ', Contact.findAll());*/
let contactUpdated : Contact = Contact.updateContact(request);

// @ts-ignore
Contact.contactList.forEach((value:Contact,index)=>{
    if(value.dni==contactUpdated.dni) {
        Contact.contactList.splice(index,1) ;
        Contact.contactList.push(contactUpdated);
    }
});
;
console.log('--------LISTA ACUTALIZADA-------- ');
Contact.findAll(Contact.contactList);







