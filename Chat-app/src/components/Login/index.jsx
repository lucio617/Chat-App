import { usePostLoginMutation, usePostSignUpMutation } from "@/state/api";

import { useEffect, useState } from "react";

export function Login({ setUser, setSecret }) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignUp, resultSignup] = usePostSignUpMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };
  const handleRegister = () => {
    triggerSignUp({ username, password });

  
    if (resultSignup.status === "fulfilled") {
      console.log("yes")
      alert("User Registered Successfully!! Please proceed to login");
    }
  };

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUser(username);
      setSecret(password);
    }
  }, [resultLogin.data]);

  console.log("singup -response", resultSignup);
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">INTELLICHAT</h2>
        <p
          className="register-change"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already a user?" : "Are you a new user?"}
        </p>
        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
