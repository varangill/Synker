import { useEffect, useState } from "react";
import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import testUserList from "../../test/testUserList.tsx";
import sync from "../assets/images/sync-background.png";

export default function SyncPage() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % testUserList.length);
  };

  const displayedUsers = testUserList.slice(startIndex, startIndex + 3);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="sync-screen-container flex w-full flex-wrap overflow-x-hidden p-10 gap-10 h-full justify-center no-scrollbar">
        <div
          className={`sync-container relative flex flex-col bg-gray-200 w-full h-full rounded-2xl items-center justify-center ${
            isMobile ? "m-20" : ""
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${sync})`,
              filter: "grayscale(10%) saturate(20%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
            }}
          ></div>
          <div className="relative z-10 text-white text-4xl font-bold mt-10">
            FIND PLAYERS
          </div>
          <div className="relative z-10 flex flex-wrap gap-16 overflow-y-scroll no-scrollbar p-20 items-center justify-center">
            {displayedUsers.map((user, index) => (
              <div key={index}>
                <ProfileCard
                  gameTags={user.getGameTags()}
                  username={user.getUsername()}
                  description={user.getDescription()}
                  profilePicture={user.getProfilePicture()}
                  membership={user.getMembership()}
                />
              </div>
            ))}
          </div>
          <button
            className="relative z-10 btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center mt-3 max-w-64 mb-8 mr-2 ml-2"
            onClick={handleNextClick}
          >
            <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center xl:text-xl lg:text-xl md:text-base sm:text-base">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
