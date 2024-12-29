import { Lobby } from "../../../types/Lobby";

import SectionCard from "../common/SectionCard";
import LiveLobby from "./LiveLobby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

interface LiveGameProps {
  lobbyList: Lobby[];
}

// TODO: functionality for filter and refresh buttons

const LiveGame = ({ lobbyList }: LiveGameProps) => {
  const actionButtons = (
    <div className="w-full">
      <span className="line" />
      <div className="flex justify-between items-center m-2 w-full">
        <div className="flex w-full gap-3 ml-4">
          <button className="filter-button flex items-center mr-4 icon-color">
            <FontAwesomeIcon icon={faFilter} />
            <div className="fas fa-filter mr-2" />
            FILTER
          </button>
          <button className="refresh-button flex items-center icon-color">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <div className="fas fa-sync-alt mr-2" />
            REFRESH
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SectionCard title="LIVE GAME" titleContent={actionButtons}>
      <div className="overflow-y-scroll no-scrollbar flex-grow mb-8 w-full">
        {lobbyList.map((lobby) => (
          <LiveLobby key={lobby.id} lobby={lobby} />
        ))}
      </div>
    </SectionCard>
  );
};

export default LiveGame;
