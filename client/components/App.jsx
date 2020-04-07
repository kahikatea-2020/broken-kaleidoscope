import React from "react"
import Pixel from "./Pixel"

let counter = 0
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pixels: this.generatePixels(),
    }
  }

  generatePixels = () => {
    let pixels = []

    for (let i = 0; i < 1000; i++) {
      pixels.push(<Pixel key={counter++} />)
    }

    this.setState({ pixels: pixels })
    setTimeout(this.generatePixels, 50)
  }

  render() {
    return <div className='kaleidoscope'>{this.state.pixels}</div>
  }
}

export default App
