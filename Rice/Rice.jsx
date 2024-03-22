import React from 'react'
import Icons from '../homepage/Icons'
import Ricee from './Ricee'
import Ric from './Ric'

const Rice = ({addtocart, detail}) => {
  return (
    <div>
      <Ric />
      <Ricee addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Rice