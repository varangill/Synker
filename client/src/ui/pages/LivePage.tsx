import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import GameSelection from "../components/GameSelection.tsx";
import LiveGame from "../components/LiveGame.tsx";
import CreateLobby from "../components/CreateLobby.tsx";
import testLobbies from "../../mockData/testLobbies.json";
import { useEffect, useState } from "react";
import windowResize from "../utils/WindowResize.tsx";
import { Lobby } from "../../types/Lobby.tsx";

// TODO: Get a list of lobbies from the database
const lobbyList: Lobby[] = testLobbies.map((lobby) => ({
  ...lobby,
  createdDate: new Date(lobby.createdDate),
  startDate: new Date(lobby.startDate),
}));

export default function LivePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="live-game-screen-container flex w-full flex-wrap overflow-x-hidden p-10 gap-10 h-full justify-center">
        <div
          className={`xl:w-1/5 lg:w-1/3 md:w-full sm:w-full flex flex-col ${
            isMobile ? "mt-20" : ""
          }`}
        >
          <div className="game-selection-container w-full h-1/4 max-h-52 mb-5">
            <GameSelection />
          </div>
          <div className="lobby-creation-container w-full h-[650px] flex-grow">
            <CreateLobby />
          </div>
        </div>

        <div className="live-game-container flex-grow h-full">
          <LiveGame lobbyList={lobbyList} />
        </div>
      </div>
    </div>
  );
}
