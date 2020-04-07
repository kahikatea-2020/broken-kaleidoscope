import React from "react";
import Pixel from "./Pixel";

const generateBoxes = (num) => {
  let array = [];
  for (var i = 0; i < num; i++) {
    array.push(<Pixel key={i} />);
  }
  return array;
};

class App extends React.Component {
  state = {
    boxes: generateBoxes(950),
  };

  componentDidMount() {
    setInterval(() => {
      window.location.reload(false);
    }, 2000);
  }

  render() {
    return (
      <div>
        <div>{this.state.boxes}</div>
        <div>{this.state.boxes}</div>
        <div>{this.state.boxes}</div>
        <div>{this.state.boxes}</div>
        <div>{this.state.boxes}</div>
      </div>
    );
  }
}

export default App;
