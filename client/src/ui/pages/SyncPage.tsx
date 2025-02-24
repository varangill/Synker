import { useEffect, useState } from "react";

import "../../App.css";

import Navigation from "../components/common/Navigation";
import ProfileCard from "../components/sync/ProfileCard.tsx";
import Button from "../components/common/Button.tsx";

import testUserList from "../../mockData/testUserList.json";
import sync from "../assets/images/sync-background.png";

import windowResize from "../utils/WindowResize.tsx";

export default function SyncPage() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % testUserList.length);
  };

  const displayedUsers = testUserList.slice(startIndex, startIndex + 3);

  return (
    <div className="App flex flex-row bg-primary-100 h-screen">
      <Navigation />
      <div className="sync-screen-container flex w-full flex-wrap overflow-x-hidden p-10 gap-10 h-full justify-center no-scrollbar">
        <div
          className={`sync-container relative flex flex-col bg-primary-200 w-full h-full rounded-2xl items-center justify-center ${
            isMobile ? "m-20" : ""
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${sync})`,
              filter: "primaryscale(10%) saturate(20%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
            }}
          ></div>
          <div className="relative z-10 text-white text-4xl font-bold mt-8 mb-2">
            FIND PLAYERS
          </div>
          <div className="relative z-10 flex flex-wrap gap-16 overflow-y-scroll no-scrollbar p-16 items-center justify-center">
            {displayedUsers.map((user, index) => (
              <div key={index}>
                <ProfileCard
                  gameTags={user.gameTags}
                  username={user.username}
                  description={user.description}
                  profilePicture={user.profilePicture}
                  membership={user.membership}
                />
              </div>
            ))}
          </div>
          <Button
            text="NEXT"
            className="z-10 max-w-64"
            onClick={handleNextClick}
            variant="fill"
          />
        </div>
      </div>
    </div>
  );
}
