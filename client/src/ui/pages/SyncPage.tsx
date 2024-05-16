import("../../App.css");
import Navigation from "../components/Navigation.tsx";

export default function SyncPage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="lsync-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10"></div>
    </div>
  );
}
