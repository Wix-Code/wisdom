import React from 'react'
import Shawa from './Shawa'
import Shawam from './Shawam'
import Icons from '../homepage/Icons'

const Shawama = ({addtocart}) => {
  return (
    <div>
    <Shawa />
    <Shawam addtocart={addtocart} />
    <Icons />
  </div>
  )
}

export default Shawama