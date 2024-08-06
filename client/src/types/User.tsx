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

type SyncUser = {
  id: string;
  username: string;
  description: string;
  profilePicture: string;
  gameTags: string[];
  membership: string;
};

type GeneralUser = {
  id: string;
  username: string;
  profilePicture: string;
};

export type { User, SyncUser, GeneralUser };
