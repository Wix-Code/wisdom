import React from 'react'
import Snac from './Snac'
import Snack from './Snack'
import Icons from '../homepage/Icons'

const Snacks = ({addtocart,detail}) => {
  return (
    <div>
      <Snac />
      <Snack addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Snacks