import React from 'react'
import Icons from '../homepage/Icons'
import Bean from './Bean'
import Bea from './Bea'

const Beans = ({addtocart,detail}) => {
  return (
    <div>
      <Bea />
      <Bean addtocart={addtocart} detail={detail}/>
      <Icons />
    </div>
  )
}

export default Beans