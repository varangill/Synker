import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

type DropdownOption = string | number;

interface DropdownProps {
  dropdownList: DropdownOption[];
  selectedList: DropdownOption[];
  type: "single" | "multiple";
  onSelectionChange: (values: DropdownOption[]) => void;
  placeholder: string;
}

const Dropdown = ({
  dropdownList,
  selectedList,
  type,
  onSelectionChange,
  placeholder,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption[]>(selectedList);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(selectedList);
  }, [selectedList]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: DropdownOption) => {
    if (type === "multiple") {
      const currentIndex = selected.indexOf(value);
      const newSelected = [...selected];

      if (currentIndex === -1) {
        newSelected.push(value);
      } else {
        newSelected.splice(currentIndex, 1);
      }

      setSelected(newSelected);
      onSelectionChange(newSelected);
    } else {
      setSelected([value]);
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

  dropdownList.sort();

  return (
    <div ref={dropdownRef} className="relative z-9 h-9">
      <Button
        onClick={toggleDropdown}
        variant="dropdown"
        text={selected.length > 0 ? selected.join(", ") : placeholder}
        textSize="small"
        textStyle="whitespace-nowrap overflow-hidden text-ellipsis w-11/12 px-4 text-start"
      >
        <FontAwesomeIcon icon={faAngleDown} className="object-contain pr-4" />
      </Button>

      {isOpen && (
        <div className="dropdownContainer bg-primary-200 border-solid border-primary-100 border-2 rounded-xl absolute w-full z-30">
          <ul className="max-h-48 overflow-auto no-scrollbar">
            {dropdownList.map((option, index) => (
              <li
                key={index}
                className={` text-white hover:bg-accent-200 p-2 cursor-pointer ${
                  selected.includes(option) ? "bg-accent-200" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.toString()}
              </li>
            ))}
          </ul>
          {type === "multiple" && (
            <Button text="DONE" onClick={toggleDropdown} variant="fill" />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
