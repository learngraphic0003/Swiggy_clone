import React from 'react'

const Card = (props) => {
  
  

  
  return (
    
    <div className='w-[289px] shrink-0 grow py-5'>
        <div className=' group  h-[182px] rounded-lg overflow-hidden relative'>
          
            <img className=' group-hover:scale-110 duration-150 w-[100%] object-cover' src= {props.image}alt="" /> 
             <div className='image absolute w-full h-full top-0 flex items-end p-4  text-white font-bold text-[23px] tracking-tight '> {props.offer}
            </div>
         </div>
         <div className='mt-3 text-xl font-bold'> {props.title}</div>
         <div className=' flex  items-center'> <img src="https://icon-library.com/images/rating-xxl_105362.png"  alt=""  className='w-[20px] m-1'/> {props.rating}  <span className='ml-2'>{props.minTime}-{props.maxTime} mins</span></div>
        {props.name} <br /> {props.place}
         
    </div>
  )
}

export default Card
