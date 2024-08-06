import("../../App.css");
import Navigation from "../components/common/Navigation";

export default function FriendsPage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="friends-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10"></div>
    </div>
  );
}
