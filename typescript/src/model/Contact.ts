import {Addresses} from "./Addresses";
import {Mails} from "./Mails";
import {Phones} from "./Phones";
import {Notes} from "./Notes";
import {Person} from "./Person";

export class Contact extends Person{
    _addresses: Map<string,Addresses>;
    _mails: Map<string,Mails>;
    _phones: Map<string,Phones>;
    _notes: Map<string, Notes>;
    private contactList: any;
    private static contactList: any;


    constructor(dni: number, name: string, surName: string, dateBirth: Date, gender: string, favoriteColor: string, addresses: Map<string, Addresses>, mails: Map<string, Mails>, phones: Map<string, Phones>, notes: Map<string, Notes>) {
        super(dni, name, surName, dateBirth, gender, favoriteColor);
        this._addresses = addresses;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }


    static createContact(request:Contact): void {
        let contact = new Contact( request.dni, request.name, request.surName,
            request.dateBirth, request.gender, request.favoriteColor, request._addresses,
            request._mails,request._phones,request._notes);

        this.contactList.push(contact)
        console.log('contacto creado: ', contact);
    }

    // @ts-ignore
    static updateContact(request:number): Contact {
        let response = this.findById(request);
        //setdata
        let contact = new Contact( response.dni, response.name, response.surName,
            response.dateBirth, response.gender, response.favoriteColor, response.addresses,
            response.mails,response.phones,response.notes);
        this.contactList.push(contact)
        //missing update
        console.log('contacto actualizado: ', this.contactList);
        return contact;
    }

    // @ts-ignore
    static deleteContact(request:Contact): void {
        console.log("deleteContact");
        this.findById(request.dni);
        //set Data missing
        console.log("deleteContact"+ request);
    }

    static findById(dni:number): any {
        this.contactList.forEach(function (value:any) {
            if (dni == value.dni) {
                console.log("findById" + value);
                return value;
            }
        });
    }


    //Getter and setter


    get addresses(): Map<string, Addresses> {
        return this._addresses;
    }

    set addresses(value: Map<string, Addresses>) {
        this._addresses = value;
    }

    get mails(): Map<string, Mails> {
        return this._mails;
    }

    set mails(value: Map<string, Mails>) {
        this._mails = value;
    }

    get phones(): Map<string, Phones> {
        return this._phones;
    }

    set phones(value: Map<string, Phones>) {
        this._phones = value;
    }

    get notes(): Map<string, Notes> {
        return this._notes;
    }

    set notes(value: Map<string, Notes>) {
        this._notes = value;
    }

}