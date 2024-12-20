

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './C_Navbar/Navbar'
import { AddEmp } from './Components/AddEmp';
import { UserFeedback } from './Components/UserFeedback';
import Footer1 from './footer1/Footer1';
import AuthPage from './Components/Authentication';
import {useState} from  'react'
import CardPage from './Components/CardPage'; 
import AboutUs from './Components/AboutUs';



function App() {
const [NFVisible , setNFvisible] = useState(true)


  return (
    <>

  <Router>
      {NFVisible ? <Navbar/> : "" } 
    <Routes>
    <Route path='/' element={< CardPage/>} />
      <Route path='/AddEmp' element={<AddEmp/>} />
      <Route path='/UserFeedback' element={<UserFeedback/>}/>
      <Route path='/Sign up page' element={<AuthPage NFVisible={NFVisible} setNFvisible={setNFvisible}/>}/>
      <Route path='/About us' element={<AboutUs/>} />
    </Routes>
  </Router>
  {NFVisible ?<Footer1/> : "" } 
  

    </>
  )
}

export default App
