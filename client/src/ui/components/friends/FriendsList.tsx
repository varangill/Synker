import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Friend } from "../../../types/Chat";
import Title from "../common/Title";

interface FriendsListProps {
  friend: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friend }) => {
  const [friendList, setFriendList] = useState(friend);
  const [filter, setFilter] = useState("");
  const [addFriend, setAddFriend] = useState("");

  useEffect(() => {
    const filteredFriends = friend.filter((user) =>
      user.friend.username.toLowerCase().includes(filter.toLowerCase())
    );
    setFriendList(filteredFriends);
  }, [filter, friend]);

  // TODO: Add friend functionality
  const addFriendClick = () => {
    setFriendList([]);
  };

  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 w-1/3 h-full mr-10">
      <Title title="FRIENDS" />
      <div className="bg-gray-100 h-1 w-full"></div>
      <div className="search-bar-container p-4 w-full flex justify-center">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search ..."
          className="bg-gray-100 w-4/5 rounded-xl pl-4 text-white"
        ></input>
      </div>
      <div className="bg-gray-100 h-1 w-full mb-4"></div>
      <div className="friend-list-container text-white flex flex-col w-5/6 overflow-y-auto no-scrollbar flex-grow">
        {friendList.map((user, index) => (
          <button key={index}>
            <div className="friend flex flex-row gap-2 items-center mt-4 mb-4">
              <img src={user.friend.profilePicture} className="h-20 w-20"></img>
              <div className="font-bold text-xl">{user.friend.username}</div>
            </div>
            <div className="w-full bg-gray-100 h-1"></div>
          </button>
        ))}
      </div>
      <div className="bg-gray-100 h-1 w-full mt-4"></div>
      <div className="add-friend-container p-10 text-white flex items-center">
        <input
          type="text"
          value={addFriend}
          onChange={(e) => setAddFriend(e.target.value)}
          placeholder="Add Friend"
          className="bg-gray-100 w-3/5 h-10 rounded-xl pl-4 text-white mr-10"
        ></input>
        <button onClick={addFriendClick}>
          <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FriendsList;
