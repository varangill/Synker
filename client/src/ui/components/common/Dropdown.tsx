import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type DropdownOption = string | number;

interface DropdownProps {
  dropdownList: DropdownOption[]; // All possible options
  selectedList: DropdownOption[]; // Previously selected options
  type: "single" | "multiple"; // Mode of dropdown
  onSelectionChange: (values: DropdownOption[]) => void; // Update to handle multiple selections
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
  const [selected, setSelected] = useState<DropdownOption[]>(selectedList);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(selectedList);
  }, [selectedList]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value: DropdownOption) => {
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

  const handleClickOutside = (event: MouseEvent) => {
    const isUserClickOutside =
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node);

    if (isUserClickOutside) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Keep dropdown list sorted
  dropdownList.sort();

  return (
    <div ref={dropdownRef} className="relative z-9">
      <button
        onClick={toggleDropdown}
        className="dropdownSearchButton btn-default h-9 flex rounded-xl bg-primary-100 hover:bg-primary-300 items-center justify-center w-full"
      >
        <div className="btn-text flex whitespace-nowrap overflow-hidden text-ellipsis w-11/12 px-4 text-white h-8 font-bold items-center xl:text-md lg:text-md md:text-base sm:text-base">
          {selected.length > 0 ? selected.join(", ") : placeholder}
          {/* Show all selected items */}
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="object-contain h-2/4 w-1/12 p-4 text-white"
        />
      </button>

      {isOpen && (
        <div className="dropdownContainer bg-primary-200 border-solid border-primary-100 border-2 rounded-xl absolute w-full z-30">
          <div className="max-h-48 overflow-auto no-scrollbar">
            {dropdownList.map((option, index) => (
              <div
                key={index}
                className={`dropdownOption text-white hover:bg-accent-200 p-2 cursor-pointer ${
                  selected.includes(option) ? "bg-accent-200" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.toString()}
              </div>
            ))}
          </div>
          {type === "multiple" && (
            <button
              className="btn-default h-9 flex bg-accent-100 hover:bg-accent-200 w-full items-center justify-center"
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
