import React from "react";
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

  return (
    <div className="profile-container xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full min-w-64 bg-gray-200 rounded-2xl flex flex-col h-fit max-h-128">
      <img
        className="profile-pic w-full aspect-w-1 aspect-h-1 object-scale-down"
        src={profilePicture}
      ></img>
      <div>{username}</div>
      <div className="line bg-gray-100 w-full h-1"></div>
      {auth && <button>Edit</button>}
      <div>{description}</div>
      <div className="tag-container">
        {" "}
        {gameTags.map((option, index) => (
          <div
            key={index}
            className="dropdownOption text-white hover:bg-purple-200 p-2 cursor-pointer"
            // onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {auth && <button>Add Games</button>}
      <div>{membership}</div>
    </div>
  );
};
export default Profile;
