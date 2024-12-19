import React, { useState } from "react";
import axios from 'axios'
import '../styling/AddEmp.css';


export const AddEmp=()=>{
    const [EmpeData , setEmpData] = useState({
        name : "" , 
        propertyName : "" ,
        contact : "" ,
        email : "" ,
        address :"",
        location :"" ,
        message : ""  
    })
   
    const [isopen , setopen ] =useState(false)
    
  const HandleChnage=(e)=>{
   const {name , value} = e.target
   setEmpData({...EmpeData , [name] : value})
   
  }

 async function HandleSubmit(e){
   e.preventDefault()
 
   try {
      const response = await axios.post("https://shre-5279e-default-rtdb.firebaseio.com/SHRE.json",EmpeData)
      console.log(response.data)
      alert("Registered Successfuly")
       setEmpData({name : "" , 
      propertyName : "" ,
      contact : "" ,
      email : "" ,
      address :"",
      location :"" ,
      message : ""  
       }
       )
       setopen(!isopen)
   } catch (error) {
    console.log("error" ,error)
    
   }
  }

     return (
        <>
  

        <div id="Container">
       <h1> Open the door to your next role </h1>
        <span> "Join us today and unlock opportunities for your next big move!"<button  id="fromButton" onClick={()=>setopen(!isopen)}> {isopen ?"Close the Regitration Form 🔴" :"Open Registration Form 🟢" }</button></span>
        </div>
       {
         isopen ? 
          <form onSubmit={HandleSubmit}>
          
         <lable > Enter Name <span style={{ color: 'red' }}>*</span>
         <input 
         name="name"
         placeholder="Enter Your full name"
         value={EmpeData.name}
         type="text"
         onChange={HandleChnage}
         required
         />
</lable>
<lable > Property Name <span style={{ color: 'red' }}>*</span>
          <input 
         placeholder="House Name"
         name="propertyName"
         value={EmpeData.propertyName}
         type="text"
         onChange={HandleChnage}
         required
         />
</lable>
         <lable > Contact Number <span style={{ color: 'red' }}>*</span>
           <input 
         placeholder="Contact Number"
         name="contact"
         value={EmpeData.contact}
         type="number"
         onChange={HandleChnage}
         required
         />
</lable>
         <lable > Email Address <span style={{ color: 'red' }}>*</span>
           <input 
         placeholder="Emial Address"
         name="email"
         value={EmpeData.email}
         type="text"
         onChange={HandleChnage}
         required
         />
</lable>
         <lable > Address <span style={{ color: 'red' }}>*</span>
           <input 
         placeholder="Address"
         name="address"
         value={EmpeData.address}
         type="text"
         onChange={HandleChnage}
         required
         />
</lable>
         <lable > Location<span style={{ color: 'red' }}>*</span>
          <input 
         placeholder="Current Location"
         name="location"
         value={EmpeData.location}
         type="text"
         onChange={HandleChnage}
         required
         />
</lable>
         <lable >
         Message
          <input 
         placeholder="Message"
         name="message"
         value={EmpeData.message}
         type="text"
         onChange={HandleChnage}
         />
</lable>
<div className="formbut">
        <input type="submit" />
        <button id="Closebut" onClick={()=>setopen(!isopen)}> Close</button>
        </div>
       </form>
       
        : ""
          
       }

        
        </>
     )

      
}
    

