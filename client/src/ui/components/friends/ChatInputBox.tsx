import { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Button from "../common/Button";
import TextArea from "../common/TextArea";

interface ChatInputBoxProps {
  setTextToSend: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInputBox: React.FC<ChatInputBoxProps> = ({ setTextToSend }) => {
  const [currentInputText, setCurrentInputText] = useState("");

  const handleSendClick = () => {
    if (currentInputText === "") return;

    setTextToSend(currentInputText);
    console.log(currentInputText);
    setCurrentInputText("");
  };

  return (
    <div className="flex flex-row w-5/6 rounded-2xl m-4 justify-between items-center gap-8">
      <TextArea
        variant="messageBox"
        placeholder="Message ..."
        maxLength={500}
        maxHeight={96}
        currentInputText={currentInputText}
        setCurrentInputText={setCurrentInputText}
        onSubmit={handleSendClick}
      />
      <Button
        onClick={handleSendClick}
        variant="iconFill"
        icon={faPaperPlane}
      />
    </div>
  );
};

export default ChatInputBox;
