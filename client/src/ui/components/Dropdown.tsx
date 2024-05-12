import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  dropdownList: string[];
  onSelectionChange: (value: string) => void;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownList,
  onSelectionChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelectionChange(value); // Changes the value in the parent component
    toggleDropdown(); // Close dropdown after selection
  };

  // Sorting the dropdown
  dropdownList.sort();

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="dropdownSearchButton justify-between btn-default h-9 flex rounded-xl bg-gray-100 hover:bg-gray-300 w-full items-center justify-center w-full"
      >
        <div className="btn-text flex whitespace-nowrap overflow-hidden text-ellipsis w-11/12 px-4 text-white h-8 font-bold items-center text-xl sm:text-base">
          {selected}
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="object-contain h-2/4 w-1/12 p-4 text-white"
        />
      </button>

      {isOpen && (
        <div className="dropdownContainer bg-gray-200 border-solid border-gray-100 border-2 rounded-xl h-fill max-h-64 overflow-auto">
          {dropdownList.map((option, index) => (
            <div
              key={index}
              className="dropdownOption text-white hover:bg-purple-200 p-2 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
