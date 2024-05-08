import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import Profile from "../components/Profile.tsx";

export default function ProfilePage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="profile-screen-container p-10 w-full h-full">
        <Profile></Profile>
      </div>
    </div>
  );
}
