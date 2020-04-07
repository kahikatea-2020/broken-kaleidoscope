import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.state = {
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: randomHexColor()
      }
    }

    const clickHandler = evt => {
      this.setState({
        style: {
          backgroundColor: randomHexColor()
        }
      })
    }

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
