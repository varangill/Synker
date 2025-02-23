import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { showSuccessToast } from "../../utils/ShowToast";
import Button from "../common/Button";

interface ProfileProps {
  gameTags: string[];
  username: string;
  description: string;
  profilePicture: string;
  membership: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  profilePicture,
  username,
  description,
  gameTags,
  membership,
}) => {
  const handleMatchClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    username: string
  ) => {
    e.stopPropagation();
    showSuccessToast(`Syncing with ${username}.`);
    console.log("Match button clicked for: ", username);
  };

  const handleProfileClick = (username: string) => {
    console.log("Profile button clicked for: ", username);
  };

  const colorClasses = [
    "text-red border-red",
    "text-blue border-blue",
    "text-green border-green",
    "text-yellow border-yellow",
    "text-pink border-pink",
    "text-orange border-orange",
  ];

  function getColor() {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  }

  return (
    <div
      className="profile-container relative w-80 bg-primary-100 rounded-2xl flex flex-col h-[550px] p-4 cursor-pointer border-2 hover:border-accent-100"
      onClick={() => handleProfileClick(username)}
    >
      <div className="flex items-center">
        <img
          className="profile-pic w-40 h-40 object-cover absolute -top-8 -left-4"
          src={profilePicture}
          alt="Profile"
        />
        <div className="flex-grow text-center">
          <div className="username text-white text-2xl ml-32">{username}</div>
          <div className="h-8">
            {membership == "Platinum" && (
              <div className="membership-level text-white flex justify-center items-center gap-1 ml-32 pl-1">
                <FontAwesomeIcon icon={faStar} />
                Platinum Member
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="desc text-white text-base mt-12 p-3 w-full overflow-hidden text-ellipsis break-words overflow-y-hidden">
        {description}
      </div>
      <div className="invis-box flex-grow"></div>
      <div className="tag-container p-1 flex flex-wrap gap-2 mt-2">
        {gameTags.map((option, index) => (
          <div key={index} className="w-fit rounded-xl m-1 h-8 bg-primary-10">
            <div
              className={`${
                getColor() || "text-primary-800"
              } whitespace-nowrap text-sm rounded-xl border-2 p-1`}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container w-full justify-end flex p-5">
        <Button
          className="btn-default h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 w-full items-center justify-center mt-3"
          label="MATCH"
          onClick={(e) => {
            handleMatchClick(e, username);
          }}
          variant="fill"
        />
      </div>
      <div className="space"></div>
    </div>
  );
};

export default ProfileCard;
