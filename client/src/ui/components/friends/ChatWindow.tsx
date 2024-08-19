import { Chat } from "../../../types/Chat";
import React, { useEffect, useState } from "react";
import windowResize from "../../utils/WindowResize";

interface ChatWindowProps {
  chat: Chat;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  // TODO: Get the last opened chat messages to display first

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);
  return (
    <div
      className={` flex flex-col items-center bg-primary-200 w-full h-full ${
        isMobile ? "" : "rounded-2xl border-l-4 border-b-4 border-accent-100"
      }`}
    >
      {chat.messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  );
};

export default ChatWindow;
