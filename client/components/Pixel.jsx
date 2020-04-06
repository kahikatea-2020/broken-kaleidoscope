import React from 'react'

class Pixel extends React.Component {

  constructor() {
    super()
    const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    let color = randomHexColor()
    console.log(color)
    this.state = {
      style: {
        backgroundColor: color,
        height: '50px',
        width: '50px'
      }
    }
  }
  render() {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
