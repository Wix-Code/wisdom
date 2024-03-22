import React from 'react'
import Egus from './Egus'
import Egusii from './Egusii'
import Icons from '../homepage/Icons'

const Egusi = ({detail,addtocart}) => {
  return (
    <div>
      <Egus />
      <Egusii addtocart={addtocart} detail={detail} />
      <Icons />
    </div>
  )
}

export default Egusi