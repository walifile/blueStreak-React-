import React from "react";
import Logo from "../../images/full-bluestreak-logo.png";
// import LeftImg from "../../images/full-bluestreak-logo.png";
import blueTop from "../../images/bluelayertop.png";
import blueBottom from "../../images/bluelayerbtm.png";
import GreenTop from "../../images/green.png";
import GreenBottom from "../../images/green larg.png";
import OrangeTop from "../../images/orange.png";
import OrangBottom from "../../images/orange larg.png";
import PurpleTop from "../../images/purple.png";
import PurpleBottom from "../../images/purple larg.png";

const Navtab = (props) => {
  const { setTab } = props;
  const ClickHandler = (e) => {
    e.preventDefault();
    const tab = e.target.getAttribute("tab");
    setTab(tab);
  };
  return (
    <>
      <div className="d-flex  align-items-center ">
        {/* <div> img</div> */}
        <div className="nav-btn position-relative">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                tab="progress"
                onClick={ClickHandler}
              >
                progress
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                tab="Agent"
                onClick={ClickHandler}
              >
                Agent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                tab="Mission"
                onClick={ClickHandler}
              >
                Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-leader-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-leader"
                type="button"
                role="tab"
                aria-controls="pills-leader"
                aria-selected="false"
                tab="Leaderboard"
                onClick={ClickHandler}
              >
                Leaderboard
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade "
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div>
                <img src={GreenTop} className="top-img green" alt="GreenTop" />
              </div>
              <div>
                <img src={GreenBottom} className="w-100" alt="GreenTop" />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div>
                <img
                  src={OrangeTop}
                  className="top-img orange"
                  alt="OrangeTop"
                />
              </div>
              <div>
                <img src={OrangBottom} className="w-100" alt="OrangBottom" />
              </div>
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div>
                <img src={blueTop} className="top-img blue" alt="blueTop" />
              </div>
              <div>
                <img src={blueBottom} className="w-100" alt="blueBottom" />
              </div>
              {/* //////// */}

              {/* /////// */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-leader"
              role="tabpanel"
              aria-labelledby="pills-leader-tab"
            >
              <div>
                <img
                  src={PurpleTop}
                  className="top-img purple"
                  alt="PurpleTop"
                />
              </div>
              <div>
                <img src={PurpleBottom} className="w-100" alt="PurpleBottom" />
              </div>
            </div>
          </div>
        </div>
        {/* <div>sn img</div> */}
      </div>
      <div className="text-center">
        <p className="m-0 fw-bold">Welcome to</p>
        <img src={Logo} className="logo-img" alt="Logo" />
      </div>
    </>
  );
};

export default Navtab;
