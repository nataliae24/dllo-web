import {Contact} from "./model/Contact";
import {Addresses} from "./model/Addresses";
import {Mails} from "./model/Mails";
import {Phones} from "./model/Phones";
import {Notes} from "./model/Notes";


console.log ('------------- Starting ------------');
let contact = new Contact( 123, "Maria", "Lopez", 20, new Date("1980-09-24"),
    "F","amarillo", new Addresses("calle",2,12, "A",
        2800,"Madrid", "Madrid"),
    new Mails("oficina", "maria@gmail.com"),
    new Phones("casa", 699658774),
    new Notes("test", "test"));
console.log('contacto: ', contact);
