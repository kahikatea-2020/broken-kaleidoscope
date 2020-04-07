

import React from 'react'

const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor() {
        super()
    }
    state = {
        style: {
            height: '100px',
            width: '100px',
            backgroundColor: randomHexColor()
        }
    }
    clickHandler = evt => {
        this.setState({
            style: {
                height: '100px',
                width: '100px',
                backgroundColor: randomHexColor()
            }
        })
    }

    mouseOver = evt => {
        this.setState({
            style: {
                height: '100px',
                width: '100px',
                backgroundColor: 'green'
            }
        })
    }

    rightClick = evt => {
        evt.preventDefault()
        this.setState({
            style: {
                height: '100px',
                width: '100px',
                backgroundColor: 'black'
            }
        })
    }

    render() {
        return (
            <div 
            onMouseEnter={this.mouseOver} 
            onClick={this.clickHandler} 
            style={this.state.style}
            onContextMenu = {this.rightClick}
            
            >

            </div>
        )
    }
}

// const Pixel = () => {
//     return (
//         <div style = {{
//             height: '100px',
//             width: '100px',
//             backgroundColor: 'blue'
//         }}>

//         </div>
//     )
// }

export default Pixel