import React from 'react'

class Pixel extends React.Component {



  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  handleChangeColor = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: '30px',
        width: '30px'
      }
    })
  }

  flash = () => {
    setInterval(this.handleChangeColor(), 2000)
  }

  handleClick = () => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: '30px',
        width: '30px'
      }
    })
  }
  handleContext = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '30px',
        width: '30px'
      }
    })
  }
  handleDrag = () => {
    this.setState({
      style: {
        backgroundColor: 'chartreuse',
        height: '30px',
        width: '30px'
      }
    })
  }



  state = {
    style: {
      backgroundColor: this.randomHexColor(),
      height: '30px',
      width: '30px'
    }
  }

  render() {
    return (
      <div
        onMouseEnter={setInterval(this.handleChangeColor, 2000)}
        onClick={this.handleClick}
        onContextMenu={this.handleContext}
        onDragEnter={this.handleDrag}
        style={this.state.style}></div>
    )
  }
}

export default Pixel
