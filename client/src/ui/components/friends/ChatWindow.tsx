import { Chat } from "../../../types/Chat";
interface ChatWindowProps {
  chat: Chat;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  // TODO: Get the last opened chat messages to display first
  return (
    <div className="w-full h-full bg-gray-200 rounded-2xl">
      {chat.messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  );
};

export default ChatWindow;
