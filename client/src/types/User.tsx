import { ICarousel } from "./Carousel";

interface IUser {
  id: string;
  gameTags: string[];
  username: string;
  description: string;
  profilePicture: string;
  membership: string;
  auth: boolean;
  friends: IUser[];
  status: boolean;
  introvert: number;
  observant: number;
  thinking: number;
  judging: number;
  carousel: ICarousel;
}

export type { IUser };
