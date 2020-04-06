import React from 'react'


class Pixel extends React.Component {
    state = {
        style: {
            height: '100px',
            width: '100px',
            backgroundColor: 'red'
        }
    }

    render() {
        return (
            <div style = {this.state.style}></div>
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