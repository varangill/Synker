import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";
import background from "../assets/images/background.png";
import { getData } from "../../api/index.ts";
import { useEffect } from "react";
import { User } from "../../models/User.tsx";

export default function ProfilePage() {
  // Correctly initialized states with default values
  const testUser = new User(
    "1",
    ["Valorant", "League of Legends", "Apex", "Lethal Company"],
    "Rensuo",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dapibus lacus.",
    background,
    "Platinum",
    true,
    ["3zPz", "Novatic"],
    true,
    1,
    7,
    3,
    2
  );

  const auth = true; // Default to true if needed immediately

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
          profilePicture={testUser.getProfilePicture()}
          username={testUser.getUsername()}
          description={testUser.getDescription()}
          gameTags={testUser.getGameTags()}
          membership={testUser.getMembership()}
          auth={auth}
        />
      </div>
    </div>
  );
}
