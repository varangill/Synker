import { useState } from "react";
import Dropdown from "../common/Dropdown";

const GameSelection = () => {
  const [selectedOption, setselectedOption] = useState<(string | number)[]>([]);

  const handleSelectionChange = (selectedValues: (string | number)[]) => {
    setselectedOption(selectedValues);
  };

  // TODO: remove default options, replace with complete game list
  const list = [
    "Valorant",
    "League of Legends",
    "Clash of Clans",
    "Lethal Company",
    "Apex",
    "Fortnite",
  ];

  const handleFindClick = () => {
    // TODO: query back-end for results of live lobby to display on LivePage
    console.log("Finding lobbies for:", selectedOption.join(", "));
  };

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-gray-200 w-full h-fit">
      <div className="game-selection-title flex text-white font-bold items-center p-2 xl:text-2xl lg:text-2xl md:text-base sm:text-xl">
        GAME SELECTION
      </div>
      <div className="title-line w-full bg-gray-100 h-1"></div>
      <div className="flex flex-col justify-evenly w-4/5 h-full">
        <div className="dropdown-container h-8 z-10 mt-6 mb-3">
          <Dropdown
            dropdownList={list}
            selectedList={selectedOption}
            type="single"
            onSelectionChange={handleSelectionChange}
            placeholder="SELECT GAME ..."
          />
        </div>
        <button
          className="btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center mt-3 mb-6"
          onClick={handleFindClick}
        >
          <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center xl:text-xl lg:text-xl md:text-base sm:text-base">
            FIND
          </div>
        </button>
      </div>
    </div>
  );
};

export default GameSelection;
