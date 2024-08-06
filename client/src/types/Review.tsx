import { ReviewUser } from "./User";

type Review = {
  id: string;
  reviewer: ReviewUser;
  recipient: ReviewUser;
  rating: number;
  text: string;
  createdTime: Date;
};

export type { Review };
