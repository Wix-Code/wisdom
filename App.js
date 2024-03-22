import React, { useState } from 'react'
import './App.css'
import Rout from './Rout'
import Navbar from './navbar/Navbar'
import Footer from './Footer/Footer'
import Data from './Data'

const App = () => {
  const[detail, setDetail] =useState(Data)
  const [cart, setCart] = useState ([])

 const addtocart = (product) => {
    const exist = cart.find((x) => {
    return x.id === product.id
  })
  if (exist) {
    alert('Already Added')
  } 
  else {
    setCart ([...cart, {...product, qty : 1 }])
    alert('Added')
  }
 }
 console.log(cart)
  
  return (
    <div>
      <Navbar cart={cart}/>
      <Rout addtocart={addtocart} detail={detail} setDetail={setDetail} cart={cart} setCart={setCart}/>
      <Footer />
    </div>
  )
}

export default App