import { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Button from "../common/Button";

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
      <textarea
        className="desc w-full text-white text-base p-2 bg-primary-200 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100 outline-none"
        value={currentInputText}
        onChange={(e) => setCurrentInputText(e.target.value)}
        style={{ height: "auto", overflowY: "hidden" }}
        rows={1}
        maxLength={150}
        autoFocus={true}
        autoCorrect="on"
        placeholder="Message ..."
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
