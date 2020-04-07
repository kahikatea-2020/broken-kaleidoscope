

import React from 'react'

const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor() {
        super()
    }
    state = {
        style: {
            height: '20px',
            width: '20px',
            backgroundColor: randomHexColor()
        }
    }
    clickHandler = evt => {
        this.setState({
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: randomHexColor()
            }
        })
    }

    mouseOver = evt => {
        this.setState({
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: 'green'
            }
        })
    }

    rightClick = evt => {
        evt.preventDefault()
        this.setState({
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: 'black'
            }
        })
    }

    dblClick = evt => {
        this.setState({
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: 'white'
            }
        })
    }

    drag = evt => {
        this.setState({
            style: {
                height: '20px',
                width: '20px',
                backgroundColor: 'yellow'
            }
        })
    }




render() {
    return (
        <div
            onMouseEnter={this.mouseOver}
            onClick={this.clickHandler}
            style={this.state.style}
            onContextMenu={this.rightClick}
            onDoubleClick={this.dblClick}
            onDragEnter={this.drag}
        
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