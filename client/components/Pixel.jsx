import React from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component{

  state = {
    style:{
      backgroundColor: randomHexColor(),
      width: '8px',
      height: '8px',
      borderRadius: '2px',
      }
  }

 clickHandler = evt => {
   this.setState({
     style:{
      ...this.state.style,
      backgroundColor: randomHexColor(),
     }
   })
 }

 mouseEnter = evt => {
   this.setState({
     style:{
        ...this.state.style,
        backgroundColor: 'green'
     }
   })
 }

 doubleClick = evt => {
  this.setState({
    style:{
       ...this.state.style,
       backgroundColor: 'white'
      }
    })
  }

  dragEnter = evt => {
    this.setState({
      style:{
         ...this.state.style,
         backgroundColor: 'yellow'
        }
      })
  }

  render(){
    return(
      <div style={this.state.style}
          onClick={this.clickHandler}
          onMouseEnter={this.mouseEnter}
          onDoubleClick={this.doubleClick}
          onDragEnter={this.dragEnter}
          >
      </div>
    )
  }

}

export default Pixel