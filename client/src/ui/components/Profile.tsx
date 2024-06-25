import React, { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
  // const authenticated = useContext(Authenticated)
  // Needs to pass a profile through
  // let authenticated = true;

  const [editDescription, setEditDescription] = useState(description);
  const [tempDescription, setTempDescription] = useState(description);
  const [editProfilePic, setEditProfilePic] = useState(profilePicture);
  const [tempProfilePic, setTempProfilePic] = useState(profilePicture);
  const [editGameTags, setEditGameTags] = useState(gameTags);
  const [tempGameTags, setTempGameTags] = useState(gameTags);
  const [isEditing, setIsEditing] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>(gameTags);

  const imgInput = useRef<HTMLInputElement>(null);

  // TODO: get actual values from the database
  const list = [
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

  const colorClasses = [
    "text-red",
    "text-blue",
    "text-green",
    "text-yellow",
    "text-pink",
    "text-orange",
  ];

  function handleEditClick() {
    setIsEditing(!isEditing);
    setTempDescription(editDescription);
    setTempProfilePic(editProfilePic);
    setTempGameTags(editGameTags);
  }

  function handleSaveClick() {
    // Sends updates to backend
    setEditDescription(tempDescription);
    setEditGameTags(selectedOptions);
    setEditProfilePic(tempProfilePic);
    setIsEditing(!isEditing);
  }

  function handlePFPClick() {
    // Updates the profile picture only when editing mode is on
    if (isEditing) {
      imgInput.current?.click();
    }
  }

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Assert event.target as HTMLInputElement
    const input = event.target as HTMLInputElement;

    // Check if files exist and if the first file is defined
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        // Make sure to check if reader.result is a string before setting state
        if (typeof reader.result === "string") {
          setTempProfilePic(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file chosen or file access error.");
    }
  };

  // TODO: assign colors to specific games from the database
  function getColor() {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  }

  editGameTags.sort();

  return (
    <div className="profile-container w-72 bg-gray-200 rounded-2xl flex flex-col h-fit">
      <input
        className="PFP-input hidden"
        type="file"
        accept="image/*"
        ref={imgInput}
        onChange={handleProfilePicChange}
      ></input>
      <img
        className={`profile-pic w-72 h-72 object-fit ${
          isEditing == true ? "hover:opacity-30 cursor-pointer" : ""
        }`}
        src={isEditing ? tempProfilePic : editProfilePic}
        onClick={handlePFPClick}
      ></img>
      <div className="username w-full text-center text-white text-2xl pt-2">
        {username}
      </div>
      {membership == "Platinum" && (
        <div className="membership-level text-white justify-center flex items-center pb-2 gap-1">
          <FontAwesomeIcon icon={faStar} />
          Platinum Member
        </div>
      )}
      <div className="line bg-gray-100 w-full h-1"></div>
      {isEditing ? (
        <div>
          <textarea
            className="desc text-white text-base pl-3 pr-5 pt-2 w-full bg-gray-200 w-auto overflow-hidden text-ellipsis break-words"
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            style={{ height: "auto", overflowY: "hidden" }}
            rows={3}
            maxLength={150}
            autoFocus={true}
            autoCorrect="on"
          />
          <div className="flex flex-col w-full justify-evenly h-full items-center pb-3 pt-2 gap-3">
            <div className="dropdown-container h-8 z-10 w-4/5 w-max-60">
              <Dropdown
                dropdownList={list}
                type="multiple"
                selectedList={selectedOptions}
                onSelectionChange={handleSelectionChange}
                placeholder="SELECT GAMES ..."
              ></Dropdown>
            </div>
          </div>
        </div>
      ) : (
        <div className="desc text-white text-base pl-3 pr-5 pt-2 w-full overflow-hidden text-ellipsis break-words">
          {editDescription}
        </div>
      )}

      <div className="tag-container p-3 flex flex-wrap gap-2">
        {(isEditing ? tempGameTags : editGameTags).map((option, index) => (
          <div
            key={index}
            className="w-fit rounded-xl p-1 pl-2 pr-2 h-8 bg-gray-100"
          >
            <div
              className={`${getColor() || "text-gray-800"} whitespace-nowrap`}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container w-full justify-end flex pr-3">
        {auth && !isEditing && (
          <button className="btn-edit" onClick={handleEditClick}>
            <FontAwesomeIcon icon={faEdit} className="text-white" />
          </button>
        )}
        {auth && isEditing && (
          <div className="btn-container flex flex-row gap-1 pt-2">
            <button
              className="btn-cancel btn-save h-9 flex rounded-xl hover:bg-gray-100 items-center justify-center text-white font-bold w-24"
              onClick={handleEditClick}
            >
              CANCEL
            </button>
            <button
              className="btn-save h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 items-center justify-center text-white font-bold w-24"
              onClick={handleSaveClick}
            >
              SAVE
            </button>
          </div>
        )}
      </div>
      <div className="space pb-5"></div>
    </div>
  );
};
export default Profile;
