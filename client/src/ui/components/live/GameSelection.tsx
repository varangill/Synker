import { useState } from "react";
import Dropdown from "../common/Dropdown";
import Title from "../common/Title";
import { showErrorToast, showSuccessToast } from "../../utils/ShowToast";

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
    if (selectedOption.length == 0) {
      showErrorToast("Select a game.");
      return;
    } else {
      showSuccessToast(`Finding lobbies for ${selectedOption}.`);
      console.log("Finding lobbies for:", selectedOption.join(", "));
    }
  };

  return (
    <div className="game-selection-container rounded-2xl flex flex-col items-center bg-primary-200 w-full h-fit">
      <Title title="GAME SELECTION" />
      <div className="title-line w-full bg-primary-100 h-1"></div>
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
          className="btn-default h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 w-full items-center justify-center mt-3 mb-6"
          onClick={handleFindClick}
        >
          <div className="btn-text z-0">FIND</div>
        </button>
      </div>
    </div>
  );
};

export default GameSelection;
