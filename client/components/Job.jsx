import React from 'react'

class Pixel extends React.Component {

  state = {
    style: {
      height: '50px',
      width: '50px',
      color: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    }
  }


  clickHandler = (evt) => {

    const newColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    this.setState({
      style: {
        height: '50px',
        width: '50px',
        color: newColor
      }
      })
  }



  render() {
    return (
      <>
        <div id="kaleidoscope">
          <div id="clickable" style={{
            height: this.state.style.height, width: this.state.style.width, backgroundColor: this.state.style.color
          }} onClick={this.clickHandler}></div>
        </div>

      </>
    )
  }
}




export default Pixel