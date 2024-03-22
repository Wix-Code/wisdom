import React from 'react'

const Shawam = ({addtocart}) => {
  const shawa =[
    {
      id: 1,
      tit:'White rice and stew',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa.png',
      add: '45',
    },
    {
      id: 2,
      tit:'Shawarma',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa1.png',
      add: '45',
    }, 
    {
      id: 3,
      tit:'Shawarma',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa2.png',
      add: '45',
    },
    {
      id: 4,
      tit:'Shawarma',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa3.png',
      add: '60',
    },
    {
      id: 5,
      tit:'Shawarma',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa4.png',
      add: '45',
    },
    {
      id: 6,
      tit:'Shawarma',
      desc:'Choose your perfect meal combination with Jollof, Fried, or White Rice, served alongside your preferred stew and three pieces of meat. Round off your dish with Plantain, Beans, or enjoy the best of both.',
      pic:'../div/shawa5.png',
      add: '50',
    },
  ]
  return (
    <div className='ricee'>
      <div className="rice">
        {shawa.map((dat)=> {
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

export default Shawam