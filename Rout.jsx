import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Beans from './Beans/Beans'
import Cart from './Cart/Cart'
import HomePage from './homepage/HomePage'
import Rice from './Rice/Rice'
import Mainmenu from './Menu/Mainmenu'
import Cakes from './Cakes/Cakes'
import Egusi from './Egusi/Egusi'
import Ogbono from './Ogbono/Ogbono'
import Snacks from './Snacks/Snacks'
import Pizza from './Pizza/Pizza'
import Drinks from './Drinks/Drinks'
import Signup from './Register/Signup'
import Regis from './Register/Regis'
import Register from './Register/Register'
import Shawama from './Shawa/Shawama'
import Chectout from './Cart/Chectout'

const Rout = ({addtocart, cart, detail,setCart}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/menu/rice'  element={<Rice addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/beans'  element={<Beans addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/ogbono'  element={<Ogbono addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/cakes'  element={<Cakes addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/egusi'  element={<Egusi addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/drinks'  element={<Drinks addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/pizza'  element={<Pizza addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/snacks'  element={<Snacks addtocart={addtocart} detail={detail}/>}/>
        <Route path='/menu/shawama'  element={<Shawama addtocart={addtocart} detail={detail}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='/menu' element={<Mainmenu />} />
        <Route path="/menu/register" element={<Register />}/>
        <Route path='/menu/signup' element={<Signup />} />
        <Route path='/regis' element={<Regis />} />
        <Route path='/check' element={<Chectout />} />
      </Routes>
    </div>
  )
}

export default Rout