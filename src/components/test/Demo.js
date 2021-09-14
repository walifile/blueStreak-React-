import React from "react";

const Demo = (props) => {
  const { state, setstate, click } = props;
  // const { state, setstate } = props;
  console.log(props);
  return (
    <div>
      {state === "home" && "I m Home"}
      {state === "abc" && "I m abc"}

      <button id="abc" onClick={click}>
        Click
      </button>
      {/* I m Demo {country} {state} */}
    </div>
  );
};

export default Demo;
