import React from "react";

const Content = (props) => {
  const { HandleClick} = props;
  return (
    <div className="main-form-data">
      <p className="p-20">
        Select the login that is right for You
        <span className="span">us if You are in grades k-3 you may use</span>
        <span className="span">Easylogin</span>
      </p>
      <button
        className="form-btn"
        id="login"
        target="signIn"
        onClick={HandleClick}
      >
        StudentID
      </button>
      <div className="text-sign">
        <p>Standard</p>
        <p>Username + password login</p>
        <p>for use with grades 3+</p>
      </div>
      <button className="form-btn" id="easylogin" onClick={HandleClick}>
        Easylogin
      </button>
      <div>
        <p>Easylogin for use with grades k-3</p>
      </div>
    </div>
  );
};

export default Content;
