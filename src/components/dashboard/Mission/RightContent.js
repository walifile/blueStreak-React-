import React from "react";
import MoonWalkerSS from "../../../images/MoonWalkerScreenshot.png";
import SpaceRacer from "../../../images/SpaceRacerScreenshot.png";
import EarthDefender from "../../../images/EarthDefenderScreenshot.png";

const RightContent = (props) => {
  const { game } = props;
  console.log("inside rightcontent" + game);
  return (
    <div className="left-content  text-center right-content">
      <div className="">
        <img
          src={
            game === "moon-walker"
              ? MoonWalkerSS
              : game === "space-racer"
              ? SpaceRacer
              : EarthDefender
          }
          alt=""
        />
      </div>
      <div>
        <p className="text-uppercase">
          {game === "moon-walker"
            ? "Moon Walker"
            : game === "space-racer"
            ? "Space-Racer"
            : "Earth Defender"}
        </p>
        <figure className="figure">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat
          repellat nulla facere nihil cumque recusandae excepturi totam quas ex!
        </figure>
      </div>
    </div>
  );
};

export default RightContent;
