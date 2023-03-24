export class Mails {
  private _title: string;
  private _email: string;

  constructor(type: string, email: string) {
    this._title = type;
    this._email = email;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}