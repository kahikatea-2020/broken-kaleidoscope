import React from "react";
import Pixel from "./Pixel";
import { v4 as uuidv4 } from "uuid";

const generateBoxes = (num) =>
  Array.from({ length: num }, (v, i) => (
    <Pixel key={uuidv4()} height="40px" width="40px" />
  ));

class App extends React.Component {
  state = {
    boxes: generateBoxes(1082),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ boxes: generateBoxes(1082) });
    }, 2000);
  }

  render() {
    return <div>{this.state.boxes}</div>;
  }
}

export default App;
