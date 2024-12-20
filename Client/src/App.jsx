

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './C_Navbar/Navbar'
import { AddEmp } from './Components/AddEmp';
import { UserFeedback } from './Components/UserFeedback';
import Footer1 from './footer1/Footer1';
import AuthPage from './Components/Authentication';
import {useEffect, useState} from  'react'
import CardPage from './Components/CardPage'; 
import AboutUs from './Components/AboutUs';
import { Login } from './Components/Longin';
import { Signup } from './Components/Signup';



function App() {
const [NFVisible , setNFvisible] = useState(true)

useEffect(()=>{
  setNFvisible(true)
 
},[])

  return (
    <>

  <Router>
      {NFVisible ? <Navbar/> : "" } 
    <Routes>
    <Route path='/' element={< CardPage/>} />
      <Route path='/AddEmp' element={<AddEmp/>} />
      <Route path='/UserFeedback' element={<UserFeedback/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About us' element={<AboutUs/>} />
      
    </Routes>
  </Router>
  {NFVisible ?<Footer1/> : "" } 
  

    </>
  )
}

export default App
