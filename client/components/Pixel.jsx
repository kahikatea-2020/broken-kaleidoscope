import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: 'bisque'
      }
    }
  }
  render () {
    return (
      <div style={this.state.style}></div>
    )
  }
}

export default Pixel
