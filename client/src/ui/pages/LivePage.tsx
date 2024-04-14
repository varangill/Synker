import("../../App.css");
import Navigation from "../components/Navigation.tsx";
import LiveLobby from "../components/LiveLobby.tsx";

export default function LivePage() {
  return (
    <div className="App flex flex-row bg-gray-100">
      <Navigation />
      <LiveLobby />
      <h1 className="text-3xl font-bold underline text-red-600">Live</h1>
    </div>
  );
}
