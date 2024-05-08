import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
// import ThemeContext from "./ThemeContext";

const Profile = () => {
  // const authenticated = useContext(Authenticated)
  // Needs to pass a profile through
  let authenticated = true;

  // SQL functions
  function profilePicture() {
    return logo;
  }

  function username() {
    return "Rensuo";
  }

  function description() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.";
  }

  function gameTags() {
    // SQL grabs game tags
    let gameTagList = ["Valorant", "League of Legends"];
    return gameTagList.map((game, index) => (
      <div
        key={index}
        className="dropdownOption text-white hover:bg-purple-200 p-2 cursor-pointer"
        // onClick={}
      >
        {game}
      </div>
    ));
  }

  function membership() {
    return "Platinum";
  }

  return (
    <div className="profile-container xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full min-w-64 h-5/6 bg-gray-200 rounded-2xl flex flex-col">
      <img
        className="profile-pic w-full aspect-w-1 aspect-h-1 object-scale-down"
        src={profilePicture()}
      ></img>
      <div>{username()}</div>
      <div className="line bg-gray-100 w-full h-1"></div>
      <div>{description()}</div>
      <div className="tag-container">{gameTags()}</div>
      <button>Add Games</button>
      <div>{membership()}</div>
    </div>
  );
};
export default Profile;
