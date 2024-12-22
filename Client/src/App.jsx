import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './C_Navbar/Navbar'
import { AddEmp } from './Components/AddEmp';
import { UserFeedback } from './Components/UserFeedback';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import CardPage from './Components/CardPage';
import AboutUs from './Components/AboutUs';
import { Login } from './Components/Longin';
import { Signup } from './Components/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { Fetch_Home_Page_Data, Fetch_User_Data } from './Redux/action';
import { UserBusiness } from './Components/User_Business';
import Help from './Components/help.JSX';


function App() {

  const [NFVisible, setNFvisible] = useState(true)
  const dispatch = useDispatch()
  

  useEffect(() => {
    setNFvisible(true)
    dispatch(Fetch_User_Data())
    dispatch(Fetch_Home_Page_Data())
  }, [])

  return (
    <>

      <Router>
        {NFVisible ? <Navbar /> : ""}
        <Routes>
          <Route path='/' element={< CardPage />} />
          <Route path='/AddEmp' element={<AddEmp />} />
          <Route path='/UserFeedback' element={<UserFeedback />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/About us' element={<AboutUs />} />
          <Route path='/businessList' element={<UserBusiness/>} />
          <Route path='/Help' element={<Help/>} />
        </Routes>
      </Router>
      {NFVisible ? <Footer/> : ""}


    </>
  )
}

export default App
