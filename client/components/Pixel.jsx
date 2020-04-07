import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
const height = 20
const width = 20

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        height,
        width,
        backgroundColor: randomHexColor()
      }
    }
    setInterval(this.changeColour, 2000)
  }

  changeColour = (event) => {
    const style = {
      height,
      width,
      backgroundColor: randomHexColor()
    }
    this.setState({
      style
    })
  }

  changeGreen = (event) => {
    const style = {
      height,
      width,
      backgroundColor: 'green'
    }
    this.setState({
      style
    })
  }

  changeBlack = (event) => {
    event.preventDefault()
    const style = {
      height,
      width,
      backgroundColor: 'black'
    }
    this.setState({
      style
    })
  }

  changeWhite = (event) => {
    const style = {
      height,
      width,
      backgroundColor: 'white'
    }
    this.setState({
      style
    })
  }

  changeYellow = (event) => {
    const style = {
      height,
      width,
      backgroundColor: 'yellow'
    }
    this.setState({
      style
    })
  }

  render () {
    return (
      <div
        onClick={this.changeColour}
        onMouseEnter={this.changeGreen}
        onContextMenu={this.changeBlack}
        onDoubleClick={this.changeWhite}
        onDragEnter={this.changeYellow}
        style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
