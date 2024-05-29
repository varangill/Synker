import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import GameSelection from "../components/GameSelection.tsx";
import LiveGame from "../components/LiveGame.tsx";
import testLobbies from "../../test/testLobbies.tsx";

export default function LivePage() {
  // TODO: Get a list of lobbies from the database
  const testLobbyList = testLobbies;

  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="live-game-screen-container flex w-full h-full flex-wrap overflow-x-hidden p-10 gap-8">
        <div className="game-selection-container xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full">
          <GameSelection />
        </div>
        <div className="live-game-container flex-grow h-full">
          <LiveGame lobbyList={testLobbyList} />
        </div>
      </div>
    </div>
  );
}
