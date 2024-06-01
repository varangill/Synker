import "../../App.css";
import Navigation from "../components/Navigation.tsx";
import GameSelection from "../components/GameSelection.tsx";
import LiveGame from "../components/LiveGame.tsx";
import CreateLobby from "../components/LobbyCreation.tsx";
import testLobbies from "../../test/testLobbies.tsx";

export default function LivePage() {
  // TODO: Get a list of lobbies from the database
  const testLobbyList = testLobbies;

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="live-game-screen-container flex w-full flex-wrap overflow-x-hidden p-10 gap-10 h-full justify-center">
        <div className="xl:w-1/5 lg:w-1/3 md:w-1/3 sm:w-full flex flex-col">
          <div className="game-selection-container w-full h-1/4 max-h-52 mb-5">
            <GameSelection />
          </div>
          <div className="lobby-creation-container w-full h-[650px] flex-grow">
            <CreateLobby />
          </div>
        </div>

        <div className="live-game-container flex-grow h-full">
          <LiveGame lobbyList={testLobbyList} />
        </div>
      </div>
    </div>
  );
}
