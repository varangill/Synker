import logo from "../assets/images/logo.png";

const LiveLobbies = () => {
  return (
    <div className="lf-stack-container bg-gray-900 w-5/12 h-60 flex flex-col object-contain">
      <div className="lf-5stack-text text-white font-bold text-l h-8 ml-8">
        LOOKING FOR COMPETITIVE 5 STACK
        <div className="pfp-images flex flex-row mt-2 object-contain grid grid-cols-8 gap-1">
          <img className="pfp-1 h-18 w-18 mr-3 " src={logo}></img>
          <img className="pfp-1 h-18 w-18 mr-3 " src={logo}></img>
          <img className="pfp-1 h-18 w-18 mr-3 " src={logo}></img>
          <img className="pfp-1 h-18 w-18 mr-3 " src={logo}></img>
          <img className="pfp-1 h-18 w-18 mr-3 " src={logo}></img>
        </div>
      </div>
    </div>
  );
};

export default LiveLobbies;
