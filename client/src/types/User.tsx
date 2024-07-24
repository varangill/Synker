import { Carousel } from "./Carousel";

type User = {
  id: string;
  username: string;
  description: string;
  profilePicture: string;
  gameTags: string[];
  membership: string;
  auth: boolean;
  friends: string[];
  status: boolean;
  introvert: number;
  observant: number;
  thinking: number;
  judging: number;
  carousel: Carousel;
};

type LobbyUser = {
  id: string;
  username: string;
  profilePicture: string;
};

type SyncUser = {
  id: string;
  username: string;
  description: string;
  profilePicture: string;
  gameTags: string[];
  membership: string;
};

export type { User, LobbyUser, SyncUser };
