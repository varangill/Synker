import { useNavigate } from "react-router-dom";
import "../assets/styles/Navigation.css";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/home");
  }
  function handleSyncClick() {
    navigate("/sync");
  }

  function handleFriendsClick() {
    navigate("/friends");
  }

  function handleLiveClick() {
    navigate("/live");
  }

  function handleProfileClick() {
    navigate("/profile");
  }

  function handleSettingsClick() {
    navigate("/settings");
  }

  function handleLoginClick() {
    navigate("/");
  }

  return (
    <div className="nav-bar-container bg-gray-900 h-screen w-96 md:w-80 sm:w-56">
      <div className="nav-bar-top">
        <div className="logo-title flex flex-row object-contain">
          <img
            className="logo object-scale-down w-1/3"
            src={logo}
            onClick={handleHomeClick}
          ></img>
          <p
            className="text-base sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-white w-2/3 font-bold text-left flex items-center"
            onClick={handleHomeClick}
          >
            SYNKER
          </p>
        </div>
        <div className="nav-bar-middle flex flex-col items-center">
          <button className="btn-default flex rounded-xl bg-purple-100 hover:bg-purple-200 w-3/4 items-left" onClick={handleSyncClick}>
            <img></img>
            <div className="btn-text text-white font-bold">SYNC</div>
          </button>
          <button className="btn-default" onClick={handleFriendsClick}>
          <img></img>
            <div>Friends</div>
          </button>
          <button className="btn-default" onClick={handleLiveClick}>
            <img></img>
            <div>Live Game</div>
          </button>
        </div>
      </div>
      <div className="nav-bar-bottom">
        <button className="btn-default" onClick={handleProfileClick}>
          Profile
        </button>
        <div className="logout-container">
          <button className="btn-logout" onClick={handleLoginClick}>
            Logout
          </button>
          <button className="btn-settings" onClick={handleSettingsClick}>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
