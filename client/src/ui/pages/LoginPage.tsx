import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loginImage from "../assets/images/login.png";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Tabs from "../components/common/Tabs";

import { postData } from "../../api";

interface LoginPageProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPage({ setAuth }: LoginPageProps) {
  const LOGIN_TAB = "Login";
  const REGISTER_TAB = "Register";

  const [activeTab, setActiveTab] = useState(LOGIN_TAB);

  // Login fields
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Register fields
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerEmailError, setRegisterEmailError] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerUsernameError, setRegisterUsernameError] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Form Validity Flags
  const isLoginFormValid =
    email.trim() !== "" && password.trim() !== "" && emailError === "";
  const isRegisterFormValid =
    registerEmail.trim() !== "" &&
    registerUsername.trim() !== "" &&
    registerPassword.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    registerEmailError === "" &&
    registerUsernameError === "" &&
    confirmPasswordError === "";
  const isFormValid =
    activeTab === LOGIN_TAB ? isLoginFormValid : isRegisterFormValid;

  const handleSignInClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setIsLoading(true);
    postData("/users/login", { email, password })
      .then((res) => {
        console.log("Signed In", res);
        setAuth(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoginError("Incorrect email or password.");
        setAuth(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!isRegisterFormValid) {
      console.log("Registration form is invalid.");
      return;
    }

    setIsLoading(true);
    postData("/users", {
      name: registerUsername,
      email: registerEmail,
      password: registerPassword,
    })
      .then((res) => {
        console.log("Signed up", res.id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isUsernameAvailable = (username: string) => {
    // TODO: Check to see if the username is available
    console.log("Checking username availability: " + username);
    return false;
  };

  const isEmailValid = (email: string) => email.includes("@");

  useEffect(() => {
    if (registerPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  }, [registerPassword, confirmPassword]);

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
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setLoginError("");
              }}
              activeTab={activeTab}
              tabList={[LOGIN_TAB, REGISTER_TAB]}
            />

            {activeTab === LOGIN_TAB && loginError && (
              <div className="mb-4 text-center text-red-100 text-sm">
                {loginError}
              </div>
            )}

            {/* Form Container */}
            <div className="form-container h-[400px] flex flex-col">
              <form
                onSubmit={
                  activeTab === LOGIN_TAB
                    ? handleSignInClick
                    : handleRegisterClick
                }
                className="login-form flex flex-col gap-y-4"
              >
                {activeTab === LOGIN_TAB ? (
                  <>
                    <Input
                      label="Email"
                      id="email"
                      placeholder="Email"
                      variant="default"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={(e) => {
                        if (!isEmailValid(e.target.value)) {
                          setEmailError("Please enter a valid email address.");
                        } else {
                          setEmailError("");
                        }
                      }}
                      errorMessage={emailError}
                      required
                    />

                    <Input
                      label="Password"
                      id="password"
                      placeholder="Password"
                      variant="default"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </>
                ) : (
                  <>
                    <Input
                      label="Email"
                      id="registerEmail"
                      placeholder="Email"
                      variant="default"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      onBlur={(e) => {
                        if (!isEmailValid(e.target.value)) {
                          setRegisterEmailError(
                            "Please enter a valid email address."
                          );
                        } else {
                          setRegisterEmailError("");
                        }
                      }}
                      errorMessage={registerEmailError}
                      required
                    />

                    <Input
                      label="Username"
                      id="username"
                      placeholder="Username"
                      variant="default"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                      onBlur={(e) => {
                        isUsernameAvailable(e.target.value)
                          ? setRegisterUsernameError("")
                          : setRegisterUsernameError("Username not available.");
                      }}
                      errorMessage={registerUsernameError}
                      required
                    />

                    <Input
                      label="Password"
                      id="password"
                      placeholder="Password"
                      variant="default"
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />

                    <Input
                      label="Confirm Password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      variant="default"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      errorMessage={confirmPasswordError}
                      required
                    />
                  </>
                )}
                <Button
                  text={activeTab === LOGIN_TAB ? "SIGN IN" : "REGISTER"}
                  variant="fill"
                  className="mt-10"
                  disabled={isLoading || !isFormValid}
                />
              </form>
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
