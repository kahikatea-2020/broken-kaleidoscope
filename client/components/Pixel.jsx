import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  state = {
    style: {
      height: "20px",
      width: "20px",
      backgroundColor: randomHexColor(),
    },
  };

  handleClick = () => {
    this.setState({
      style: {
        height: "20px",
        width: "20px",
        backgroundColor: randomHexColor(),
      },
    });
  };

  render() {
    return <div onClick={this.handleClick} style={this.state.style}></div>;
  }
}

export default Pixel;
