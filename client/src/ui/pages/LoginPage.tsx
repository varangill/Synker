import("../../App.css");
import { useState } from "react";
import Navigation from "../components/common/Navigation";

export default function LoginPage() {
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
    <div className="App flex flex-row bg-primary-100 h-screen">
      <Navigation />
      <div className="login-screen-container flex flex-row w-full h-full flex-wrap overflow-y-scroll overflow-x-hidden p-10">
        <div>
          <div>Username</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <button className="submit bg-accent-100" onClick={handleSubmitClick}>
            Sign In
          </button>
        </div>
        <div>
          <div>Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <div>Register Username</div>
          <input
            type="text"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
            placeholder="Username"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <div>Register Password</div>
          <input
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <div>Confirm Password</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password"
            className="bg-primary-100 rounded-xl pl-4 text-white"
          />
          <button
            className="submit bg-accent-100"
            onClick={handleRegisterClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
