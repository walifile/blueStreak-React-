import React from "react";
import { useState } from "react/cjs/react.development";
import Home from "./components/home/Form";
import Loading from "./components/loading/Loading";
import Dashboard from "./components/dashboard/index";
import Footer from "./components/dashboard/Footer";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, exercitationem!";
const App = () => {
  const [gameState, setGameState] = useState("home");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [easyLogin, setEasyLogin] = useState("");
  const [loginObject, setLoginobject] = useState({});
  const [additionMap, setAdditionMap] = useState({});
  const [subtractionMap, setsubtractionMap] = useState({});
  const [divisionMap, setDivisionMap] = useState({});
  const [multiplicationMap, setMultiplicationMap] = useState({});
  const [fractionMap, setFractionMap] = useState({});
  return (
    <>
      {gameState === "home" && (
        <Home
          setGameState={setGameState}
          setName={setName}
          setPassword={setPassword}
          setEasyLogin={setEasyLogin}
          name={name}
          password={password}
          easyLogin={easyLogin}
          setLoginobject={setLoginobject}
        />
      )}
      {gameState === "loading" && (
        <Loading
          para1={text}
          para2={text}
          setName={setName}
          setPassword={setPassword}
          setEasyLogin={setEasyLogin}
          name={name}
          password={password}
          easyLogin={easyLogin}
          loginObject={loginObject}
          setGameState={setGameState}
          setAdditionMap={setAdditionMap}
          setsubtractionMap={setsubtractionMap}
          setDivisionMap={setDivisionMap}
          setMultiplicationMap={setMultiplicationMap}
          setFractionMap={setFractionMap}
        />
      )}
      {gameState === "dashboard" && (
        <Dashboard
          setAdditionMap={setAdditionMap}
          setsubtractionMap={setsubtractionMap}
          setDivisionMap={setDivisionMap}
          setMultiplicationMap={setMultiplicationMap}
          setFractionMap={setFractionMap}
          additionMap={additionMap}
          subtractionMap={subtractionMap}
          divisionMap={divisionMap}
          multiplicationMap={multiplicationMap}
          fractionMap={fractionMap}
        />
      )}
    </>
  );
};

export default App;
