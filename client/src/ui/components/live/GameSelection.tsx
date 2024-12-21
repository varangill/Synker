import { useState } from "react";
import Dropdown from "../common/Dropdown";
import SectionCard from "../common/SectionCard";
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
    <SectionCard title="GAME SELECTION">
      <div className="flex flex-col flex-grow items-center justify-around w-4/5 mx-auto">
        <div className="dropdown-container z-10 w-full">
          <Dropdown
            dropdownList={list}
            selectedList={selectedOption}
            type="single"
            onSelectionChange={handleSelectionChange}
            placeholder="SELECT GAME ..."
          />
        </div>
        <button
          className="btn-default h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 w-full items-center justify-center mb-5"
          onClick={handleFindClick}
        >
          <div className="btn-text z-0">FIND</div>
        </button>
      </div>
    </SectionCard>
  );
};

export default GameSelection;
