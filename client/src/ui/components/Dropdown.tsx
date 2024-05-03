import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = (props: { dropdownList: string[] }) => {
  // let lengths = props.dropdownList.length;
  // return <div>{props.dropdownList}</div>;

  // Handles visibility of dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="dropdownSearchButton justify-between btn-default h-9 flex rounded-xl bg-gray-100 hover:bg-gray-300 w-full items-center justify-center max-w-52"
      >
        <div className="flex btn-text px-4 text-white h-8 font-bold items-center text-xl sm:text-base text-gray-400">
          SELECT ONE ...
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="object-contain h-2/4 w-5 text-white p-4"
        />
      </button>

      {isOpen && (
        <div className="dropdownContainer bg-purple-200 h-64">INSERT GAME</div>
      )}
    </div>
  );
};
export default Dropdown;
