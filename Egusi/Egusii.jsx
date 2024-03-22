import React from 'react'

const Egusii = ({ addtocart}) => {

  const egusi =[
    {
      id: 1,
      tit:'White rice and stew',
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi.png',
      add: '110',
    },
    {
      id: 2,
      tit:'Egusi Soup',
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi1.png',
      add: '120',
    }, 
    {
      id: 3,
      tit:'Egusi Soup',
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi2.png',
      add: '140',
    },
    {
      id: 4,
      tit:'Egusi Soup',
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi3.png',
      add: '80',
    },
    {
      id: 5,
      tit:'Egusi Soup',
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi4.png',
      add: '100',
    },
    {
      id: 6,
      desc:'Your tasty and delicious Egusi soup',
      pic:'../div/egusi5.png',
      add: '125',
    },
  ]
  return (
    <div className='ricee'>
      <div className="rice">
        {egusi.map((dat)=> {
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

export default Egusii