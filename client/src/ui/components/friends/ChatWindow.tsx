import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHatWizard } from "@fortawesome/free-solid-svg-icons";

import { receivedMessageBox, sentMessageBox } from "./MessageBox";
import { Chat } from "../../../types/Chat";

import Button from "../common/Button";
import windowResize from "../../utils/WindowResize";
import Title from "../common/Title";
import ChatInputBox from "./ChatInputBox";

interface ChatWindowProps {
  chat: Chat;
  isGroupChat: boolean;
  loggedInUserID: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  chat,
  isGroupChat,
  loggedInUserID,
}) => {
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
      <div className="title-container flex flex-row justify-left w-full min-h-20 max-h-24 h-fit">
        <img
          src={chat.chatProfilePicture}
          className="object-contain max-h-20 max-w-20 m-4"
        ></img>
        <div className="flex flex-col w-full max-h-20">
          <div className="flex flex-row w-full items-center justify-center">
            <Title title={chat.chatName} />
            <div
              className={`activity rounded-full h-4 w-4 text-white font-bold flex items-center justify-center ml-2 mt-2 ${
                chat.members.some((member) => member.active)
                  ? "bg-green"
                  : "bg-red"
              }`}
            ></div>
            <div className="flex flex-grow"></div>
            {isGroupChat && <Button variant="icon" icon={faEdit} />}
          </div>
        </div>
      </div>
      <div className="bg-primary-100 h-1 w-full" />
      <div className="message-container flex flex-grow flex-col w-full overflow-auto no-scrollbar">
        {chat.messages.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full text-primary-400 ">
            <FontAwesomeIcon icon={faHatWizard} className="m-2 mr-4 h-20" />
            Don't be shy, send the first message!
          </div>
        ) : (
          chat.messages.map((message, index) => {
            const previousMessage = chat.messages[index - 1];
            const showProfile =
              !previousMessage ||
              previousMessage.sender.id !== message.sender.id;
            return (
              <React.Fragment key={message.id}>
                {message.sender.id === loggedInUserID
                  ? sentMessageBox(message, showProfile)
                  : receivedMessageBox(message, showProfile)}
              </React.Fragment>
            );
          })
        )}
      </div>
      <div className="text-container w-full rounded-2xl flex flex-col justify-center items-center">
        <div className="bg-primary-100 w-full h-1"></div>
        <ChatInputBox setTextToSend={() => setTextToSend("")} />
      </div>
    </div>
  );
};

export default ChatWindow;
