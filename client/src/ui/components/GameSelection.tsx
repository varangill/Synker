import Dropdown from "./Dropdown";
const GameSelection = () => {
  return (
    <div className="game-selection-container rounded-2xl flex flex-col justify-center items-center bg-gray-200 w-4/5 md:w-4/5 lg:w-1/5 xl:w-1/5 min-w-72 h-1/4 h-52">
      <div>Game Selection</div>
      <Dropdown></Dropdown>
      <button
        className={
          "btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center max-w-52"
        }
      >
        <div className="btn-txt text-white font-bold text-2xl">FIND</div>
      </button>
    </div>
  );
};
export default GameSelection;
