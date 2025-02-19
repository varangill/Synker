import { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginImage from "../assets/images/login.png";
import Input from "../components/common/Input";
import PasswordToggleButton from "../components/common/PasswordToggleButton";
import Tabs from "../components/common/Tabs";

import { postData } from "../../api";

interface LoginPageProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setAuth }: LoginPageProps) {
  const LOGIN_TAB = "Login";
  const REGISTER_TAB = "Register";

  const [activeTab, setActiveTab] = useState(LOGIN_TAB);

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignInClick = () => {
    postData("/users/login", { email, password })
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
      email: registerEmail,
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
            <h1 className="text-center text-6xl font-bold mb-8 text-white">
              SYNKER
            </h1>
            <Tabs
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              tabList={[LOGIN_TAB, REGISTER_TAB]}
            />

            {/* Form Container */}
            <div className="form-container h-[400px] flex flex-col justify-start">
              <div className="login-form">
                {activeTab === LOGIN_TAB ? (
                  <>
                    <Input
                      label="Email"
                      id="email"
                      variant="default"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordToggleButton
                      showPassword={showLoginPassword}
                      togglePassword={() =>
                        setShowLoginPassword((prev) => !prev)
                      }
                    >
                      <Input
                        label="Password"
                        id="password"
                        variant="default"
                        type={showLoginPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </PasswordToggleButton>
                  </>
                ) : (
                  <>
                    <Input
                      label="Email"
                      id="registerEmail"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                    <Input
                      label="Username"
                      id="username"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    />

                    <PasswordToggleButton
                      showPassword={showRegisterPassword}
                      togglePassword={() =>
                        setShowRegisterPassword((prev) => !prev)
                      }
                    >
                      <Input
                        label="Password"
                        id="password"
                        variant="default"
                        type={showRegisterPassword ? "text" : "password"}
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                    </PasswordToggleButton>

                    <PasswordToggleButton
                      showPassword={showConfirmPassword}
                      togglePassword={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                    >
                      <Input
                        label="Confirm Password"
                        id="confirmPassword"
                        variant="default"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </PasswordToggleButton>
                  </>
                )}
                <button
                  className="submit bg-accent-100 hover:bg-accent-200 w-full py-2 rounded-xl text-white font-bold mt-10"
                  onClick={
                    activeTab === LOGIN_TAB
                      ? handleSignInClick
                      : handleRegisterClick
                  }
                >
                  {activeTab === LOGIN_TAB ? "SIGN IN" : "REGISTER"}
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
