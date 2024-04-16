import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import GameSelection from "../components/GameSelection.tsx";

export default function LivePage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="live-game-screen-container w-full h-full">
        <GameSelection></GameSelection>
      </div>
    </div>
  );
}
