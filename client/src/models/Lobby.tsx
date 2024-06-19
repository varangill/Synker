import { User } from "./User";
import { Game } from "./Game";

export class Lobby {
  private _id: string;
  private _owner: User;
  private _players: User[];
  private _createdDate: Date;
  private _startDate: Date;
  private _title: string;
  private _description: string;
  private _maxPlayers: number;
  private _game: Game;
  private _lobbyTags: string[];

  constructor(
    id: string,
    owner: User,
    players: User[],
    createdDate: Date,
    startDate: Date,
    title: string,
    description: string,
    maxPlayers: number,
    game: Game,
    lobbyTags: string[]
  ) {
    this._id = id;
    this._owner = owner;
    this._players = players;
    this._createdDate = createdDate;
    this._startDate = startDate;
    this._title = title;
    this._description = description;
    this._maxPlayers = maxPlayers;
    this._game = game;
    this._lobbyTags = lobbyTags;
  }

  // Methods for ID
  getId(): string {
    return this._id;
  }

  setId(newId: string): void {
    this._id = newId;
  }

  // Methods for Owner
  getOwner(): User {
    return this._owner;
  }

  setOwner(newOwner: User): void {
    this._owner = newOwner;
  }

  // Methods for Players
  getPlayers(): User[] {
    return this._players;
  }

  setPlayers(newPlayers: User[]): void {
    this._players = newPlayers;
  }

  // Methods for Created Date
  getCreatedDate(): Date {
    return this._createdDate;
  }

  setCreatedDate(newCreatedDate: Date): void {
    this._createdDate = newCreatedDate;
  }

  // Methods for Start Date
  getStartDate(): Date {
    return this._startDate;
  }

  setStartDate(newStartDate: Date): void {
    this._startDate = newStartDate;
  }

  // Methods for Title
  getTitle(): string {
    return this._title;
  }

  setTitle(newTitle: string): void {
    this._title = newTitle;
  }

  // Methods for Description
  getDescription(): string {
    return this._description;
  }

  setDescription(newDescription: string): void {
    this._description = newDescription;
  }

  // Methods for Max Players
  getMaxPlayers(): number {
    return this._maxPlayers;
  }

  setMaxPlayers(newMaxPlayers: number): void {
    this._maxPlayers = newMaxPlayers;
  }

  // Methods for Game
  getGame(): Game {
    return this._game;
  }

  setGame(newGame: Game): void {
    this._game = newGame;
  }

  // Methods for Lobby Tags
  getLobbyTags(): string[] {
    return this._lobbyTags;
  }

  setLobbyTags(newLobbyTags: string[]): void {
    this._lobbyTags = newLobbyTags;
  }
}
