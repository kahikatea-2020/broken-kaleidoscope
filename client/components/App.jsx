import React from "react";
import Pixel from "./Pixel";
import { v4 as uuidv4 } from "uuid";

const boxNum = 1092;
const boxSize = "45px";

const generateBoxes = (num) =>
  Array.from({ length: num }, (v, i) => (
    <Pixel key={uuidv4()} height={boxSize} width={boxSize} />
  ));

class App extends React.Component {
  state = {
    boxes: generateBoxes(boxNum),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ boxes: generateBoxes(boxNum) });
    }, 2000);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.state.boxes}
      </div>
    );
  }
}

export default App;
