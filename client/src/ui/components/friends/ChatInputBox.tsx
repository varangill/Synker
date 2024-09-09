import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
    <div className="input-box-container flex flex-row w-5/6 rounded-2xl m-4 justify-between">
      <textarea
        className="desc w-4/5 text-white text-base p-2 bg-primary-200 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100"
        value={currentInputText}
        onChange={(e) => setCurrentInputText(e.target.value)}
        style={{ height: "auto", overflowY: "hidden" }}
        rows={1}
        maxLength={150}
        autoFocus={true}
        autoCorrect="on"
        placeholder="Message ..."
      />
      <button
        onClick={() => handleSendClick()}
        className="bg-accent-100 rounded-2xl text-white w-12"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="" />
      </button>
    </div>
  );
};

export default ChatInputBox;
