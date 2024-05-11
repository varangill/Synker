import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import ThemeContext from "./ThemeContext";

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
  const colorClasses = [
    "text-red",
    "text-blue",
    "text-green",
    "text-yellow",
    "text-pink",
    "text-orange",
  ];

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  }

  gameTags.sort();

  return (
    <div className="profile-container xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full min-w-64 bg-gray-200 rounded-2xl flex flex-col h-fit max-h-128">
      <img
        className="profile-pic w-full aspect-w-1 aspect-h-1 object-scale-down"
        src={profilePicture}
      ></img>
      <div className="username w-full text-center text-white text-2xl pb-2 pt-2">
        {username}
      </div>
      <div className="line bg-gray-100 w-full h-1"></div>
      <div className="desc text-white text-lg pl-3 pr-5 pt-2 w-full">
        {description}
      </div>
      <div className="btn-container w-full justify-end flex pr-3">
        {auth && (
          <button className="btn-edit">
            <FontAwesomeIcon icon={faEdit} className="text-white" />
          </button>
        )}
      </div>
      <div className="tag-container p-3 flex flex-wrap gap-2">
        {gameTags.map((option, index) => (
          <div
            key={index}
            className="w-fit rounded-xl p-1 pl-2 pr-2 h-8 bg-gray-100"
          >
            <div
              className={`${
                getRandomColor() || "text-gray-800"
              } whitespace-nowrap`}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      {auth && <button>Add Games</button>}
      <div>{membership}</div>
    </div>
  );
};
export default Profile;
