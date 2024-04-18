import("../../App.css");
import Navigation from "../components/Navigation.tsx";

export default function HomePage() {
  return (
    <div className="App flex flex-row bg-gray-100 h-screen">
      <Navigation />
      <div className="home-screen-container w-fill h-fill"></div>
    </div>
  );
}
