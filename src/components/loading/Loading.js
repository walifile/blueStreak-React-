import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import loadingImg from "../../images/bluestreak-loading-logo.png";
import {
  SchooStatsURL,
  HeatMapStatsURL,
  TestAndMasteryStatsURL,
} from "../shared/Urls";
import FetchData from "../shared/Fetch";

const Procedures = ["+", "-", "/", "*", "F"];
const Loading = (props) => {
  const { t } = useTranslation();
  const [percentage, setPercentage] = useState("30%");
  const {
    para1,
    para2,
    setGameState,
    name,
    password,
    setAdditionMap,
    setsubtractionMap,
    setMultiplicationMap,
    setDivisionMap,
    setFractionMap,
  } = props;

  const LoadData = async () => {
    const schoolStata = await FetchData(
      `${SchooStatsURL}?access-token=&client=&uid=&build-version=15.00&email=district-dfc.${name}@bluestreakmath.com&clever_token=&password=${password}&game-mode=0&clever_token=&end=true`,
      "GET",
      `district-dfc.${name}@bluestreakmath.com`,
      password
    );
    setPercentage("60%");
    //console.log({ schoolStata: schoolStata });

    const testandmasterystats = await FetchData(
      `${TestAndMasteryStatsURL}?access-token=&client=&uid=&build-version=15.00&email=district-dfc.${name}@bluestreakmath.com&clever_token=&password=${password}&game-mode=0&clever_token=&end=true`,
      "GET",
      `district-dfc.${name}@bluestreakmath.com`,
      password
    );
    setPercentage("80%");
    //console.log({ testandmasterystats: testandmasterystats });

    await Promise.all(
      Procedures.map(async (proc) => {
        const path = `${HeatMapStatsURL}?access-token=&client=&uid=&build-version=15.00&email=district-dfc.${name}@bluestreakmath.com&clever_token=&password=${password}&game-mode=0&procedure=${proc}&clever_token=&end=true`;
        //console.log(path);
        const response = await FetchData(
          path,
          "GET",
          `district-dfc.${name}@bluestreakmath.com`,
          password,
          proc
        );
        const data = await response.response_Data;
        if (proc === "+") {
          setAdditionMap(data);
        } else if (proc === "-") {
          setsubtractionMap(data);
        } else if (proc === "*") {
          setMultiplicationMap(data);
        } else if (proc === "/") {
          setDivisionMap(data);
        } else if (proc === "F") {
          setFractionMap(data);
        }
      })
    );
    setPercentage("95%");
    setTimeout(() => {
      setGameState("dashboard");
    }, 1000);
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="bg-main">
      <div className="main-loading-screen">
        <div className="loading-bg">
          <img src={loadingImg} alt="loading-img" />
          <h3>
            {t("loading")} {percentage} <span className="ms-1"> ...</span>
          </h3>
          <p className="m-0">{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
