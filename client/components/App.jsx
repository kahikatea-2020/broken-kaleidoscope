import React from "react";
import Pixel from "./Pixel";

const generateBoxes = (num) => {
  let array = [];
  for (var i = 0; i < num; i++) {
    array.push(<Pixel key={i} />);
  }
  return array;
};

const App = () => {
  return (
    <>
      <div>{generateBoxes(950)}</div>
      <div>{generateBoxes(950)}</div>
      <div>{generateBoxes(950)}</div>
      <div>{generateBoxes(950)}</div>
      <div>{generateBoxes(950)}</div>
    </>
  );
};

export default App;
