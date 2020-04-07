import React from 'react'

import Pixel from './Job'

//const arr = new Array(1000).fill( <Pixel />)
const arr = [...new Array(1000)].map(x => <Pixel />)
console.log(arr)

const App = () => {
  return (
    <>
      <div><h1>Click to Change Color</h1></div>
      {arr}
      
    </>
  )
}

export default App
