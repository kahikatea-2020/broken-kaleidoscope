import React from "react"

const width = "20px"
const height = width

const randomHexColor = () =>
	`#${Math.floor(Math.random() * 0x1000000)
		.toString(16)
		.padStart(6, 0)}`

class Pixel extends React.Component {
	constructor() {
		super()

		this.state = {
			style: {
				height,
				width,
				backgroundColor: randomHexColor(),
			},
		}
	}

	clickHandler = () => {
		this.setState({
			style: {
				height,
				width,
				backgroundColor: randomHexColor(),
			},
		})
	}

	render() {
		return (
			<>
				<div onMouseEnter={this.clickHandler} style={this.state.style}></div>
			</>
		)
	}
}

export default Pixel
