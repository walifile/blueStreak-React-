import React from "react";
import avatar from "../../images/avatar-boy.png";
import avatarsign from "../../images/icon-lightning-circle-lq.png";
import arwo from "../../images/arwo.png";
import playBtn from "../../images/play button.png";

const Footer = () => {
  return (
    <>
      <div className="container footer-height">
        <div className="main-footer d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="position-relative">
              <img src={avatarsign} alt="avatarsign" className="master" />
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
            <div className="user-stat">
              <p className>Wali FilesStudio</p>
              <div className="d-flex align-items-center">
                <img src={arwo} alt="arwo" className="arwo" />
                <p className="result">0</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="pe-5">
              <p>Addition</p>
              <p>Addition</p>
              <p>Addition</p>
            </div>
            <div>
              <img src={playBtn} alt="playBtn" className="playBtn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
