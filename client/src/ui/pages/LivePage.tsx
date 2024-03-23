import("../../App.css");
import Navigation from "../components/Navigation.tsx";

export default function LivePage() {
  return (
    <div className="App">
      <Navigation />
      <h1 className="text-3xl font-bold underline text-red-600">Live</h1>
    </div>
  );
}
