

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './C_Navbar/Navbar'
import { HomePage } from './Components/Home';
import { AddEmp } from './Components/AddEmp';
import { UserFeedback } from './Components/UserFeedback';
import Footer1 from './footer1/Footer1';

function App() {

  return (
    <>
  
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/AddEmp' element={<AddEmp/>} />
      <Route path='/UserFeedback' element={<UserFeedback/>}/>
    </Routes>
  </Router>
    <Footer1/>
    </>
  )
}

export default App
