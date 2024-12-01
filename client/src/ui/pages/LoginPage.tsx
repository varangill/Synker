import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/images/login.png";

import { postData } from "../../api";

interface LoginPageProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setAuth }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignInClick = () => {
    console.log(email, password);
    postData("/users/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("Signed In", res);
        setAuth(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setAuth(false);
      });
  };

  const handleRegisterClick = () => {
    postData("/users", {
      name: registerUsername,
      email,
      password: registerPassword,
    })
      .then((res) => {
        console.log("Signed up", res.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App flex flex-row bg-primary-200 h-screen w-full">
      <div className="login-screen-container flex w-full h-full relative">
        {/* Left Side */}
        <div className="login-screen-left w-1/2 flex items-center justify-center">
          <div className="login-container w-full max-w-md absolute top-1/2 transform -translate-y-1/2">
            <div className="text-center text-6xl font-bold mb-8 text-white">
              SYNKER
            </div>
            <div className="tabs flex justify-center mb-6">
              <button
                className={`h-9 flex px-4 py-2 mx-2 items-center justify-center ${
                  activeTab === "login"
                    ? "border-b-4 border-accent-200 text-white font-bold"
                    : "border-b-4 border-primary-200 text-gray-300 font-bold"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`h-9 flex px-4 py-2 mx-2 items-center justify-center ${
                  activeTab === "register"
                    ? "border-b-4 border-accent-200 text-white font-bold"
                    : "border-b-4 border-primary-200 text-gray-300 font-bold"
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>
            {/* Fixed Height Form Container */}
            <div className="form-container h-[400px] flex flex-col justify-start">
              <div className="login-form">
                {activeTab === "login" && (
                  <>
                    {/* Login Fields */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2 text-gray-400"
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                          />
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "register" && (
                  <>
                    {/* Register Fields */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Username
                      </label>
                      <input
                        type="text"
                        value={registerUsername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                        placeholder="Username"
                        className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showRegisterPassword ? "text" : "password"}
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          placeholder="Password"
                          className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowRegisterPassword(!showRegisterPassword)
                          }
                          className="absolute right-3 top-2 text-gray-400"
                        >
                          <FontAwesomeIcon
                            icon={showRegisterPassword ? faEye : faEyeSlash}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1 text-white">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
                          className="bg-primary-100 rounded-xl pl-4 text-white w-full h-10 outline-none focus:ring-0"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-2 text-gray-400"
                        >
                          <FontAwesomeIcon
                            icon={showConfirmPassword ? faEye : faEyeSlash}
                          />
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <button
                  className="submit bg-accent-100 hover:bg-accent-200 w-full py-2 rounded-xl text-white font-bold mt-10"
                  onClick={
                    activeTab === "login"
                      ? handleSignInClick
                      : handleRegisterClick
                  }
                >
                  {activeTab === "login" ? "SIGN IN" : "REGISTER"}
                </button>
              </div>
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
        </div>
      </div>
    </div>
  );
}
