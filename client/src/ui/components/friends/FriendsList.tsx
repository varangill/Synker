import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Friend } from "../../../types/Chat";
import Title from "../common/Title";

interface FriendsListProps {
  friend: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friend }) => {
  const [friendList, setFriendList] = useState(friend);

  // TODO: Add friend functionality
  const addFriendClick = () => {
    setFriendList([]);
  };

  return (
    <div className="rounded-2xl flex flex-col items-center bg-gray-200 w-1/3 h-full mr-10">
      <Title title="FRIENDS" />
      <div className="bg-gray-100 h-1 w-full"></div>
      <div className="friend-list-container">
        {friendList.map((user, index) => (
          <div key={index}>{user.friend.id}</div>
        ))}
      </div>
      <div className="flex flex-grow"></div>
      <button onClick={addFriendClick}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </div>
  );
};

export default FriendsList;
