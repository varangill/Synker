import("../../App.css");
import Navigation from "../components/common/Navigation";
import FriendsList from "../components/friends/FriendsList";
import ChatWindow from "../components/friends/ChatWindow";

export default function FriendsPage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="friends-screen-container flex flex-row w-full h-full flex-wrap overflow-x-hidden p-10">
        <div className="flex flex-row w-full">
          <FriendsList friend={[]} />
          <ChatWindow
            chat={{
              id: "",
              members: [],
              active: false,
              messages: [],
            }}
          />
        </div>
      </div>
    </div>
  );
}
