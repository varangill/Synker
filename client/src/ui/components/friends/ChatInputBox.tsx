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
    setTextToSend(currentInputText);
    setCurrentInputText("");
  };

  return (
    <div className="input-box-container flex flex-row w-5/6 rounded-2xl m-4 justify-between gap-8">
      <TextArea
        rows={1}
        variant="default"
        placeholder="Message ..."
        setCurrentInputText={setCurrentInputText}
      />
      <Button
        onClick={() => handleSendClick()}
        variant="iconFill"
        icon={faPaperPlane}
      />
    </div>
  );
};

export default ChatInputBox;
