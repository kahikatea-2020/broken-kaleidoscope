import React from "react";
import Pixel from "./Pixel";

const generateBoxes = (num) =>
  Array.from({ length: num }, (v, i) => <Pixel key={i} />);

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
    return <div>{this.state.boxes}</div>;
  }
}

export default App;
