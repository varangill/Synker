import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";
import background from "../assets/images/background.png";
import { getData } from "../../api/index.ts";
import { useEffect } from "react";

export default function ProfilePage() {
  // Correctly initialized states with default values
  const auth = true; // Default to true if needed immediately
  const profilePicture = background;
  const username = "Rensuo";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.";
  const membership = true;
  const gameTags = ["Valorant", "League of Legends", "Apex", "Lethal Company"];

  useEffect(() => {
    getData(`user`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="profile-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10">
        <Profile
          profilePicture={profilePicture}
          username={username}
          description={description}
          gameTags={gameTags}
          membership={membership}
          auth={auth}
        />
      </div>
    </div>
  );
}
