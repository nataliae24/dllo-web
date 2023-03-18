export class Person {
    private _dni: number;
    private _name: string;
    private _surName: string;
    private _age: number;
    private _dateBirth: Date;
    private _gender: string;
    private _favoriteColor: string;

    constructor(dni: number, name: string, surName: string, age: number, dateBirth: Date, gender: string, favoriteColor: string) {
        this._dni = dni;
        this._name = name;
        this._surName = surName;
        this._age = age;
        this._dateBirth = dateBirth;
        this._gender = gender;
        this._favoriteColor = favoriteColor;
    }


    get dni(): number {
        return this._dni;
    }

    set dni(value: number) {
        this._dni = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surName(): string {
        return this._surName;
    }

    set surName(value: string) {
        this._surName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get dateBirth(): Date {
        return this._dateBirth;
    }

    set dateBirth(value: Date) {
        this._dateBirth = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get favoriteColor(): string {
        return this._favoriteColor;
    }

    set favoriteColor(value: string) {
        this._favoriteColor = value;
    }
}