import React, { useState } from "react";
import { Chat } from "../../../types/Chat";

interface FriendsListProps {
  chats: Chat[];
}

const FriendsList: React.FC<FriendsListProps> = ({ chats }) => {
  const [chatList, setChatList] = useState(chats);
  return (
    <div>
      <div>
        {chatList.map((chat, index) => (
          <div key={index}>{chat.id}</div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
