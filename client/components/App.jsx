import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return Array.from({length: 500}).fill(<Pixel />)
}

export default App
