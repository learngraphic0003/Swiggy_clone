import axios from "axios"
import React, { useState } from "react";
import { Link } from "react-router-dom";




const SignUp = () => {

  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  

  const handlesubmit = (e)=> {
    e.preventDefault();

    axios.post("http://localhost:5000/api/auth/register", { name,  password })

    .then((result) => {
      console.log('hii')
      console.log(result); 
      if(result.data === "success"){
        // Navigate('/login');
      } else {
       alert("registration failed.please try again")
      }

    })
    .catch ( (err) => console.error("error :" ,err) );
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.leonardo.ai/users/98bc384d-9a96-4c44-aaf9-d5a65d0e0e14/generations/fa3f424b-9c80-454e-8375-9db658aa7953/Leonardo_Phoenix_10_A_vibrant_and_appetizing_fast_food_still_l_3.jpg')",
        
      }}
    >
      <div className="p-8 bg-[#ffffff8a] bg-opacity-80 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        <form onSubmit={ handlesubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
             onChange={ (e) => setName(e.target.value)} 
              />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={ (e) => setEmail(e.target.value)} 
              />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={ (e) => setpassword(e.target.value)}  
               />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-Black font-midium mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-700 font-bold hover:text-green-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
