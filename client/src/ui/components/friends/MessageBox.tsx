import { Message } from "../../../types/Chat";

export const receivedMessageBox = (message: Message, showProfile: boolean) => {
  return (
    <div className="msg-box flex flex-row gap-2 text-white justify-start w-full h-fit p-2 ml-4">
      {showProfile ? (
        <img
          src={message.sender.profilePicture}
          className="h-12 w-12 rounded-full object-cover"
        />
      ) : (
        <div className="h-12 w-12"></div>
      )}
      <div className="text-box flex flex-col max-w-[60%]">
        {showProfile && (
          <div className="profile flex flex-row">
            <div className="sender-name mr-2">{message.sender.username}</div>
            <div className="sender-name">
              {message.time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}

        <div className="bg-primary-100 rounded-xl text-wrap max-w-full p-2 break-words text-ellipsis">
          {message.content}
        </div>
      </div>
    </div>
  );
};

export const sentMessageBox = (message: Message, showProfile: boolean) => {
  return (
    <div className="msg-box flex flex-row gap-2 text-white justify-end w-full h-fit p-2 mr-4">
      <div className="text-box flex flex-col items-end max-w-[60%]">
        {showProfile && (
          <div className="profile flex flex-row justify-end">
            <div className="sender-name mr-2">{message.sender.username}</div>
            <div className="sender-time">
              {message.time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}

        <div className="bg-accent-100 rounded-xl text-wrap w-full mt-1 max-w-full p-2 break-words text-ellipsis">
          {message.content}
        </div>
      </div>
      {showProfile ? (
        <img
          src={message.sender.profilePicture}
          className="h-12 w-12 rounded-full object-cover"
        />
      ) : (
        <div className="h-12 w-12"></div>
      )}
    </div>
  );
};
