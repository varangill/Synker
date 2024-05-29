import React from "react";
import { Lobby } from "../../models/Lobby";
import LiveLobby from "../components/LiveLobby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

interface LiveGameProps {
  lobbyList: Lobby[];
}

const LiveGame: React.FC<LiveGameProps> = ({ lobbyList }) => {
  return (
    <div className="live-game-container w-full bg-gray-200 text-white rounded-2xl h-full flex flex-col">
      <div className="text-2xl font-bold w-full text-center items-center p-2">
        LIVE GAME
      </div>
      <div className="h-1 bg-gray-100 w-full"></div>
      <div className="flex justify-between items-center m-2">
        <div className="flex items-center gap-3 ml-4">
          <button className="filter-button flex items-center mr-4">
            <FontAwesomeIcon icon={faFilter} />
            <i className="fas fa-filter mr-2"></i>FILTER
          </button>
          <button className="refresh-button flex items-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <i className="fas fa-sync-alt mr-2"></i>REFRESH
          </button>
        </div>
      </div>
      <div className="h-1 bg-gray-100 w-full"></div>
      <div className="overflow-y-scroll no-scrollbar flex-grow mb-8">
        {lobbyList.map((lobby) => (
          <LiveLobby key={lobby.getId()} lobby={lobby} />
        ))}
      </div>
    </div>
  );
};

export default LiveGame;
