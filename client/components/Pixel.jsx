import React from 'react'

class Pixel extends React.Component {

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: '50px',
        width: '50px'
      }
    })
  }

  state = {
    style: {
      backgroundColor: this.randomHexColor(),
      height: '50px',
      width: '50px'
    }
  }

  render() {
    return (
      <div onMouseOver={this.handleClick} style={this.state.style}></div>
    )
  }
}

export default Pixel
