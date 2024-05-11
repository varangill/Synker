import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import GameSelection from "../components/GameSelection.tsx";
import LiveLobby from "../components/LiveLobby.tsx";

export default function LivePage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />

      <div className="live-game-screen-container flex flex-row w-full h-full flex-wrap">
        <GameSelection></GameSelection>
        <LiveLobby></LiveLobby>
      </div>
    </div>
  );
}
