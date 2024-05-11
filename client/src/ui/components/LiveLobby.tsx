import logo from "../assets/images/logo.png";
import LobbyTag from "../components/LobbyTag";

const LiveLobby = () => {
  return (
    <div className="lf-stack-container bg-gray-200 xl:w-5/12 lg:w-5/12 md:w-full sm:w-full h-fit flex flex-col">
      <div className="lf-5stack-text text-white font-bold text-base ml-8 mt-3">
        LOOKING FOR COMPETITIVE 5 STACK
      </div>
      <div className="pfp-images flex flex-wrap mt-2 object-contain ml-5 gap-2 w-4/5">
        <img className="pfp-1 max-h-20 max-w-20 p-1" src={logo}></img>
        <img className="pfp-1 max-h-20 max-w-20 p-1" src={logo}></img>
        <img className="pfp-1 max-h-20 max-w-20 p-1" src={logo}></img>
        <img className="pfp-1 max-h-20 max-w-20 p-1" src={logo}></img>
        <img className="pfp-1 max-h-20 max-w-20 p-1" src={logo}></img>
      </div>
      <div className="bottom-container flex flex-row h-full">
        <div className="box-of-tags ml-5 w-2/3 h-full flex flex-wrap">
          <LobbyTag tagName="PARKORE MANIAK"></LobbyTag>
          <LobbyTag tagName="RIVAILLE"></LobbyTag>
          <LobbyTag tagName="3ZPZ"></LobbyTag>
          <LobbyTag tagName="NOVATIC"></LobbyTag>
        </div>
        <div className="player-count-join h-full flex flex-col w-1/3 p-5">
          <div className="player-count text-white font-bold text-base text-center mb-2">
            X/5 PLAYERS
          </div>
          <div className="btn-container text-center h-8 w-full items-center flex justify-center mb-2">
            <button
              className={
                "btn-default h-9 flex rounded-xl bg-purple-100 hover:bg-purple-200 w-full items-center justify-center"
              }
            >
              <div className="btn-txt text-white font-bold text-base">JOIN</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLobby;
