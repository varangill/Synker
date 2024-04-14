import logo from "../assets/images/logo.png";
import LobbyTag from "../components/LobbyTag";

const LiveLobby = () => {
  return (
    <div className="lf-stack-container bg-gray-900 w-5/12 h-fit flex flex-col">
      <div className="lf-5stack-text text-white font-bold text-2xl h-8 ml-8 mt-3">
        LOOKING FOR COMPETITIVE 5 STACK
      </div>
      <div className="pfp-images flex flex-row mt-2 object-contain grid grid-cols-6 ml-8 gap-1 w-4/5">
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
        <img className="pfp-1 max-h-32 max-w-32 p-1" src={logo}></img>
      </div>
      <div className="bigDiv flex flex-row h-full ">
        <div className="grid grid-cols-4 w-2/3 h-full">
          <LobbyTag tagName="PARKORE MANIAK"></LobbyTag>
          <LobbyTag tagName="RIVAILLE"></LobbyTag>
          <LobbyTag tagName="3ZPZ"></LobbyTag>
          <LobbyTag tagName="NOVATIC"></LobbyTag>
        </div>
        <div className="player-count-join h-full flex flex-col items-center w-1/3 p-5">
          <div className="player-count text-white font-bold text-2xl text-center mb-2">
            X/5 PLAYERS
          </div>
          <div className="btn-container text-center h-8 w-full items-center flex justify-center mb-2">
            <button
              className={
                "btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
              }
            >
              <div className="btn-txt text-white font-bold text-2xl">JOIN</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLobby;
