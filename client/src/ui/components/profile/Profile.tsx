import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faStar } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../common/Dropdown";
import CancelSaveButton from "../common/CancelSaveButton";
import TextArea from "../common/TextArea";

import { showSuccessToast } from "../../utils/ShowToast";

interface ProfileProps {
  gameTags: string[];
  username: string;
  description: string;
  profilePicture: string;
  membership: string;
  auth: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  profilePicture,
  username,
  description,
  gameTags,
  membership,
  auth,
}) => {
  const [editDescription, setEditDescription] = useState(description);
  const [tempDescription, setTempDescription] = useState(description);
  const [editProfilePic, setEditProfilePic] = useState(profilePicture);
  const [tempProfilePic, setTempProfilePic] = useState(profilePicture);
  const [editGameTags, setEditGameTags] = useState([...gameTags].sort());
  const [tempGameTags, setTempGameTags] = useState([...gameTags].sort());
  const [isEditing, setIsEditing] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    ...gameTags,
  ]);

  const imgInput = useRef<HTMLInputElement>(null);

  const gameList = [
    "Valorant",
    "League of Legends",
    "Clash of Clans",
    "Lethal Company",
    "Apex",
    "Fortnite",
    "Genshin Impact",
  ];

  const handleSelectionChange = (selectedValues: (string | number)[]) => {
    setSelectedOptions([...new Set(selectedValues as string[])]);
  };

  function handleEditClick() {
    setIsEditing(!isEditing);
    setTempDescription(editDescription);
    setTempProfilePic(editProfilePic);
    setTempGameTags(editGameTags);
  }

  function handleSaveClick() {
    setEditDescription(tempDescription);
    setEditProfilePic(tempProfilePic);
    setEditGameTags([...selectedOptions].sort());
    setIsEditing(false);
    showSuccessToast("Profile saved.");
  }

  function handlePFPClick() {
    if (isEditing) {
      imgInput.current?.click();
    }
  }

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setTempProfilePic(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container w-96 bg-primary-200 rounded-2xl flex flex-col h-fit">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={imgInput}
        onChange={handleProfilePicChange}
      />
      <img
        className={`profile-pic w-96 h-96 object-cover ${
          isEditing ? "hover:opacity-30 cursor-pointer" : ""
        }`}
        src={isEditing ? tempProfilePic : editProfilePic}
        onClick={handlePFPClick}
        alt="Profile"
      />
      <div className="username w-full text-center text-white text-2xl pt-2">
        {username}
      </div>
      {membership === "Platinum" && (
        <div className="membership-level text-white flex justify-center items-center pb-2 gap-1">
          <FontAwesomeIcon icon={faStar} />
          Platinum Member
        </div>
      )}
      <div className="line bg-primary-100 w-full h-1"></div>
      {isEditing ? (
        <div className="p-3">
          <TextArea
            className="mt-2"
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            rows={3}
            maxHeight={3}
            maxLength={150}
            currentInputText={tempDescription}
            setCurrentInputText={setTempDescription}
          />
          <div className="flex flex-col w-full justify-evenly h-full items-center pb-3 pt-2 gap-3">
            <div className="dropdown-container h-8 z-10 w-full">
              <Dropdown
                dropdownList={gameList}
                type="multiple"
                selectedList={selectedOptions}
                onSelectionChange={handleSelectionChange}
                placeholder="SELECT GAMES..."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="desc text-white text-base px-5 pt-2 w-full break-words">
          {editDescription}
        </div>
      )}

      <div className="tag-container p-5 flex flex-wrap gap-2">
        {(isEditing ? tempGameTags : editGameTags).map((option, index) => (
          <div
            key={index}
            className="w-fit rounded-xl p-1 px-2 h-8 bg-primary-100 text-accent-100"
          >
            {option}
          </div>
        ))}
      </div>
      <div className="btn-container w-full flex justify-end pr-5">
        {auth && !isEditing && (
          <button className="btn-edit" onClick={handleEditClick}>
            <FontAwesomeIcon icon={faEdit} className="text-white" />
          </button>
        )}
        {auth && isEditing && (
          <CancelSaveButton
            onCancelClick={handleEditClick}
            onSaveClick={handleSaveClick}
          />
        )}
      </div>
      <div className="space pb-5"></div>
    </div>
  );
};

export default Profile;
