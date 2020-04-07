import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  const arr = Array(1000).fill(0)
  return (
    <>
      {arr.map((x, idx) => {
        return <Pixel key={idx}/>
      })
      }
    </>
  )
}

export default App
