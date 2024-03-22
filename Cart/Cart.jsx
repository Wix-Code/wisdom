import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {

  const inc = (product) => {
    const exist = cart.find((dat) => {
      return dat.id === product.id
    }) 
    if(exist){
      setCart(
        cart.map((dat) => {
          return dat.id === product.id ? {...exist,qty : exist.qty + 1} : dat
        })
      )
    }
  }

  const dec = (product) => {
    const exist = cart.find((dat) => {
      return dat.id === product.id
    }) 
    if(exist){
      setCart(
        cart.map((dat) => {
          return dat.id === product.id ? {...exist,qty : exist.qty - 1} : dat
        })
      )
    }
  }

  const clear = (product) => {
    const exist = cart.find((dat) => {
      return dat.id === product.id
    }) 
    if(exist.qty > 0){
      setCart(
        cart.filter((dat) => {
          return dat.id !== product.id
        })
      )
    }
  }

  const total = cart.reduce((add, item) =>  add + item.qty * item.add, 0)
  return (
    <div className='cartt'>
      <div className="carrt">
        {
          cart.length === 0 && 
          <>
          <div className="ca">
            <h1>Your Cart is Empty</h1>
            <Link to="/menu"><button>Order Now</button></Link>
          </div>
          </>
        }
        <div className="cart2">
        {
          cart.map((dat)=>{
            return (
                <div className="cart3">
                  <div className="ima">
                    <div className='image'>
                      <img src={dat.pic} alt="" />
                    </div>
                    <div className="des">
                      <h2>{dat.tit}</h2>
                      <h3>{dat.desc}</h3>
                    </div>
                    <div className="but">
                      <button onClick={()=>clear(dat)}>X</button>
                    </div>
                  </div>
                  <div className="cart5">
                    <h3>{dat.desc}</h3>
                  </div>
                  <div className="car1">
                      <div className="inp">
                        <button disabled={dat.qty <= 1} onClick={()=> dec(dat)}>-</button>
                        <p>{dat.qty}</p>
                        <button onClick={()=>inc(dat)}>+</button>
                      </div>
                      <p>${dat.add * dat.qty}</p>
                  </div>
                </div>
            )
          })
        }
        { cart.length > 0 &&
         (
          <div className='total'>
            <p>Total : ${total}</p>
          <Link to='/check'>
            <button className='button'>CHECK OUT</button>
          </Link>
        </div>
        ) 
        }
       </div>
       </div>
    </div>
  )
}

export default Cart