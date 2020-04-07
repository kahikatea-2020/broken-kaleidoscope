import React from "react"
import Pixel from "./Pixel"

const App = () => {
	return Array.from({ length: 10000 }, (i) => <Pixel key={i} />)
}

export default App
