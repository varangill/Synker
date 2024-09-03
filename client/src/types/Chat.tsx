import { GeneralUser, FriendUser } from "./User";

type Message = {
  id: string;
  content: string;
  sender: GeneralUser;
  time: Date;
};

type Friend = {
  friend: FriendUser;
  unreadCount: number;
  lastMessageSent: Date;
};

type GroupChat = {
  id: string;
  members: FriendUser[];
  chatName: string;
  chatProfilePicture: string;
  unreadCount: number;
  lastMessageSent: Date;
};

type Chat = {
  id: string;
  chatName: string;
  chatProfilePicture: string;
  members: FriendUser[];
  messages: Message[];
};

type Conversation = Friend | GroupChat;

export type { Message, Chat, Friend, GroupChat, Conversation };
