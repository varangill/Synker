import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import { FriendUser } from "../../../types/User";

interface EditMembersProps {
  isOpen: boolean;
  onClose: () => void;
  members: FriendUser[];
  onAddMember: () => void;
  onKickMember: (memberId: string) => void;
}

const EditMembers: React.FC<EditMembersProps> = ({
  isOpen,
  onClose,
  members,
  onAddMember,
  onKickMember,
}) => {
  console.log(members);
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto bg-primary-200 p-6 rounded-lg h-[550px] w-[900px]">
          <DialogTitle className="text-xl font-bold mb-4">
            Edit Members
          </DialogTitle>
          <ul className="mb-4">
            {members.map((member) => (
              <li
                key={member.id}
                className="flex justify-between items-center mb-2"
              >
                <div>{member.username}</div>
                <button
                  onClick={() => onKickMember(member.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Kick
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onAddMember}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Member
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditMembers;
