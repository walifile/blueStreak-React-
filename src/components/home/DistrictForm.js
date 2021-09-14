import React from "react";

const DistrictForm = () => {
  return (
    <div className="main-form-data">
      <p className="p-20">
        Welcome to bluestreak
        <span className="span"> Enter your 3 digit school code or group</span>
        Code get to started (EX:ABC or G210)
      </p>
      <div className="input">
        <input type="text" placeholder="School or Access Code" />
      </div>
      <a className="form-btn show-hide" id="district_code">
        {" "}
        Continue{" "}
      </a>
    </div>
  );
};

export default DistrictForm;
