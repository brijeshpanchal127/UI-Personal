import React, { useState } from "react";
import authService from "../../services/auth.service";
import landingService from "../../services/landing.service";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const inputProps = {
    required: true,
    step: 300,
    style: {
      padding: 5,
    },
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const auth = useSelector((state) => state.login.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    dispatch(authService.login(username, password));
    e.preventDefault();
  };

  if (isLoggedIn) {
    //console.log("Login pg layer: redirecting to landing/");
    return <Redirect to="/landing" />;
  }

  return (
    <form id="loginPanel" onSubmit={handleLogin}>
      <div className="panelInputs">
        <div className="inputFields">
          <p>Username</p>         
          <input
            type="text"
            id="username"
            value={username}
            onChange={onChangeUsername}
            variant="outlined"
            inputProps={inputProps}
          />
        </div>

        <div className="inputFields">
          <p>Password</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
            variant="outlined"
            inputProps={inputProps}
          />          
        </div>

        <div id="loginButton">         
          <button variant="contained" color="primary" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
