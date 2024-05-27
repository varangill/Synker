export class Game {
  private _id: string;
  private _name: string;
  private _genre: string;
  private _color: string;
  private _picture: string;

  constructor(
    id: string,
    name: string,
    genre: string,
    color: string = "Black",
    picture: string
  ) {
    this._id = id;
    this._name = name;
    this._genre = genre;
    this._color = color;
    this._picture = picture;
  }

  // ID
  getId(): string {
    return this._id;
  }

  setId(newId: string): void {
    this._id = newId;
  }

  // Name
  getName(): string {
    return this._name;
  }

  setName(newName: string): void {
    this._name = newName;
  }

  // Genre
  getGenre(): string {
    return this._genre;
  }

  setGenre(newGenre: string): void {
    this._genre = newGenre;
  }

  // Color
  getColor(): string {
    return this._color;
  }

  setColor(newColor: string): void {
    this._color = newColor;
  }

  // Picture
  getPicture(): string {
    return this._picture;
  }

  setPicture(newPicture: string): void {
    this._picture = newPicture;
  }
}
