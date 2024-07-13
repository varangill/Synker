import { IUser } from "./User";

interface IReview {
  id: string;
  reviewer: IUser;
  recipient: IUser;
  rating: number;
  text: string;
  createdTime: Date;
}

export type { IReview };
