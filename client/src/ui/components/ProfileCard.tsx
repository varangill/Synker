import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
  const handleMatchClick = (username: string) => {
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
      className="profile-container relative w-80 bg-gray-100 rounded-2xl flex flex-col h-[500px] p-4 cursor-pointer"
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
              <div className="membership-level text-white flex justify-center items-center pb-2 gap-1 ml-32">
                <FontAwesomeIcon icon={faStar} />
                Platinum Member
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="desc text-white mt-16 text-lg p-3 w-full overflow-hidden text-ellipsis break-words">
        {description}
      </div>
      <div className="invis-box flex-grow"></div>
      <div className="tag-container p-1 flex flex-wrap gap-2">
        {gameTags.map((option, index) => (
          <div key={index} className="w-fit rounded-xl m-1 h-8 bg-gray-10">
            <div
              className={`${
                getColor() || "text-gray-800"
              } whitespace-nowrap rounded-xl border-2 p-1`}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container w-full justify-end flex p-5">
        <button
          className="btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center mt-3"
          onClick={(e) => {
            e.stopPropagation();
            handleMatchClick(username);
          }}
        >
          <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center xl:text-xl lg:text-xl md:text-base sm:text-base">
            MATCH
          </div>
        </button>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default ProfileCard;
