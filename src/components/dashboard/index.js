import React, { useState } from "react";
import Header from "./Header";
import Mission from "./Mission/Mission";
import Footer from "./Footer";

const Dashboard = (props) => {
  const [tab, setTab] = useState("Mission");
  const {
    additionMap,
    setAdditionMap,
    subtractionMap,
    setsubtractionMap,
    divisionMap,
    setDivisionMap,
    multiplicationMap,
    setMultiplicationMap,
    fractionMap,
    setFractionMap,
  } = props;
  // console.log(props);
  return (
    <div className="bg-main">
      <Header setTab={setTab} />
      {tab === "Mission" && <Mission />}
      {tab === "Agent" && <h1>Agent</h1>}
      {tab === "progress" && <h1>progress</h1>}
      {tab === "Leaderboard" && <h1>Leaderboard</h1>}
      <Footer />
    </div>
  );
};

export default Dashboard;
