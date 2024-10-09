import React, { useState } from "react";
import { Dialog, DialogPanel, Combobox } from "@headlessui/react";

import { FriendUser } from "../../../types/User";
import Dropdown from "../common/Dropdown";
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
  const [selectedFriends, setSelectedFriends] = useState<FriendUser[]>([]);
  const [query, setQuery] = useState<string>("");

  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddMemberClick = () => {
    console.log("Adding member...");
  };

  const handleRemoveMemberClick = (memberId: string) => {
    console.log(`Kicking member with id: ${memberId}`);
  };

  const handleSelectFriend = (friend: FriendUser) => {
    if (!selectedFriends.includes(friend)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto bg-primary-200 w-[600px]  rounded-2xl">
          <div className="text-white font-bold text-xl p-6">Chat Settings</div>
          <div className="h-1 w-full bg-accent-100"></div>
          <div className="p-6">
            {/* Add Member Section */}
            <div className="text-white font-semibold text-md">General</div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <div className="flex flex-row">
              <img src={chatProfilePicture} className="w-24"></img>
            </div>
            <div className="text-md font-semibold text-white mb-2">
              Add Member
            </div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex flex-row">
                <input
                  type="text"
                  className="w-full h-9 bg-primary-300 text-gray-100 p-2 rounded mr-4"
                  placeholder="Search for friends..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex justify-end space-x-2 justify-center">
                  <button
                    onClick={() => handleAddMembersClick(selectedFriends)}
                    className="btn-add h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 items-center justify-center text-white font-bold w-24"
                  >
                    INVITE
                  </button>
                </div>
              </div>
              {/* Multi-select Dropdown */}

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
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="text-white font-semibold text-md">
              Notifications
            </div>
            <div className="line bg-primary-100 h-0.5 mt-1 mb-4"></div>
            <CancelSaveButton
              onCancelClick={onClose}
              onSaveClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditMembers;
