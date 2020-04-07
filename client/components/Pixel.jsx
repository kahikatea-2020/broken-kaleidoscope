import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = evt => {
    this.setState({
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  render () {
    return (
      <>
        <div onClick={this.clickHandler} style={this.state.style}></div>
      </>
    )
  }
}

export default Pixel
