import { Lobby } from "../../../types/Lobby";

import SectionCard from "../common/SectionCard";
import Button from "../common/Button";
import LiveLobby from "./LiveLobby";

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
          <Button
            text="FILTER"
            textStyle="font-light"
            textSize="small"
            variant="blank"
            icon={faFilter}
          />
          <Button
            text="REFRESH"
            textStyle="font-light"
            textSize="small"
            variant="blank"
            icon={faArrowsRotate}
          />
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
