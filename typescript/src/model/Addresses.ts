export class Addresses {
    private _address: string;
    private _postalCode: number;
    private _country: string;
    private _city: string;


    constructor(address: string, postalCode: any,
                country: string, city: string) {
        this._address = address;
        this._postalCode = postalCode;
        this._country = country;
        this._city = city;
    }


    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    set postalCode(value: number) {
        this._postalCode = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}