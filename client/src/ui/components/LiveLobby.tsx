import React from "react";
import LobbyTag from "../components/LobbyTag";
import { ILobby } from "../../types/Lobby";

interface LiveLobbyProps {
  lobby: ILobby;
}

const LiveLobby: React.FC<LiveLobbyProps> = ({ lobby }) => {
  return (
    <div className="lf-stack-container bg-gray-200 w-full h-fit flex flex-col pt-5 pl-5 pr-5">
      <div className="stack-text text-white font-bold text-base">
        {lobby.title}
      </div>
      <div className="flex flex-row">
        <div className="pfp-images flex flex-wrap mt-2 object-contain gap-3 w-2/3">
          {lobby.players.map((player) => (
            <div key={player.id}>
              <img
                className="pfp-1 max-h-20 max-w-20"
                src={player.profilePicture}
                alt={`${player.username}'s profile`}
              />
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
            <button className="btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center">
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
