import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { ChatList } from "../../../types/Chat";
import "react-toastify/dist/ReactToastify.css";
import Title from "../common/Title";
import { showToast } from "../../utils/ShowToast";
import windowResize from "../../utils/WindowResize";

interface FriendsListProps {
  chatItems: ChatList[];
  selectedChat: ChatList;
  handleChatSelect: (chat: ChatList) => void;
}

const FriendsList: React.FC<FriendsListProps> = ({
  chatItems,
  selectedChat,
  handleChatSelect,
}) => {
  const [filteredChatList, setFilteredChatList] = useState(chatItems);
  const [filter, setFilter] = useState("");
  const [addFriend, setAddFriend] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // TODO: Debouncing
  // TODO: Create new group chat functionality

  useEffect(() => {
    const filteredChats = chatItems.filter((item) =>
      "friend" in item
        ? item.friend.username.toLowerCase().includes(filter.toLowerCase())
        : item.chatName.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredChatList(filteredChats);
  }, [filter, chatItems]);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  const addFriendClick = (addFriend: string) => {
    // TODO: Add friend functionality
    // If addFriend is not found in database, display error
    if (addFriend == "") {
      showToast("Username not found!", "error");
    } else {
      showToast("Friend request sent!", "success");
    }
  };

  return (
    <div
      className={`flex flex-col items-center bg-primary-200 w-1/3 min-w-[150px] h-full ${
        isMobile
          ? "border-r-4 border-accent-100"
          : "rounded-2xl mr-10 border-l-4 border-b-4 border-accent-100"
      }`}
    >
      <ToastContainer />
      <Title title="CHATS" />
      <div className="bg-primary-100 h-1 w-full"></div>
      <div className="search-bar-container p-4 w-full flex justify-center">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search ..."
          className="bg-primary-100 w-4/5 min-w-[120px] rounded-xl pl-4 text-white"
        ></input>
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
            <div className="friend flex flex-row gap-2 items-center mt-4 mb-4">
              <img
                src={
                  "friend" in item
                    ? item.friend.profilePicture
                    : item.chatProfilePicture
                }
                className="h-1/5 w-1/5"
                alt={
                  "friend" in item
                    ? `${item.friend.username}'s profile`
                    : `${item.chatName} group chat profile`
                }
              />
              <div className="btn-text">
                {"friend" in item ? item.friend.username : item.chatName}
              </div>
              <div className="flex flex-grow"></div>
              {item.unreadCount > 0 && (
                <div className="bg-red rounded-full h-6 w-6 text-white font-bold flex items-center justify-center">
                  {item.unreadCount}
                </div>
              )}
            </div>
            <div className="w-full bg-primary-100 h-0.5"></div>
          </button>
        ))}
      </div>
      <div className="bg-primary-100 h-1 w-full mt-4"></div>
      <div className="add-friend-container p-4 text-white flex items-center">
        <input
          type="text"
          value={addFriend}
          onChange={(e) => setAddFriend(e.target.value)}
          placeholder="Add Friend"
          className="bg-primary-100 w-full h-8 rounded-xl pl-4 text-white mr-4 text-base"
        ></input>
        <button onClick={() => addFriendClick(addFriend)}>
          <FontAwesomeIcon
            icon={faUserPlus}
            className="object-contain h-2/4 w-5 text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default FriendsList;
