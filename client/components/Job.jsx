import React from 'react'
const NativeListener = require('react-native-listener')

class Pixel extends React.Component {

  state = {
    style: {
      height: '50px',
      width: '50px',
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }
  }


  clickHandler = (evt) => {

    const newColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: newColor
      }
      })
  }

   handleMouse = (evt) => {
    const newColor = 'green'

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: newColor
      }
    })
  }

  handleRight = (evt) => {
    evt.preventDefault()
    const newColor = 'black'

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: newColor
      }
    })
  }

  handleDouble = (evt) => {
    const newColor = 'white'

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: newColor
      }
    })
  }

  handleDrag = (evt) => {
    const newColor = 'yellow'

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: newColor
      }
    })
  }






  render() { 
    return (
      <>
        <div id="kaleidoscope">
          <div id="clickable" style={
            this.state.style}
            onClick={this.clickHandler} onMouseEnter={this.handleMouse} onContextMenu={this.handleRight} onDoubleClick={this.handleDouble} onDragEnter={this.handleDrag}></div>
        </div>

      </>
    )
  }
}
export default Pixel