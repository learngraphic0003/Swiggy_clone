import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState(""); // Initialize state for email
  const [password, setPassword] = useState(""); // Initialize state for password
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => console.error("Error:", err));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center background ">
      <form onSubmit={handleSubmit} id="shubham" className="top bg-transparent p-8 rounded-xl border-2 border-white backdrop-blur-md shadow-lg w-full max-w-sm">

        <h1 className="text-center text-2xl text-aqua font-bold">Login</h1>

        <div className="input-box relative w-full h-12 my-8">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full bg-transparent text-white rounded-full pl-6 pr-12 text-lg "
            style={ {border:'2px solid #ffff'}}
            id="Username"

          />
          <i className="bx bxs-user-pin absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
        </div>

        <div className="input-box relative w-full h-12 my-8">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-full bg-transparent text-white rounded-full pl-6 pr-12 text-lg"
            id="password"
            style={ {border:'2px solid #ffff'}}
          />
          <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
        </div>

        <div className="remember flex justify-between text-sm my-4">
          <label className="flex items-center">
            <input type="checkbox" className="accent-white mr-2" />
            Remember me
          </label>
          
          <Link to = '/SignUp' className='text-blue-700 hover:text-green-400'>  create a account  </Link>


        </div>

<Link  to = '/'>   
        <button
          
          className="w-full h-12 bg-white text-gray-800 rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all solid"
        >
          Login
        </button>
        </Link>

        <p className="text-center mt-4" id="Text"></p>
      </form>
    </div>
  );
};

export default Login;
