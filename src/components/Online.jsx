import React, { useEffect, useState } from 'react'
import Card from './Card';

const Online = () => {

    const [data, setdata ] = useState([]);
    
      const fetchtopres = async () => {
       const response = await fetch('/data/restaurantChains.json')
       const apiData = await response.json();
       
       setdata(apiData)
      }
      
      
    useEffect ( 
      ()=> {
        fetchtopres()
      },[]
    )
  return (
    <div className="max-w-[1200px] mx-auto  ">  
     <div className="flex my-3 items-center justify-between">
                    <div className="text-[25px] font-bold text-
                    "> Restaurants with online food delivery in delhi</div>
                    
                  </div>
                  <div className='sm:grid grid-cols-4 gap-3  '> 
                    { data.map(
                      (d,i)=>
                      { return <Card  {...d}/>
                                  


                      }
                    )} </div>
      </div>
     

  )
}

export default Online
