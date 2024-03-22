import React from 'react'
import Icons from '../homepage/Icons'
import Ogbon from './Ogbon'
import Ogbo from './Ogbo'

const Ogbono = ({addtocart, detail}) => {
  return (
    <div>
      <Ogbo />
      <Ogbon addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Ogbono