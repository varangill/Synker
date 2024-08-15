import React from "react";
import { Lobby } from "../../../types/Lobby";
import LiveLobby from "./LiveLobby";
import Title from "../common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

interface LiveGameProps {
  lobbyList: Lobby[];
}

// TODO: functionality for filter and refresh buttons

const LiveGame: React.FC<LiveGameProps> = ({ lobbyList }) => {
  return (
    <div className="live-game-container rounded-2xl flex flex-col items-center bg-primary-200 w-full h-full text-white">
      <Title title="LIVE GAME" />
      <div className="h-1 bg-primary-100 w-full"></div>
      <div className="flex justify-between items-center m-2 w-full">
        <div className="flex w-full gap-3 ml-4">
          <button className="filter-button flex items-center mr-4">
            <FontAwesomeIcon icon={faFilter} />
            <div className="fas fa-filter mr-2" />
            FILTER
          </button>
          <button className="refresh-button flex items-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <div className="fas fa-sync-alt mr-2" />
            REFRESH
          </button>
        </div>
      </div>
      <div className="h-1 bg-primary-100 w-full"></div>
      <div className="overflow-y-scroll no-scrollbar flex-grow mb-8 w-full">
        {lobbyList.map((lobby) => (
          <LiveLobby key={lobby.id} lobby={lobby} />
        ))}
      </div>
    </div>
  );
};

export default LiveGame;
