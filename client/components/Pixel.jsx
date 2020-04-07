import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  state = {
    backgroundColor: randomHexColor(),
  };

  handleClick = () => {
    this.setState({ backgroundColor: randomHexColor() });
  };

  handleMouseEnter = (e) => {
    this.setState({ backgroundColor: "green" });
  };

  handleContextMenu = (e) => {
    e.preventDefault();
    this.setState({ backgroundColor: "black" });
  };

  handleDoubleClick = (e) => {
    this.setState({ backgroundColor: "white" });
  };

  handleDrageEnter = () => {
    this.setState({ backgroundColor: "yellow" });
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onContextMenu={this.handleContextMenu}
        onDoubleClick={this.handleDoubleClick}
        onDragEnter={this.handleDrageEnter}
        style={{
          height: "70px",
          width: "70px",
          backgroundColor: this.state.backgroundColor,
        }}
      ></div>
    );
  }
}

export default Pixel;
