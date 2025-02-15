import React from "react";

interface ButtonContainerProps {
  onCancelClick: () => void;
  onSaveClick: () => void;
}

const CancelSaveButton: React.FC<ButtonContainerProps> = ({
  onCancelClick,
  onSaveClick,
}) => {
  return (
    <div className="btn-container flex flex-row gap-1 pt-2 w-full justify-end pr-3">
      <button
        className="btn-cancel btn-save h-9 flex rounded-xl hover:bg-primary-100 items-center justify-center text-white font-bold w-24"
        onClick={onCancelClick}
      >
        CANCEL
      </button>
      <button
        className="btn-save h-9 flex rounded-xl bg-accent-100 hover:bg-accent-200 items-center justify-center text-white font-bold w-24"
        onClick={onSaveClick}
      >
        SAVE
      </button>
    </div>
  );
};

export default CancelSaveButton;
