import React, { useState } from "react";
import Demo from "./Demo";

const Index = () => {
  const [state, setstate] = useState("home");

  const HandleClick = (e) => {
    const id = e.target.id;
    setstate(id);
  };
  return (
    <div>
      <Demo state={state} setstate={setstate} click={HandleClick} />
    </div>
  );
};

export default Index;
