import { GeneralUser, FriendUser } from "./User";

type Message = {
  id: string;
  content: string;
  sender: GeneralUser;
  time: Date;
};

type Friend = {
  friend: FriendUser;
  lastMessageSent: Date;
};

type Chat = {
  id: string;
  members: GeneralUser[];
  active: boolean;
  messages: Message[];
};

export type { Chat, Friend };
