import { useEffect, useState } from "react";
import { ChatList } from "../../types/Chat";
import Navigation from "../components/common/Navigation";
import FriendsList from "../components/friends/FriendsList";
import ChatWindow from "../components/friends/ChatWindow";
import testFriendList from "../../mockData/testFriendList.json";
import windowResize from "../utils/WindowResize";

// TODO: Get data from the back-end

const parsedChatList: ChatList[] = [...testFriendList].map((item) => ({
  ...item,
  lastMessageSent: new Date(item.lastMessageSent),
}));

parsedChatList.sort(
  (a, b) => Number(b.lastMessageSent) - Number(a.lastMessageSent)
);

export default function FriendsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  const [selectedChat, setSelectedChat] = useState<ChatList>(parsedChatList[0]);

  // TODO: Once a chat is selected, unreadCount should go to 0

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  const handleChatSelect = (chat: ChatList) => {
    setSelectedChat(chat);
    console.log(chat);
  };

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div
        className={`friends-screen-container flex w-full flex-wrap overflow-x-hidden h-full justify-center gap-10 ${
          isMobile ? "" : "p-10"
        }`}
      >
        <div className={`w-full h-full ${isMobile ? "pt-[90px]" : ""}`}>
          <div className="flex flex-row w-full h-full">
            <FriendsList
              chatItems={parsedChatList}
              selectedChat={selectedChat}
              handleChatSelect={handleChatSelect}
            />
            <ChatWindow
              chat={{
                id: "friend" in selectedChat ? "" : selectedChat.id, // Use the ID for group chats
                chatName:
                  "friend" in selectedChat
                    ? selectedChat.friend.username
                    : selectedChat.chatName,
                members:
                  "friend" in selectedChat
                    ? [selectedChat.friend]
                    : selectedChat.members,
                messages: [], // Load actual chat messages
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
