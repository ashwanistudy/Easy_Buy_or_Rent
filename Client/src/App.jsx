import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
    let [data, setData]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000')
        .then((res)=>setData(res.data))
        
    },[])

 return (
  <div>

    {
        data.map((ele, i)=>{
            return (
                <h2 key={i}> {ele.name}***********{ele.subject}</h2>
            )
        })
    }


  </div>
 )
}

export default App
