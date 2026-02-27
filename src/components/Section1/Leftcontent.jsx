import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className=' flex flex-col justify-between h-full w-1/3   '>
      <Herotext/>
      <Arrow/>
      
    </div>
  )
}

export default Leftcontent
