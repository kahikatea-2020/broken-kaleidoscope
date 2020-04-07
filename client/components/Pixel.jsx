import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  state = {
    height: this.props.height,
    width: this.props.width,
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
        style={this.state}
      ></div>
    );
  }
}

export default Pixel;
