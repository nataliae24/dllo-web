import {Person} from "./Person";
import {Addresses} from "./Addresses";
import {Mails} from "./Mails";
import {Phones} from "./Phones";
import {Notes} from "./Notes";

export class Contact extends Person{
    private _addresses: Addresses;
    private _mails: Mails;
    private _phones: Phones;
    private _notes: Notes;


    constructor(dni: number, name: string, surName: string, age: number, dateBirth: Date, gender: string, favoriteColor: string, addresses: Addresses, mails: Mails, phones: Phones, notes: Notes) {
        super(dni, name, surName, age, dateBirth, gender, favoriteColor);
        this._addresses = addresses;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }


    get addresses(): Addresses {
        return this._addresses;
    }

    set addresses(value: Addresses) {
        this._addresses = value;
    }

    get mails(): Mails {
        return this._mails;
    }

    set mails(value: Mails) {
        this._mails = value;
    }

    get phones(): Phones {
        return this._phones;
    }

    set phones(value: Phones) {
        this._phones = value;
    }

    get notes(): Notes {
        return this._notes;
    }

    set notes(value: Notes) {
        this._notes = value;
    }
}