import React from 'react'
import Cak from './Cak'
import Cake from './Cake'
import Icons from '../homepage/Icons'

const Cakes = ({addtocart, detail}) => {
  return (
    <div>
      <Cak />
      <Cake addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Cakes