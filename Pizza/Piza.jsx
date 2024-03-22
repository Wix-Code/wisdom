import React from 'react'

const Piza = ({addtocart}) => {

  const pizza =[
    {
      id: 1,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza.png',
      add: '100',
    },
    {
      id: 2,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza1.png',
      add: '100',
    }, 
    {
      id: 3,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza2.png',
      add: '100',
    },
    {
      id: 4,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza3.png',
      add: '100',
    },
    {
      id: 5,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza4.png',
      add: '100',
    },
    {
      id: 6,
      tit:'Pizza',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/pizza5.png',
      add: '100',
    },
  ]
  return (
    <div className='ricee'>
      <div className="rice">
        {pizza.map((dat)=> {
          return(
            <div className="dat">
              <h2>{dat.tit}</h2>
              <h3>{dat.desc}</h3>
              <img src={dat.pic} alt="" />
              <button onClick={()=>addtocart(dat)}>add to cart <span>${dat.add}</span></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Piza