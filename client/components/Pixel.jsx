import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        backgroundColor: 'chartreuse',
        height: '50px',
        width: '50px'
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
