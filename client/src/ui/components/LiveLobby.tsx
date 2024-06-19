import React from "react";
import LobbyTag from "../components/LobbyTag";
import { Lobby } from "../../models/Lobby";

interface LiveLobbyProps {
  lobby: Lobby;
}

const LiveLobby: React.FC<LiveLobbyProps> = ({ lobby }) => {
  return (
    <div className="lf-stack-container bg-gray-200 w-full h-fit flex flex-col pt-5 pl-5 pr-5">
      <div className="stack-text text-white font-bold text-base">
        {lobby.getTitle()}
      </div>
      <div className="flex flex-row">
        <div className="pfp-images flex flex-wrap mt-2 object-contain gap-3 w-2/3">
          {lobby.getPlayers().map((player, index) => (
            <div>
              <img
                key={index}
                className="pfp-1 max-h-20 max-w-20"
                src={player.getProfilePicture()}
                alt={`${player.getUsername()}'s profile`}
              />
              <div>{player.getUsername()}</div>
            </div>
          ))}
        </div>
        <div>{lobby.getDescription()}</div>
      </div>
      <div className="bottom-container flex flex-row h-full">
        <div className="box-of-tags w-2/3 h-full flex flex-wrap mt-3">
          {lobby.getLobbyTags().map((tag, index) => (
            <div className="mr-3">
              <LobbyTag key={index} tagName={tag}></LobbyTag>
            </div>
          ))}
        </div>
        <div className="player-count-join h-full flex flex-col w-1/3">
          <div className="player-count text-white font-bold text-base text-center mb-2">
            {lobby.getPlayers().length}/{lobby.getMaxPlayers()} PLAYERS
          </div>
          <div className="btn-container text-center h-8 w-full items-center flex justify-center mb-2">
            <button
              className={
                "btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
              }
            >
              <div className="btn-txt text-white font-bold text-base">JOIN</div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-100 mt-3"></div>
    </div>
  );
};

export default LiveLobby;
