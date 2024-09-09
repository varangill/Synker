import { Chat } from "../../../types/Chat";
import React, { useEffect, useState } from "react";
import windowResize from "../../utils/WindowResize";
import Title from "../common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { receivedMessageBox, sentMessageBox } from "./MessageBox";
import ChatInputBox from "./ChatInputBox";

interface ChatWindowProps {
  chat: Chat;
  loggedInUserID: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, loggedInUserID }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  const [textToSend, setTextToSend] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
  // TODO: Get the last opened chat messages to display first

  useEffect(() => {
    // TODO: Send the text to the backend
    // Note: Clear setTextToSend to "" after sending a text
  }, [textToSend]);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);
  return (
    <div
      className={` flex flex-col items-center bg-primary-200 w-full h-full ${
        isMobile ? "" : "rounded-2xl border-l-4 border-b-4 border-accent-100"
      }`}
    >
      <div className="title-container flex flex-row justify-left w-full h-1/6 min-h-20 max-h-24 h-fit">
        <img
          src={chat.chatProfilePicture}
          className="object-contain max-h-20 max-w-20 m-4"
        ></img>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <Title title={chat.chatName} />
            <div className="flex flex-grow"></div>
            <button>
              <FontAwesomeIcon icon={faEdit} className="m-2 mr-4 title" />
            </button>
          </div>
          <div className="flex flex-row">
            <div
              className={`activity rounded-full h-4 w-4 text-white font-bold flex items-center justify-center ml-2 ${
                chat.members.some((member) => member.active)
                  ? "bg-green"
                  : "bg-red"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-primary-100 h-1 w-full" />
      <div className="message-container w-full overflow-auto no-scrollbar">
        {chat.messages.map((message, index) => {
          const previousMessage = chat.messages[index - 1];
          const showProfile =
            !previousMessage || previousMessage.sender.id != message.sender.id;
          return message.sender.id === loggedInUserID
            ? sentMessageBox(message, showProfile)
            : receivedMessageBox(message, showProfile);
        })}
      </div>
      <div className="text-container w-full rounded-2xl flex flex-col justify-center items-center">
        <div className="bg-primary-100 w-full h-1"></div>
        <ChatInputBox setTextToSend={() => setTextToSend("")} />
      </div>
    </div>
  );
};

export default ChatWindow;
