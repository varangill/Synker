import { IUser } from "./User";
import { IGame } from "./Game";

interface ILobby {
  id: string;
  owner: IUser;
  players: IUser[];
  createdDate: Date;
  startDate: Date;
  title: string;
  description: string;
  maxPlayers: number;
  game: IGame;
  lobbyTags: string[];
}

export type { ILobby };
