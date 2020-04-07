

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
                backgroundColor: randomHexColor()
            }
        })
    }
    
    render() {
        return (
            <div onClick={this.clickHandler} style = {this.state.style}></div>
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