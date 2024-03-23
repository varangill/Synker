import { useNavigate } from "react-router-dom";
import "../assets/styles/Navigation.css";

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
    <div className="nav-bar-container">
      <div className="nav-bar-top">
        <div className="logo-title">
          <div className="logo"></div>
          <div className="nav-bar-title" onClick={handleHomeClick}>
            Synker
          </div>
        </div>

        <button className="btn-default" onClick={handleSyncClick}>
          Sync
        </button>
        <button className="btn-default" onClick={handleFriendsClick}>
          Friends
        </button>
        <button className="btn-default" onClick={handleLiveClick}>
          Live Game
        </button>
      </div>
      <div className="nav-bar-middle"></div>
      <div className="nav-bar-bottom">
        <button className="btn-default" onClick={handleProfileClick}>
          Profile
        </button>
        <div className="logout-container">
          <button className="btn-logout" onClick={handleLoginClick}></button>
          <button className="btn-settings" onClick={handleSettingsClick}>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
