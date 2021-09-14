import React, { useState } from "react";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Content from "./Content";
import LoginForm from "./LoginForm";
import DfcForm from "./DistrictForm";
import EasyLogin from "./EasyLogin";
import loginLogo from "../../images/bluestreak-logo@3x.png";

const Form = (props) => {
  const {
    setGameState,
    setName,
    setPassword,
    setEasyLogin,
    name,
    password,
    easyLogin,
    setLoginobject,
  } = props;
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [current, setCurrent] = useState("home");
  const [currentLang, setCurrentLang] = useState(currentLanguageCode);
  const { t } = useTranslation();

  const HandleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setCurrent(id);
  };

  const ChangeLang = () => {
    if (currentLang === "en") {
      setCurrentLang("es");
      i18next.changeLanguage("es");
    } else {
      setCurrentLang("en");
      i18next.changeLanguage("en");
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <section className="planets"></section>
        <section className="main-form">
          <form
            className="form-inner animate__animated animate__fadeInRight"
            id="login"
          >
            <div className="top">
              <p onClick={HandleClick} id="home">
                back
              </p>
              <p className="schoolAccess">
                Not Your School or Group?
                <span className="span" id="district" onClick={HandleClick}>
                  {t("en-1")}
                </span>
              </p>
            </div>
            <div className="logo">
              <img src={loginLogo} alt="" />
            </div>
            {current === "home" && (
              <Content
                setCurrent={setCurrent}
                current={current}
                HandleClick={HandleClick}
              />
            )}
            {current === "login" && (
              <LoginForm
                setGameState={setGameState}
                setPassword={setPassword}
                setName={setName}
                name={name}
                password={password}
                setLoginobject={setLoginobject}
              />
            )}
            {current === "district" && <DfcForm />}
            {current === "easylogin" && (
              <EasyLogin
                setGameState={setGameState}
                setEasyLogin={setEasyLogin}
                easyLogin={easyLogin}
                setLoginobject={setLoginobject}
                setName={setName}
                setPassword={setPassword}
              />
            )}
            <div className="btm-text">
              <p className="btn-a">
                <a
                  href="https://web.bluestreakmath.com/users/sign_up"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dont Have An Account? Get
                  <span>BlueStreak!</span>
                </a>
              </p>
            </div>
          </form>

          <section>
            <div className="d-flex justify-center">
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </section>
        </section>
        <footer>
          <div className="footer-part">
            <div className="language">
              <div className="lang-inner">
                <h1 onClick={ChangeLang}>
                  {currentLang === "en" ? "Español" : "English"}
                </h1>
              </div>
              <div className="quit">
                <img src="images/full-bluestreak-logo.png" alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Form;
