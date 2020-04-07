import React from "react"

class Pixel extends React.Component {
  state = {}

  constructor(props) {
    super(props)
    this.state.style = {
      height: "30px",
      width: "30px",
      backgroundColor: this.randomHexColor(),
    }
  }

  //   componentDidMount() {
  //     this.Repeat()
  //   }
  Handler = (evt) => {
    this.setState({
      style: {
        height: "30px",
        width: "30px",
        backgroundColor: this.randomHexColor(),
      },
    })
  }
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`

  render() {
    return <div onMouseEnter={this.Handler} style={this.state.style}></div>
  }
}

export default Pixel
