import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return Array.from({length:10000}, (item,a) => <Pixel key={a}/>)
}

export default App
