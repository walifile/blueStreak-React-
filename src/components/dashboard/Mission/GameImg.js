import React, { useRef } from "react";
import MoonWalker from "../../../images/platform-icon.png";

const games = ["moon-walker", "space-racer", "earth-defender"];

const GameImg = (props) => {
  const { setGame, game } = props;

  const shadow = useRef(null);

  const GameClick = (e) => {
    
    const game = e.target.getAttribute("game");
    setGame(game);
    shadow.current.classList.add("active");

    games.forEach((g) => {
      if (g != game) {
        document.getElementById(g + "").classList.remove("active");
      }
    });
  };
  return (
    <>
      <div className="game-logo d-flex flex-column align-items-center">
        <img src={MoonWalker} alt="" game={game} onClick={GameClick} />
        <span
          id={game}
          ref={shadow}
          className={game === "moon-walker" ? "active" : ""}
        ></span>
      </div>
    </>
  );
};

export default GameImg;
