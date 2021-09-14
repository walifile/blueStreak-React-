import React from "react";
import { SignInURL } from "../shared/Urls";
import FetchData from "../shared/Fetch";

const LoginForm = (props) => {
  const { setGameState, setPassword, setName, name, password, setLoginobject } =
    props;

  const LoginBtn = () => {
    const url = `${SignInURL}?email=district-dfc.${name}@bluestreakmath.com&password=${password}&end=true`;
    FetchData(url, "POST").then((res) => {
      const { status, response_Data } = res;
      const { data } = response_Data;
      setLoginobject(data);
      if (status) {
        setGameState("loading");
      }
    });
  };
  return (
    <div className="main-form-data">
      <p className="p-20">
        Use your id password
        <span className="span">to login</span>
      </p>
      <div className="input">
        <input
          type="text"
          placeholder="Student ID"
          name="student-id"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="input">
        <input
          type="password"
          id="txtPassword"
          name="txtPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="button" id="btnToggle" className="toggle">
          <i id="eyeIcon" className="fa fa-eye"></i>
        </button>
      </div>

      <button
        type="button"
        className="form-btn show-hide"
        id="submit"
        onClick={LoginBtn}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
