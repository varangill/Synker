import { LobbyUser } from "./User";
import { Game } from "./Game";

type Lobby = {
  id: string;
  owner: LobbyUser;
  players: LobbyUser[];
  createdDate: Date;
  startDate: Date;
  title: string;
  description: string;
  maxPlayers: number;
  game: Game;
  lobbyTags: string[];
};

export type { Lobby };
