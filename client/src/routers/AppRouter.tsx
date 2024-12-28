import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "../ui/pages/HomePage";
import LoginPage from "../ui/pages/LoginPage";
import LivePage from "../ui/pages/LivePage";
import FriendsPage from "../ui/pages/FriendsPage";
import SyncPage from "../ui/pages/SyncPage";
import SettingsPage from "../ui/pages/SettingsPage";
import ProfilePage from "../ui/pages/ProfilePage";

type ModalContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

function AppRouter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      <div className={isModalOpen ? "brightness-50" : ""}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/sync" element={<SyncPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ModalContext.Provider>
  );
}

export default AppRouter;
