import React from 'react'
import Drin from './Drin'
import Drink from './Drink'
import Icons from '../homepage/Icons'

const Drinks = ({detail,addtocart}) => {
  return (
    <div>
      <Drin />
      <Drink addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Drinks