import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  changeToRandom = evt => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  changeToGreen = evt => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'green'
      }
    })
  }

  changeToBlack = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'black'
      }
    })
  }

  changeToWhite = evt => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'white'
      }
    })
  }

  changeToYellow = evt => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'yellow'
      }
    })
  }

  render () {
    return (
      <>
        <div
          style={this.state.style}
          onClick={this.changeToRandom}
          onMouseEnter={this.changeToGreen}
          onContextMenu={this.changeToBlack}
          onDoubleClick={this.changeToWhite}
          onDragEnter={this.changeToYellow}
        >
        </div>
      </>
    )
  }
}

export default Pixel
