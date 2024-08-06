import { GeneralUser } from "./User";

type Message = {
  id: string;
  sender: GeneralUser;
  time: Date;
};

type Chat = {
  id: string;
  members: GeneralUser[];
  active: boolean;
  messages: Message[];
  lastMessageSent: Date;
};

export type { Chat };
