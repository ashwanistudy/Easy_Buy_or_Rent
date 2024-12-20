import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const Signup = () => {
    let navigate = useNavigate()
    let debounce

    function handlesubmit(e){
        e.preventDefault()
        clearTimeout(debounce)
        debounce=setTimeout(()=>{
            fun(e)
        }, 2000)
    }


    async function fun(e){
        let toto=true
        let res = await axios.get(`https://ashwani-first-db-default-rtdb.firebaseio.com/Users.json`)
        if (res.data==null){
            toto=true
        }else{
            let email = e.target[0].value
                Object.values(res.data).forEach((ele)=>{
                    if(ele.email == email){
                        toto=false
                        return 
                    }
                })
        }

        if (toto){
            let val=e.target
            let obj = {
                email:val[0].value,
                password:val[1].value,
            }
    
            let userId = Math.ceil(Math.random() * 10000 +1)
            obj.userId=userId
    
            if(val[2].value == "businessOwner"){
                obj.isBusinessOwner=true
                
                axios.put(`https://ashwani-first-db-default-rtdb.firebaseio.com/Users/${userId}.json`, obj)
                .then((res)=>{
                    alert("Sign Up Successfull")
                    navigate('/Login')
                })
    
            }else{
                obj.isBusinessOwner=false
                axios.put(`https://ashwani-first-db-default-rtdb.firebaseio.com/Users/${userId}.json`, obj)
                .then((res)=>{
                    alert("Sign Up Successfull")
                    navigate('/Login')
                })
            }
        }else{
            alert("User Already exist")
        }

    }

    return (<>
    <form onSubmit={handlesubmit}>
        <h2>SignUp using Email</h2>
       
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="study@gmail.com"/>
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" placeholder="Min(4) max(8)"/>
        
        <select required>
            <option value="">Select user Type</option>
            <option value="businessOwner">Business Provider</option>
            <option value="user">User</option>
        </select><br /><br />

        <button>Submit</button><br />
         <span>Already have an account</span> <a style={{color:'blue'}}><button type="button" onClick={()=>navigate('/Login')}>Login</button></a>
    </form>


    </>)
}

