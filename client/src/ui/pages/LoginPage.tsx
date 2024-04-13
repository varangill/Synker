import("../../App.css");
import Navigation from "../components/Navigation.tsx";

export default function LoginPage() {
  return (
    <div className="App flex flex-row  bg-gray-100">
      <Navigation />
      <h1 className="text-3xl font-bold underline text-red-600">Login</h1>
    </div>
  );
}
