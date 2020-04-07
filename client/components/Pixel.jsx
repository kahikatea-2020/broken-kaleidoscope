import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        height: 20,
        width: 20,
        backgroundColor: randomHexColor()
      }
    }
  }

changeColour = (event) => {
  const style = {
    height: 20,
    width: 20,
    backgroundColor: randomHexColor()
  }
  this.setState({
    style
  })
}

changeGreen = (event) => {
  const style = {
    height: 20,
    width: 20,
    backgroundColor: 'green'
  }
  this.setState({
    style
  })
}

changeBlack = (event) => {
  const style = {
    height: 20,
    width: 20,
    backgroundColor: 'black'
  }
  this.setState({
    style
  })
}


changeWhite = (event) => {
  const style = {
    height: 20,
    width: 20,
    backgroundColor: 'white'
  }
  this.setState({
    style
  })
}

changeYellow = (event) => {
  const style = {
    height: 20,
    width: 20,
    backgroundColor: 'yellow'
  }
  this.setState({
    style
  })
}



  
  render() {
    return (
      <div 
        onClick={this.changeColour} 
        onMouseEnter={this.changeGreen}
        onContextMenu={this.changeBlack}
        onDoubleClick={this.changeWhite}
        onDragEnter={this.changeYellow}
        style ={this.state.style}>
      </div>
    )
  }
}

export default Pixel