import React from 'react'
import Piz from './Piz'
import Piza from './Piza'
import Icons from '../homepage/Icons'

const Pizza = ({detail, addtocart}) => {
  return (
    <div>
      <Piz />
      <Piza addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Pizza