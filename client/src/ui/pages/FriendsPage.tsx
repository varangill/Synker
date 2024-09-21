import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../routers/AppRouter";
import { Conversation } from "../../types/Chat";
import Navigation from "../components/common/Navigation";
import ConversationList from "../components/friends/ConversationList";
import ChatWindow from "../components/friends/ChatWindow";
import testFriendList from "../../mockData/testFriendList.json";
import windowResize from "../utils/WindowResize";
import testChatMessages from "../../mockData/testChatMessages.json";

const getId = (): string => {
  return "1";
};

const parsedChatList: Conversation[] = [...testFriendList].map((item) => ({
  ...item,
  lastMessageSent: new Date(item.lastMessageSent),
}));

parsedChatList.sort(
  (a, b) => Number(b.lastMessageSent) - Number(a.lastMessageSent)
);

export default function FriendsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  const [selectedChat, setSelectedChat] = useState<Conversation>(
    parsedChatList[0]
  );
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("ModalContext is not provided");
  }

  const [isModalOpen] = modalContext;

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  const handleChatSelect = (chat: Conversation) => {
    setSelectedChat(chat);
    console.log(chat);
  };

  const convertedChatMessages = testChatMessages.map((message) => ({
    ...message,
    time: new Date(message.time),
  }));

  return (
    <div
      className={`App flex flex-row bg-primary-100 h-screen ${
        isModalOpen ? "backdrop-blur-lg" : ""
      }`}
    >
      <Navigation />
      <div
        className={`friends-screen-container flex w-full flex-wrap overflow-x-hidden h-full justify-center gap-10 ${
          isMobile ? "" : "p-10"
        }`}
      >
        <div className={`w-full h-full ${isMobile ? "pt-[90px]" : ""}`}>
          <div className="flex flex-row w-full h-full">
            <ConversationList
              conversationList={parsedChatList}
              selectedChat={selectedChat}
              handleChatSelect={handleChatSelect}
            />
            <ChatWindow
              chat={{
                id: "friend" in selectedChat ? "" : selectedChat.id,
                chatProfilePicture:
                  "friend" in selectedChat
                    ? selectedChat.friend.profilePicture
                    : selectedChat.chatProfilePicture,
                chatName:
                  "friend" in selectedChat
                    ? selectedChat.friend.username
                    : selectedChat.chatName,
                members:
                  "friend" in selectedChat
                    ? [selectedChat.friend]
                    : selectedChat.members,
                messages: convertedChatMessages,
              }}
              isGroupChat={"friend" in selectedChat ? false : true}
              loggedInUserID={getId()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
