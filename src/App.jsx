import React from 'react'
import Home from './page/Home'
import Login from './page/Login'

import { Route, Routes } from 'react-router-dom'
import HelpCenter from './page/HelpCenter'
import SignUp from './page/SignUp'
const App = () => {
  return (
    <>
    
    <Routes>
    

       <Route path = '/'element= { <Home/>} />
       <Route path = '/Login'element= { <Login/>} />
       <Route path = '/HelpCenter'element= { <HelpCenter/>} />
       <Route path = '/SignUp' element = { <SignUp/>}/> 

    </Routes>
     
   

    

  
    </>
  )
}

export default App
