import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserGroup,
  faCirclePlay,
  faUser,
  faRightFromBracket,
  faGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "../../assets/styles/Navigation.css";
import logo from "../../assets/images/logo.png";

import windowResize from "../../utils/WindowResize";

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    windowResize(setIsMobile);
  }, []);
  const currentPath = window.location.pathname;

  function handleHomeClick() {
    navigate("/");
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

  function handleLogoutClick() {
    navigate("/login");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className={`nav-bar-container ${
        isMobile
          ? "fixed w-full h-fit"
          : "relative w-96 xl:w-1/6 md:w-80 sm:w-64 h-full"
      } top-0 left-0 bg-primary-200 flex flex-col z-50`}
    >
      <div className="nav-bar-top flex justify-between items-center p-4 bg-primary-200">
        <div className="logo-title flex items-center object-contain hover:cursor-pointer">
          <img
            className={`logo object-scale-down ${isMobile ? "w-14" : "w-20"}`}
            src={logo}
            onClick={handleHomeClick}
            alt="Logo"
          />
          <p
            className={`logo object-scale-down text-white font-bold ${
              isMobile ? "text-xl" : "lg:text-3xl md:text-2xl"
            }`}
            onClick={handleHomeClick}
          >
            SYNKER
          </p>
        </div>
        {isMobile && (
          <FontAwesomeIcon
            icon={faBars}
            className="text-accent-100 text-2xl"
            onClick={toggleMenu}
          />
        )}
      </div>
      {(isMenuOpen || !isMobile) && (
        <div
          className={`nav-bar-menu flex flex-col items-center ${
            isMobile
              ? "bg-primary-800"
              : "bg-primary-800 h-full justify-between"
          } w-full`}
        >
          <div className="w-full flex flex-col justify-center items-end mt-6">
            <button
              className={`btn-default h-9 flex rounded-xl w-4/5 items-center mb-5 ${
                currentPath === "/sync"
                  ? "bg-accent-100 hover:bg-accent-200"
                  : "bg-primary-100 hover:bg-primary-300"
              }`}
              onClick={handleSyncClick}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="object-contain h-2/4 w-5 text-white p-4"
              />
              <div className="btn-text">SYNC</div>
            </button>
            <button
              className={`btn-default h-9 flex rounded-xl w-4/5 items-center mb-5 ${
                currentPath === "/friends"
                  ? "bg-accent-100 hover:bg-accent-200"
                  : "bg-primary-100 hover:bg-primary-300"
              }`}
              onClick={handleFriendsClick}
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                className="object-contain h-2/4 w-5 text-white p-4"
              />
              <div className="btn-text">FRIENDS</div>
            </button>
            <button
              className={`btn-default h-9 flex rounded-xl w-4/5 items-center mb-5 ${
                currentPath === "/live"
                  ? "bg-accent-100 hover:bg-accent-200"
                  : "bg-primary-100 hover:bg-primary-300"
              }`}
              onClick={handleLiveClick}
            >
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="object-contain h-2/4 w-5 text-white p-4"
              />
              <div className="btn-text">LIVE</div>
            </button>
          </div>

          <div className="w-full items-center flex flex-col">
            <div className="line h-1 w-full bg-primary-100 mb-5"></div>
            <button
              className={`btn-default h-9 flex rounded-xl w-4/5 items-center mb-5 ${
                currentPath === "/profile"
                  ? "bg-accent-100 hover:bg-accent-200"
                  : "bg-primary-100 hover:bg-primary-300"
              }`}
              onClick={handleProfileClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="object-contain h-2/4 w-5 text-white p-4"
              />
              <div className="btn-text">PROFILE</div>
            </button>
            <div className="flex flex-row w-4/5 justify-between">
              <button
                className="btn-default h-9 flex rounded-xl w-fit items-center mb-5 pr-4 hover:bg-primary-300"
                onClick={handleLogoutClick}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="object-contain h-2/4 w-5 text-white p-4"
                />
                <div className="btn-text">LOGOUT</div>
              </button>
              <button
                className="btn-default h-9 flex rounded-xl items-center mb-5 hover:bg-primary-300"
                onClick={handleSettingsClick}
              >
                <FontAwesomeIcon
                  icon={faGear}
                  className="object-contain h-2/4 w-5 text-white p-4"
                />
              </button>
            </div>
          </div>
        </div>
      )}
      {isMobile && <div className="bg-accent-100 w-full h-1"></div>}
    </div>
  );
};

export default Navigation;
