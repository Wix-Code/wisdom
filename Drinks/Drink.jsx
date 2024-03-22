import React from 'react'

const Drink = ({addtocart}) => {

  const wine =[
    {
      id: 1,
      tit:'Wine',
      desc:'30% Alcoholic',
      pic:'../div/wine.png',
      add: '100',
    },
    {
      id: 2,
      tit:'Wine',
      desc:'20.5% Alcoholic',
      pic:'../div/wine1.png',
      add: '170',
    }, 
    {
      id: 3,
      tit:'Wine',
      desc:'10.5% Alcoholic',
      pic:'../div/wine2.png',
      add: '180',
    },
    {
      id: 4,
      tit:'Wine',
      desc:'35% Alcoholic',
      pic:'../div/wine3.png',
      add: '180',
    },
    {
      id: 5,
      tit:'Wine',
      desc:'28% Alcoholic',
      pic:'../div/wine4.png',
      add: '200',
    },
    {
      id: 6,
      tit:'Wine',
      desc:'20% Alcoholic',
      pic:'../div/wine5.png',
      add: '200',
    },
  ]
  return (
    <div className='ricee'>
      <div className="rice">
        {wine.map((dat)=> {
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

export default Drink