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

    setInterval(this.changeToRandom, 2000)
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  changeToRandom = evt => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  changeToGreen = evt => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'green'
      }
    })
  }

  changeToBlack = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'black'
      }
    })
  }

  changeToWhite = evt => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'white'
      }
    })
  }

  changeToYellow = evt => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'yellow'
      }
    })
  }

  // changeTwoSeconds = () => {
  //   setInterval(this.changeToRandom(), 2000)
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

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
