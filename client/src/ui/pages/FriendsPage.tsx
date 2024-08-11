import("../../App.css");
import Navigation from "../components/common/Navigation";
import FriendsList from "../components/friends/FriendsList";
import ChatWindow from "../components/friends/ChatWindow";
import testFriendList from "../../mockData/testFriendList.json";
import windowResize from "../utils/WindowResize";
import { useEffect, useState } from "react";

// TODO: Get data from the back-end
const parsedFriendList = testFriendList.map((friend) => ({
  ...friend,
  lastMessageSent: new Date(friend.lastMessageSent),
}));

export default function FriendsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="friends-screen-container flex flex-row w-full h-full flex-wrap overflow-x-hidden">
        <div className={`w-full h-full  ${isMobile ? "mt-20" : "p-10"}`}>
          <div className="flex flex-row w-full h-full">
            <FriendsList friend={parsedFriendList} />
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
    </div>
  );
}
