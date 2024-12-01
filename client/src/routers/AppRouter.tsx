import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing Pages
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../ui/pages/HomePage";
import LoginPage from "../ui/pages/LoginPage";
import LivePage from "../ui/pages/LivePage";
import FriendsPage from "../ui/pages/FriendsPage";
import SyncPage from "../ui/pages/SyncPage";
import SettingsPage from "../ui/pages/SettingsPage";
import ProfilePage from "../ui/pages/ProfilePage";

// Define the context
export const AuthContext = createContext<boolean>(false);

function AppRouter() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoutes auth={auth} />}>
            <Route path="/sync" element={<SyncPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default AppRouter;
