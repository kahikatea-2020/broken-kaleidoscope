import React from 'react'
import Pixel from './Pixel'

const generateBoxes = (num) => {
let array= []
  for (var i = 0; i < num; i++) {
  array.push(<Pixel key={i} />
)}
return array
}

const Boxes = [
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />,
  <Pixel />
]

const App = () => {
  return (
    <div>
   {generateBoxes(10000)}
    </div>
  )
}

export default App
