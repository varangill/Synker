import("../../App.css");
import Navigation from "../components/Navigation.tsx";

export default function SyncPage() {
  return (
    <div className="App flex flex-row bg-gray-100">
      <Navigation /> 
      <div className= "btn-container text-3xl text-center h-8 w-48 items-center flex justify-center ">
        <button
          className={"btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"}>
            <div className= "btn-txt text-white font-bold text-xl ">JOIN
            </div>
         </button>
        </div>
      <h1 className="text-3xl font-bold underline text-red-600">Sync</h1>
    </div>
  );
}
