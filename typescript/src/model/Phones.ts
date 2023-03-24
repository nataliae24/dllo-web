export class Phones {
  private _type: string;
  private _number: number;


  constructor(type: string, number: number) {
    this._type = type;
    this._number = number;
  }


  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
}