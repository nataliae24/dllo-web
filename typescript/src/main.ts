import {Contact} from "./model/Contact";
import {Addresses} from "./model/Addresses";
import {Mails} from "./model/Mails";
import {Phones} from "./model/Phones";
import {Notes} from "./model/Notes";



let options = [1, 2, 3];
console.log ('------------- Starting ------------');
let contactList: Map<string, Contact> =
 new Map<string, Contact>([
     ['persona 1', new Contact( 123, "Maria", "Lopez", new Date("1980-09-24"), "F",
"amarillo", new Map<string, Addresses>([['dirección 1', new Addresses('oficina', 2788,
    'España', 'Valencia')]]), new Map<string, Mails>([['email 1', new Mails('oficina',
        'maria@gmail.com')]]), new Map<string, Phones>([['teléfono 1', new Phones('oficina',
        12345678)]]), new Map<string, Notes>([['nota 1', new Notes('test', 'test')]]))],

     ['persona 2', new Contact( 123, "Maria", "Lopez", new Date("1980-09-24"), "F",
         "amarillo", new Map<string, Addresses>([['dirección 1', new Addresses('oficina',
             'maria@gmail.com', 'España', 'Barcelona')]]), new Map<string, Mails>(
                 [['email 1', new Mails('oficina', 'maria@gmail.com')]]), new Map<string, Phones>(
                     [['teléfono 1', new Phones('oficina', 12345678)]]), new Map<string, Notes>(
                         [['nota 1', new Notes('test', 'test')]]))],

     ['persona 3', new Contact( 123, "Maria", "Lopez", new Date("1980-09-24"), "F",
         "amarillo", new Map<string, Addresses>([['dirección 1', new Addresses('oficina', 2889,
             'España', 'Madrid')]]), new Map<string, Mails>([['email 1', new Mails('oficina',
             'maria@gmail.com')]]), new Map<string, Phones>([['teléfono 1', new Phones('oficina',
             12345678)]]), new Map<string, Notes>([['nota 1', new Notes('test', 'test')]]))]
 ]);
console.log('contacto: ', contactList);
console.log('Ingrese DNI para actualizar: ', Contact.updateContact(123));


