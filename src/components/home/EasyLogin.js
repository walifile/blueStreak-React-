import React, { useRef, useState } from "react";
import star from "../../images/star.png";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import triangle from "../../images/triangle.png";
import square from "../../images/square.png";
import pentagon from "../../images/pentagon.png";
import heart from "../../images/heart.png";
import circle from "../../images/circle.png";
import diamond from "../../images/diamond.png";
import easyBtn from "../../images/easy-btn.png";
import backspace from "../../images/backspace.png";
import { EasyLoginURL, SignInURL } from "../shared/Urls";
import FetchData from "../shared/Fetch";

var counter = 1;

function EasyLogin(props) {
  const { setGameState, setLoginobject, setName, setPassword } = props;
  const ImgRef = useRef(null);
  const [easyLogin, setEasyLogin] = useState("");

  const ImgClick = (e) => {
    if (counter <= 0 || counter > 5) {
      return;
    }
    document.getElementById("easy" + counter).src = e.target.src;

    var value = `${easyLogin}${e.target.getAttribute("value")}`;
    setEasyLogin(value);

    if (counter === 5) {
      const url = `${EasyLoginURL}?district_uid=dfc&easylogin=${value}&clever_token=&end=true`;
      FetchData(url, "GET").then((res) => {
        if (res.status) {
          const { response_Data } = res;
          const password = response_Data.password;
          const name = response_Data.student_login;
          setName(name);
          setPassword(password);
          const LoginUrl = `${SignInURL}?email=district-dfc.${name}@bluestreakmath.com&password=${password}&end=true`;
          FetchData(LoginUrl, "POST").then((res) => {
            if (res.status) {
              const { response_Data } = res;
              const { data } = response_Data;
              setLoginobject(data);
              setGameState("loading");
            }
          });
        }
      });
    }
    counter += 1;
  };

  const RemoveImg = (e) => {
    if (counter - 1 <= 0 || counter - 1 > 5) {
      return;
    }
    let temp = counter - 1;
    document.getElementById("easy" + temp + "").src = ImgRef.current.src;

    let index = counter - 2;
    let char = easyLogin.at(counter - 2);

    const newArray = [...easyLogin];
    const newValue = newArray.filter((c, i) => {
      if (c === char && i === index) {
        console.log("skip " + c + "at index" + i);
        return "";
      } else {
        return c;
      }
    });
    setEasyLogin(newValue.toString().replace(/,/g, ""));
    counter -= 1;
  };
  return (
    <>
      <img
        ref={ImgRef}
        src={easyBtn}
        id="hidden-img"
        style={{ display: "none" }}
        alt=""
      />
      <div className="main-form-data">
        <p className="p-20">
          Click on the shapes
          <span className="span"> to login with Easylogin</span>
        </p>
        <div className="easylogin-main" id="">
          <div className="easylogin-top">
            <img src={easyBtn} alt="" id="easy1" />
            <img src={easyBtn} alt="" id="easy2" />
            <img src={easyBtn} alt="" id="easy3" />
            <img src={easyBtn} alt="" id="easy4" />
            <img src={easyBtn} alt="" id="easy5" />
          </div>
          <div className="shapes">
            <div className="shape-img-div">
              <img onClick={ImgClick} src={circle} alt="" value="1" />
              <img onClick={ImgClick} src={triangle} alt="" value="0" />
              <img onClick={ImgClick} src={moon} alt="" value="6" />
            </div>
            <div className="shape-img-div">
              <img onClick={ImgClick} src={heart} alt="" value="3" />
              <img onClick={ImgClick} src={pentagon} alt="" value="7" />
              <img onClick={ImgClick} src={square} alt="" value="4" />
            </div>
            <div className="shape-img-div">
              <img onClick={ImgClick} src={sun} alt="" value="8" />
              <img onClick={ImgClick} src={diamond} alt="" value="5" />
              <img onClick={ImgClick} src={star} alt="" value="2" />
            </div>
            <img
              src={backspace}
              onClick={RemoveImg}
              className="backspace"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EasyLogin;
