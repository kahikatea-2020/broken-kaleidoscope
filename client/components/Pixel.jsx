import React from 'react'

class Pixel extends React.Component {

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    handleChangeColor = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: '50px',
        width: '50px'
      }
    })
  }
  handleClick = () => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: '50px',
        width: '50px'
      }
    })
  }
  handleContext = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '50px',
        width: '50px'
      }
    })
  }
  handleDrag = () => {
    this.setState({
      style: {
        backgroundColor: 'chartreuse',
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
      <div 
      onMouseEnter={this.handleChangeColor} 
      onClick={this.handleClick} 
      onContextMenu = {this.handleContext} 
      onDragEnter = {this.handleDrag}
      style={this.state.style}></div>
    )
  }
}

export default Pixel
