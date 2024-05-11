import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";
import logo from "../assets/images/logo.png";

export default function ProfilePage() {
  // SQL functions
  function auth() {
    return true;
  }

  function profilePicture() {
    return logo;
  }

  function username() {
    return "Rensuo";
  }

  function description() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.";
  }

  function membership() {
    return "Platinum";
  }

  function gameTags() {
    // SQL grabs game tags
    const gameTagList = ["Valorant", "League of Legends", "Apex"];
    return gameTagList;
  }

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="profile-screen-container p-10 w-full h-full content-center">
        <Profile
          profilePicture={profilePicture()}
          username={username()}
          description={description()}
          gameTags={gameTags()}
          membership={membership()}
          auth={auth()}
        ></Profile>
      </div>
    </div>
  );
}
