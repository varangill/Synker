import { useState } from "react";
import loginImage from "../assets/images/login.png";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitClick = () => {
    console.log("Submit Clicked");
  };

  const handleRegisterClick = () => {
    console.log("Register Clicked");
  };

  return (
    <div className="App flex flex-row bg-primary-200 h-screen w-full">
      <div className="login-screen-container flex w-full h-full">
        {/* Left Side */}
        <div className="login-screen-left w-1/2 flex flex-col items-center justify-start py-10">
          <div className="login-container w-full max-w-md">
            <div className="text-center text-3xl font-bold mb-6">SYNKER</div>
            <div className="tabs flex justify-center mb-6">
              <button
                className={`px-4 py-2 mx-2 ${
                  activeTab === "login" ? "bg-accent-100" : ""
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 mx-2 ${
                  activeTab === "register" ? "bg-accent-100" : ""
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>
            <div className="form-container min-h-[350px]">
              {activeTab === "login" && (
                <div className="login-form">
                  {/* Login Form Fields */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <button
                    className="submit bg-accent-100 w-full py-2 rounded-xl"
                    onClick={handleSubmitClick}
                  >
                    Sign In
                  </button>
                </div>
              )}
              {activeTab === "register" && (
                <div className="register-form">
                  {/* Register Form Fields */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                      placeholder="Username"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="Password"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10"
                    />
                  </div>
                  <button
                    className="submit bg-accent-100 w-full py-2 rounded-xl"
                    onClick={handleRegisterClick}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="login-screen-right w-1/2 h-full relative">
          <img
            src={loginImage}
            alt="Login"
            className="h-full w-full object-cover"
          />
          <div className="overlay-text absolute top-0 left-0 w-full h-full flex flex-col items-center py-10 text-white">
            <div className="text-4xl font-bold mb-4">Competent Teammates.</div>
            <div className="text-2xl">High Quality Matches.</div>
            <div className="text-2xl">Friends That Stay.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
