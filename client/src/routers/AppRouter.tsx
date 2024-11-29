import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing Pages
import HomePage from "../ui/pages/HomePage";
import LoginPage from "../ui/pages/LoginPage";
import LivePage from "../ui/pages/LivePage";
import FriendsPage from "../ui/pages/FriendsPage";
import SyncPage from "../ui/pages/SyncPage";
import SettingsPage from "../ui/pages/SettingsPage";
import ProfilePage from "../ui/pages/ProfilePage";

function AppRouter() {
  // Setting the default title
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sync" element={<SyncPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
