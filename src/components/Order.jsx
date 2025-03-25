import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Online from './Online';
import Footer from './Footer';

const Order = () => {

  const hii = ()=> {
    alert("your order is deliverd")
  }

 
const location = useLocation();  


  const {
    id, title, image, offer, rating, minTime, maxTime, name, place
  } = location.state || {}; 

  return (
    <>
    <div className='max-w-[1200px] mx-auto flex justify-center  mt-[20px] '>    
    <div className="max-w-xs bg-yellow-600 rounded-2xl shadow-lg overflow-hidden p-4 gap-5  w-[30%] ">
   
      { <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl " />}
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-white mt-2">{offer}</p>
        <p className=" text-white  text-lg font-bold mt-2">Rating: {rating}</p>
        <p className=" text-white text-lg mt-2">Delivery Time: {minTime}-{maxTime} mins</p>
        <p className=" text-white mt-2">{name} - {place}</p>
        
        <button  onClick = {hii} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Order Now
        </button>
      </div>
      
     
    </div>
    
    <div className="max-w-xs bg-black rounded-2xl shadow-lg overflow-hidden p-4 mx-2 w-[30%] ">
   
      { <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl " />}
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-white mt-2">{offer}</p>
        <p className=" text-white text-lg font-bold mt-2">Rating: {rating}</p>
        <p className=" text-white text-lg mt-2">Delivery Time: {minTime}-{maxTime} mins</p>
        <p className=" text-white mt-2">{name} - {place}</p>
        
        <button  onClick = {hii} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Order Now
        </button>
      </div>
      
     
    </div>
    </div>
    <Online/>
    <Footer/>
   
    </>
  );
};

export default Order;
