import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { FriendUser } from "../../../types/User";
import CancelSaveButton from "../common/CancelSaveButton";

interface EditMembersModalProps {
  chatID: string;
  chatProfilePicture: string;
  chatName: string;
  isOpen: boolean;
  onClose: () => void;
  members: FriendUser[];
  friends: FriendUser[];
}

const EditMembers: React.FC<EditMembersModalProps> = ({
  chatID,
  chatProfilePicture,
  chatName,
  isOpen,
  onClose,
  members,
  friends,
}) => {
  const [editChatName, setEditChatName] = useState("");
  const [displayChatName, setDisplayChatName] = useState(chatName);
  const [editChatProfilePicture, setEditChatProfilePicture] = useState("");
  const [displayChatProfilePicture, setDisplayChatProfilePicture] =
    useState(chatProfilePicture);
  const [selectedFriends, setSelectedFriends] = useState<FriendUser[]>([]);
  const [query, setQuery] = useState<string>("");

  const filteredFriends =
    query === ""
      ? []
      : friends.filter((friend) =>
          friend.username.toLowerCase().includes(query.toLowerCase())
        );

  const handleRemoveMemberClick = (memberId: string) => {
    setSelectedFriends((prevSelectedFriends) =>
      prevSelectedFriends.filter((friend) => friend.id !== memberId)
    );
  };

  const handleSelectFriend = (friend: FriendUser) => {
    if (!selectedFriends.includes(friend)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
    setQuery(""); // Clear search after selecting
  };

  const handleSaveClick = () => {
    setDisplayChatName(editChatName);
    setDisplayChatProfilePicture(editChatProfilePicture);

    console.log("Saving information to chat: ", chatID);
    console.log("Chat Name: ", displayChatName);
    console.log("Chat Profile Picture: ", displayChatProfilePicture);

    onClose();
  };

  const handleCancelClick = () => {
    setEditChatName(chatName);
    setEditChatProfilePicture(chatProfilePicture);

    onClose();
  };

  const handleImageClick = () => {
    document.getElementById("profile-picture-input")?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setEditChatProfilePicture(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto bg-primary-200 w-[600px] rounded-2xl">
          <div className="text-white font-bold text-xl p-6">Chat Settings</div>
          <div className="h-1 w-full bg-accent-100"></div>
          <div className="p-6">
            {/* General Section */}
            <div className="text-white font-semibold text-md">General</div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <div className="flex flex-row mb-6 gap-10 w-full">
              <div
                className="relative w-32 cursor-pointer group"
                onClick={handleImageClick}
              >
                <img
                  src={editChatProfilePicture || chatProfilePicture}
                  className="w-24 h-24 object-cover group-hover:brightness-50"
                  alt="Chat Profile"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Change</span>
                  <span>Icon</span>
                </div>
                <input
                  type="file"
                  id="profile-picture-input"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div className="general-section-name-container flex flex-col w-full">
                <div className="label flex justify-between items-center mb-2 text-gray-300">
                  Chat Name
                </div>
                <input
                  type="text"
                  className="w-full h-9 bg-primary-300 text-gray-100 p-2 rounded mr-4 focus:outline-none w-full"
                  placeholder={displayChatName}
                  onChange={(e) => setEditChatName(e.target.value)}
                />
              </div>
            </div>
            {/* Add Member Section */}
            <div className="text-md font-semibold text-white mb-2">
              Add Member
            </div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <div className="flex flex-col space-y-2 mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-9 bg-primary-300 text-gray-100 p-2 rounded focus:outline-none"
                  placeholder="Search for friends..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {filteredFriends.length > 0 && (
                  <ul className="absolute z-10 mt-1 w-full bg-primary-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto max-h-40">
                    {filteredFriends.map((friend) => (
                      <li
                        key={friend.id}
                        onClick={() => handleSelectFriend(friend)}
                        className="cursor-pointer select-none relative py-2 pl-4 pr-4 hover:bg-accent-200 text-gray-100 flex items-center"
                      >
                        <img
                          src={friend.profilePicture}
                          className="w-8 h-8 rounded-full mr-2"
                          alt={`${friend.username} profile`}
                        />
                        <div className="flex items-center">
                          {friend.username}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Selected Friends */}
              <div className="flex flex-wrap space-x-2">
                {selectedFriends.map((friend) => (
                  <div
                    key={friend.id}
                    className="bg-accent-100 text-white px-2 py-1 rounded flex items-center"
                  >
                    {friend.username}
                    <button
                      onClick={() => handleRemoveMemberClick(friend.username)}
                      className="ml-2"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Member List Section */}
            <div className="text-white font-semibold text-md">Member List</div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <div className="mb-4">
              {members.map((member) => (
                <li
                  key={member.id}
                  className="flex justify-between items-center mb-2 text-gray-300"
                >
                  <div>{member.username}</div>
                  <button
                    onClick={() => handleRemoveMemberClick(member.id)}
                    className="bg-red-500 text-gray-300 hover:text-red px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </div>
            {/* Notification Section */}
            <div className="text-white font-semibold text-md">
              Notifications
            </div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
          </div>
          <div className="pr-4 pb-6">
            <CancelSaveButton
              onCancelClick={handleCancelClick}
              onSaveClick={handleSaveClick}
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditMembers;
