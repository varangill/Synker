import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  dropdownList: string[]; // All possible options
  selectedList: string[]; // Previously selected options
  type: "single" | "multiple"; // Mode of dropdown
  onSelectionChange: (values: string[]) => void; // Update to handle multiple selections
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownList,
  selectedList,
  type,
  onSelectionChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(selectedList); // Change to array

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: string) => {
    if (type === "multiple") {
      const currentIndex = selected.indexOf(value);
      const newSelected = [...selected];

      // Toggle selection
      if (currentIndex === -1) {
        newSelected.push(value); // Add selection
      } else {
        newSelected.splice(currentIndex, 1); // Remove selection
      }

      setSelected(newSelected);
      onSelectionChange(newSelected);
    } else {
      setSelected([value]); // For single select, always replace
      onSelectionChange([value]);
      toggleDropdown();
    }
  };

  // Keep dropdown list sorted
  dropdownList.sort();

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="dropdownSearchButton justify-between btn-default h-9 flex rounded-xl bg-gray-100 hover:bg-gray-300 w-full items-center justify-center w-full"
      >
        <div className="btn-text flex whitespace-nowrap overflow-hidden text-ellipsis w-11/12 px-4 text-white h-8 font-bold items-center text-xl sm:text-base">
          {selected.join(", ") || placeholder} {/* Show all selected items */}
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="object-contain h-2/4 w-1/12 p-4 text-white"
        />
      </button>

      {isOpen && (
        <div className="dropdownContainer bg-gray-200 border-solid border-gray-100 border-2 rounded-xl h-fill max-h-64">
          <div className="max-h-64 overflow-auto">
            {dropdownList.map((option, index) => (
              <div
                key={index}
                className={`dropdownOption text-white hover:bg-purple-200 p-2 cursor-pointer ${
                  selected.includes(option) ? "bg-purple-200" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {type == "multiple" && (
            <button
              className="btn-default h-9 flex bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
              onClick={toggleDropdown}
            >
              <div className="find-button z-0 flex btn-text text-white h-8 font-bold items-center text-xl sm:text-base">
                DONE
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
