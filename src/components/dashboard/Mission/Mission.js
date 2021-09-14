import React, { useState } from "react";
import GameImg from "./GameImg";
import Multiplayer from "./Multiplayer";
import RightContent from "./RightContent";
const Mission = () => {
  const [game, setGame] = useState("moonwalker");
  return (
    <>
      <div className="mission-content d-flex justify-content-center pt-5">
        <div className="">
          <div className="mission-content-main d-flex">
            <div className="left-content  text-center">
              <div className="py-3">
                <p>Single Player</p>
                <div className="singlePlayer d-flex justify-content-center">
                  <GameImg setGame={setGame} game="moon-walker" />
                  <GameImg setGame={setGame} game="space-racer" />
                  <GameImg setGame={setGame} game="earth-defender" />
                </div>
              </div>
              <div className="py-3">
                <p>MultiPlayer</p>
                <div className="singlePlayer d-flex justify-content-center">
                  <Multiplayer />
                  <Multiplayer />
                  <Multiplayer />
                </div>
              </div>
            </div>
            <RightContent game={game} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
