import Dropdown from "./Dropdown";
const GameSelection = () => {
  // dropdownList will return the required list for the dropdown
  // SQL?
  const list = () => {
    return ["Valorant", "League of Legends"];
  };

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-4/5 md:w-4/5 lg:w-1/5 xl:w-1/5 min-w-72 h-52">
      <div className="game-selection-title flex text-white h-1/3 font-bold items-center text-2xl">
        <div>GAME SELECTION</div>
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="flex flex-col w-full justify-evenly max-w-52 h-full">
        <div className="dropdown-container h-8 z-10">
          <Dropdown dropdownList={list()}></Dropdown>
        </div>
        <button
          className={
            "btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
          }
        >
          <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center text-xl sm:text-base">
            FIND
          </div>
        </button>
      </div>
    </div>
  );
};
export default GameSelection;
