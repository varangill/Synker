import { useNavigate } from "react-router-dom";
import "../assets/styles/Navigation.css";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  // Finds the current path, make button component, render depending on page
  // Do this in btn component, pass in "Home" as props, if home == pathname /home, render
  // Otherwise render default unclicked button
  const currentPath = window.location.pathname;

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
    <div className="nav-bar-container bg-gray-900 h-screen w-96 md:w-80 sm:w-56 flex flex-col">
      <div className="nav-bar-top">
        <div className="logo-title flex flex-row object-contain mb-8">
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
          {/* Button */}
          <button
            className={`btn-default h-9 flex rounded-xl w-4/5 items-left mb-5 ${
              currentPath == "/sync"
                ? "bg-purple-100 hover:bg-purple-200"
                : "bg-gray-100"
            }`}
            onClick={handleSyncClick}
          >
            <div className="flex flex-row justify-center items-center">
              <img className="object-contain h-8 w-3/4" src={logo}></img>
              <div className="flex btn-text text-white h-8 font-bold items-center text-xl">
                SYNC
              </div>
            </div>
          </button>
          {/* Button End */}
          <button
            className={`btn-default h-9 flex rounded-xl w-4/5 items-left mb-5 ${
              currentPath == "/friends"
                ? "bg-purple-100 hover:bg-purple-200"
                : "bg-gray-100"
            }`}
            onClick={handleFriendsClick}
          >
            <div className="flex flex-row justify-center items-center">
              <img className="object-contain h-8 w-3/4" src={logo}></img>
              <div className="flex btn-text text-white h-8 font-bold items-center text-xl">
                FRIENDS
              </div>
            </div>
          </button>

          <button
            className={`btn-default h-9 flex rounded-xl w-4/5 items-left mb-5 ${
              currentPath == "/live"
                ? "bg-purple-100 hover:bg-purple-200"
                : "bg-gray-100"
            }`}
            onClick={handleLiveClick}
          >
            <div className="flex flex-row justify-center items-center">
              <img className="object-contain h-8 w-3/4" src={logo}></img>
              <div className="flex btn-text text-white h-8 font-bold items-center text-xl">
                LIVE
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="nav-bar-middle-space grow"></div>
      <div className="bg-gray-100 h-1 w-fill mb-5"></div>
      <div className="nav-bar-bottom flex flex-col items-center">
        <button
          className={`btn-default h-9 flex rounded-xl w-4/5 items-left mb-5 ${
            currentPath == "/profile"
              ? "bg-purple-100 hover:bg-purple-200"
              : "bg-gray-100"
          }`}
          onClick={handleProfileClick}
        >
          <div className="flex flex-row justify-center items-center">
            <img className="object-contain h-8 w-3/4" src={logo}></img>
            <div className="flex btn-text text-white h-8 font-bold items-center text-xl">
              PROFILE
            </div>
          </div>
        </button>
        <div className="logout-container flex flex-row h-9 flex rounded-xl w-4/5 items-left mb-12">
          <button
            className={`btn-default h-9 flex rounded-xl w-4/5 items-left mb-5 ${
              currentPath == "/profile" ? "" : ""
            }`}
            onClick={handleLoginClick}
          >
            <div className="flex flex-row justify-center items-center">
              <img className="object-contain h-8 w-3/4" src={logo}></img>
              <div className="flex btn-text text-white h-8 font-bold items-center text-xl">
                LOGOUT
              </div>
            </div>
          </button>
          <button
            className="btn-settings justify-center items-right"
            onClick={handleSettingsClick}
          >
            <img className="h-9" src={logo}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
