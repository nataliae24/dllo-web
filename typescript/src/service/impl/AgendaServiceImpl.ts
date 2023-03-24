import {Contact} from "../../model/Contact";
import {AgendaService} from "../AgendaService";

export class AgendaServiceImpl implements AgendaService {
    private contactList: any;

    constructor() {
    }

    // @ts-ignore
    createContact(request:Contact): void {
        let contact = new Contact( request.dni, request.name, request.surName,
            request.dateBirth, request.gender, request.favoriteColor, request._addresses,
            request._mails,request._phones,request._notes);

        this.contactList.push(contact)
        console.log('contacto creado: ', contact);
    }

    // @ts-ignore
     updateContact(request:Contact): void {
        let response = this.findById(request.dni);
        //setdata
        let contact = new Contact( response.dni, response.name, response.surName,
            response.dateBirth, response.gender, response.favoriteColor, response.addresses,
            response.mails,response.phones,response.notes);
        this.contactList.push(contact)
        //missing update
        console.log('contacto actualizado: ', this.contactList);
    }

    // @ts-ignore
    deleteContact(request:Contact): void {
        console.log("deleteContact");
        this.findById(request.dni);
        //set Data missing
        console.log("deleteContact");
    }

    getAllContact(): any {
        console.log("getAllContact", this.contactList);
    }
    findById(dni:number): any {
        this.contactList.forEach(function (value:any) {
            if (dni == value.dni) {
                console.log("findById" + value);
                return value;
            }
        });
    }

}
