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

  changeToRandom = evt => {
    this.setState({
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  changeToGreen = evt => {
    this.setState({
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: 'green'
      }
    })
  }

  changeToBlack = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: 'black'
      }
    })
  }

  changeToWhite = evt => {
    this.setState({
      style: {
        height: '5em',
        width: '5em',
        backgroundColor: 'white'
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
        >
        </div>
      </>
    )
  }
}

export default Pixel
