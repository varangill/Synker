import React, { useEffect, useState } from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";

import Button from "../common/Button";
import Input from "../common/Input";
import { Conversation } from "../../../types/Chat";
import Title from "../common/Title";
import { showSuccessToast, showErrorToast } from "../../utils/ShowToast";
import windowResize from "../../utils/WindowResize";

interface ConversationListProps {
  conversationList: Conversation[];
  selectedChat: Conversation;
  handleChatSelect: (chat: Conversation) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversationList,
  selectedChat,
  handleChatSelect,
}) => {
  const [filteredChatList, setFilteredChatList] = useState(conversationList);
  const [filter, setFilter] = useState("");
  const [friendToAddNameInput, setFriendToAddNameInput] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // TODO: Debouncing
  // TODO: Create new group chat functionality

  useEffect(() => {
    const filteredChats = conversationList.filter((item) =>
      "friend" in item
        ? item.friend.username.toLowerCase().includes(filter.toLowerCase())
        : item.chatName.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredChatList(filteredChats);
  }, [filter, conversationList]);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  const handleAddFriendClick = (friendToAddName: string) => {
    // TODO: Add friend functionality
    // If friendToAddName is not found in database, display error
    if (friendToAddName == "" || friendToAddName == " ") {
      showErrorToast("Username not found.");
    } else {
      showSuccessToast(`Friend request sent to ${friendToAddName}.`);
    }
  };

  return (
    <div
      className={`flex flex-col items-center bg-primary-200 w-1/3 min-w-[19 0px] h-full ${
        isMobile
          ? "border-r-4 border-accent-100"
          : "rounded-2xl mr-10 border-l-4 border-b-4 border-accent-100"
      }`}
    >
      <Title title="CHATS" />
      <div className="bg-primary-100 h-1 w-full"></div>
      <div className="search-bar-container p-4 w-full flex justify-center">
        <Input
          variant="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search ..."
          className="bg-primary-100 w-4/5 min-w-[120px] rounded-xl pl-4 text-white"
          id="filterFriends"
        />
      </div>
      <div className="bg-primary-100 h-1 w-full mb-4"></div>
      <div className="friend-list-container text-white flex flex-col w-full overflow-y-auto no-scrollbar flex-grow">
        {filteredChatList.map((item, index) => (
          <button
            key={index}
            onClick={() => handleChatSelect(item)}
            className={`pl-4 pt-2 pb-2 pr-4 ${
              "friend" in selectedChat && "friend" in item
                ? selectedChat.friend.id === item.friend.id
                  ? "bg-accent-100"
                  : "hover:bg-primary-300"
                : "id" in selectedChat && "id" in item
                ? selectedChat.id === item.id
                  ? "bg-accent-100"
                  : "hover:bg-primary-300"
                : "hover:bg-primary-300"
            }`}
          >
            <div className="friend flex flex-row items-center mt-2 mb-4">
              <img
                src={
                  "friend" in item
                    ? item.friend.profilePicture
                    : item.chatProfilePicture
                }
                className="h-1/5 w-1/5 mr-2"
                alt={
                  "friend" in item
                    ? `${item.friend.username}'s profile`
                    : `${item.chatName} group chat profile`
                }
              />
              <div className="text text-left text-nowrap overflow-hidden text-ellipsis">
                {"friend" in item ? item.friend.username : item.chatName}
              </div>
              <div className="flex flex-grow"></div>
              {item.unreadCount > 0 && (
                <div className="bg-red rounded-full h-6 w-6 min-h-6 min-w-6 text-white font-bold flex items-center justify-center ml-2">
                  {item.unreadCount}
                </div>
              )}
            </div>
            <div className="w-full bg-primary-100 h-0.5"></div>
          </button>
        ))}
      </div>
      <div className="bg-primary-100 h-1 w-full mt-4" />
      <div className="add-friend-container p-4 flex flex-row items-center w-full">
        <Input
          id="addFriend"
          variant="search"
          value={friendToAddNameInput}
          onChange={(e) => setFriendToAddNameInput(e.target.value)}
          placeholder={isMobile ? "User" : "Add friend"}
        />

        <Button
          onClick={() => handleAddFriendClick(friendToAddNameInput)}
          variant="icon"
          icon={faUserPlus}
        />
      </div>
    </div>
  );
};

export default ConversationList;
