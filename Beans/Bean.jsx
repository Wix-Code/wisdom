import React from 'react'

const Bean = ({addtocart}) => {

  const beans =[
    {
      id: 1,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans1.png',
      add: '100',
    },
    {
      id: 2,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans.png',
      add: '100',
    }, 
    {
      id: 3,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans1.png',
      add: '100',
    },
    {
      id: 4,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans2.png',
      add: '100',
    },
    {
      id: 5,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans3.png',
      add: '100',
    },
    {
      id: 6,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/beans2.png',
      add: '100',
    },
  ]
  return (
  <div className='ricee'>
    <div className="rice">
      {beans.map((dat)=> {
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

export default Bean