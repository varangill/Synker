import React from "react";

import LobbyTag from "./LobbyTag";

import { Lobby } from "../../../types/Lobby";

import { showSuccessToast } from "../../utils/ShowToast";

interface LiveLobbyProps {
  lobby: Lobby;
}

const LiveLobby: React.FC<LiveLobbyProps> = ({ lobby }) => {
  function handleJoinClick() {
    showSuccessToast(`Joining ${lobby.title}.`);
  }

  return (
    <div className="lf-stack-container bg-primary-200 w-full h-fit flex flex-col pt-5 pl-5 pr-5">
      <div className="stack-text text-white font-bold text-base">
        {lobby.title}
      </div>
      <div className="flex flex-row text-white">
        <div className="pfp-images flex flex-wrap mt-2 object-contain gap-3 w-2/3">
          {lobby.players.map((player) => (
            <div key={player.id}>
              <img className="pfp-1 h-20 w-20" src={player.profilePicture} />
              <div>{player.username}</div>
            </div>
          ))}
        </div>
        <div>{lobby.description}</div>
      </div>
      <div className="bottom-container flex flex-row h-full">
        <div className="box-of-tags w-2/3 h-full flex flex-wrap mt-3">
          {lobby.lobbyTags.map((tag) => (
            <div key={tag} className="mr-3">
              <LobbyTag tagName={tag} />
            </div>
          ))}
        </div>
        <div className="player-count-join h-full flex flex-col w-1/3">
          <div className="player-count text-white font-bold text-base text-center mb-2">
            {lobby.players.length}/{lobby.maxPlayers} PLAYERS
          </div>
          <div className="btn-container text-center h-8 w-full items-center flex justify-center mb-2">
            <button
              onClick={handleJoinClick}
              className="btn-default h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 w-full items-center justify-center"
            >
              <div className="btn-txt text-white font-bold text-base">JOIN</div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-primary-100 mt-3"></div>
    </div>
  );
};

export default LiveLobby;
