import React from "react";
import Pixel from "./Pixel";
import { v4 as uuidv4 } from "uuid";

const generateBoxes = (num) =>
  Array.from({ length: num }, (v, i) => <Pixel key={uuidv4()} />);

class App extends React.Component {
  state = {
    boxes: generateBoxes(950),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ boxes: generateBoxes(950) });
    }, 1000);
  }

  render() {
    return <div>{this.state.boxes}</div>;
  }
}

export default App;
