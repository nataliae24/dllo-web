import {Addresses} from "./Addresses";
import {Mails} from "./Mails";
import {Phones} from "./Phones";
import {Notes} from "./Notes";
import {Person} from "./Person";

export class Contact extends Person{
    private _addresses: Array<Addresses>;
    private _mails: Array<Mails>;
    private _phones: Array<Phones>;
    private _notes: Array<Notes>;
    private static _contactList: Contact[];


    constructor(dni: number, name: string, surName: string, dateBirth: Date, gender: string, favoriteColor: string,
                addresses: Addresses[], mails: Mails[], phones: Phones[], notes: Notes[]) {
        super(dni, name, surName, dateBirth, gender, favoriteColor);
        this._addresses = addresses;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }


    // @ts-ignore
     static updateContact(request:any): Contact {
        let id = request.get("dni");
        let response: any = this.findById(id);
        if (response == null) {
            console.log("DNI No encontrado!! ");
        } else {
            response.addresses.push(request.get("addresses"));
            response.mails.push(request.get("mails"));
            response.phones.push(request.get("phones"));
            return response;
        }
    }

    /**
     * findById
     * @param dni
     */
    static findById(dni:number): any {
        for (const iterator of this._contactList) {
            if (dni == iterator.dni) {
                return iterator;
            }
        }
    }

    // @ts-ignore
    static findAll(list:any): Contact[] {
        for (const iterator of list) {
            console.log(iterator)
        }
    }



    //Getter and setter

    get addresses(): Array<Addresses> {
        return this._addresses;
    }

    set addresses(value: Array<Addresses>) {
        this._addresses = value;
    }

    get mails(): Array<Mails> {
        return this._mails;
    }

    set mails(value: Array<Mails>) {
        this._mails = value;
    }

    get phones(): Array<Phones> {
        return this._phones;
    }

    set phones(value: Array<Phones>) {
        this._phones = value;
    }

    get notes(): Array<Notes> {
        return this._notes;
    }

    set notes(value: Array<Notes>) {
        this._notes = value;
    }

    static get contactList(): any {
        return this._contactList;
    }

    static set contactList(value: any) {
        this._contactList = value;
    }
}