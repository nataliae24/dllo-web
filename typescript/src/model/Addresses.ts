export class Addresses {
    public street: string;
    public numberStreet: number;
    public house: number;
    public letter: string;
    public postalCode: number;
    public population: string;
    public city: string;


    constructor(street: string, numberStreet: number, house: number, letter: string, postalCode: number, population: string, city: string) {
        this.street = street;
        this.numberStreet = numberStreet;
        this.house = house;
        this.letter = letter;
        this.postalCode = postalCode;
        this.population = population;
        this.city = city;
    }
}