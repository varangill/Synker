import { useState } from "react";

import Dropdown from "../common/Dropdown";
import SectionCard from "../common/SectionCard";
import Button from "../common/Button";

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
      <div className="flex flex-col flex-grow items-center justify-evenly w-4/5 mx-auto">
        <div className="dropdown-container z-10 w-full">
          <Dropdown
            dropdownList={list}
            selectedList={selectedOption}
            type="single"
            onSelectionChange={handleSelectionChange}
            placeholder="SELECT GAME ..."
          />
        </div>
        <Button
          text="FIND"
          className=""
          onClick={handleFindClick}
          variant="fill"
        />
      </div>
    </SectionCard>
  );
};

export default GameSelection;
