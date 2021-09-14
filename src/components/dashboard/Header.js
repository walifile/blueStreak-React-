import React from "react";
import Navtab from "./Navtab";
import MenuIcon from "../../images/menu icon.png";

const Header = (props) => {
  const { setTab } = props;

  return (
    <div className="container">
      <div className="header d-flex justify-content-between pt-5">
        <div className="icon-div">
          <img src={MenuIcon} className="icon" alt="" />
          <div className=""></div>
        </div>
        <Navtab setTab={setTab} />
      </div>
    </div>
  );
};

export default Header;
