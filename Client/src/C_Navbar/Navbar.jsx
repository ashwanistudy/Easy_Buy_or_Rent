import { Link } from "react-router-dom"
import './Navbar.css'


function Navbar(){
    return (
        
      <>
    <div className="watermark-div">
      <div id="OuterNav">
    
    <div id="innerNav">
    <div  id="logo">SHRE</div>
    <nav>
        <div className="Link-points">
     <Link to='/' style={{color:"white"}} >Home</Link>
     </div>
     <div className="Link-points">
     <Link to='/AddEmp'  style={{color:"white"}}>Start Business</Link>
     </div>
     <div className="Link-points">
     <Link to='/UserFeedback' style={{color:"white"}}>Feedback</Link>
     </div>
     </nav> 
   
     </div>
    
     </div>
    </div>


       </>

    )
}

export default Navbar