import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Card from './Card';

const Topres = () => {

 
  const [data, setdata ] = useState([]);

  const fetchtopres = async () => {
   const response = await fetch('/data/restaurantChains.json')
   const apiData = await response.json();
   
   setdata(apiData)
  }
  
  useEffect(() => {
    fetchtopres()
  }, [])

  return (
    <>   
      <div className="max-w-[1200px] mx-auto px-4">  
        <div className="flex my-3 items-center justify-between flex-wrap">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            TOP restaurant chains in Delhi
          </div>
          <div className="flex gap-3">
            {/* Add any additional buttons or actions here */}
          </div>
        </div>
        <div  className=" flex gap-3 overflow-x-auto scroll-smooth py-4 ">
          {
            data.map((d, i) => {
              return <Card  {...d} key={i} />
            })
          } 
        </div>
      </div>
    </>
  )
}

export default Topres;
