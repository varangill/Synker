import React from "react";

import Button from "./Button";

interface ButtonContainerProps {
  onCancelClick: () => void;
  onSaveClick: () => void;
}

const CancelSaveButton: React.FC<ButtonContainerProps> = ({
  onCancelClick,
  onSaveClick,
}) => {
  return (
    <div className="btn-container flex flex-row gap-1 pt-2 w-48 justify-end gap-x-2">
      <Button
        text="CANCEL"
        textStyle="font-bold"
        textSize="small"
        onClick={onCancelClick}
        variant="blank"
      />
      <Button
        text="SAVE"
        textSize="small"
        onClick={onSaveClick}
        variant="fill"
      />
    </div>
  );
};

export default CancelSaveButton;
