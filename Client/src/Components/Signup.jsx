import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add_User_Data, Normal_User } from "../Redux/action"

export const Signup = () => {
    const SignupUserData = useSelector((state)=>state.UserData)
    const dispatch =useDispatch()
    
    let navigate = useNavigate()
    let debounce
    let [signupForm, setSignupForm] = useState(true)
    let signupRef = useRef()

    function handlesignupRef() {
        if (signupRef.current.value == "user") {
            setSignupForm(true)
        } else {
            setSignupForm(false)
        }
    }

    function handlesubmit(e) {
        e.preventDefault()
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            fun(e)
        }, 500)
    }

    async function fun(e) {
        let toto = true

        if (SignupUserData.length == 0) {
            toto = true
        } else {
            let email = e.target[2].value
            SignupUserData.forEach((ele) => {
                if (ele.email == email) {
                    toto = false
                    return
                }
            }) 
        }

        if (toto) {
            let obj
            let val = e.target
            let userId = Math.ceil(Math.random() * 100000000 + 1)
            if (signupForm) {
                    obj = {
                    isBusinessOwner: false,
                    name: val[1].value,
                    email: val[2].value,
                    password: val[3].value,
                    userId
                }
            } 
            else {
                    obj = {
                    isBusinessOwner: true,
                    name: val[1].value,
                    email: val[2].value,
                    password: val[3].value,
                    userId
                }
                let businessId = Math.ceil(Math.random() * 1000 + 1)
                obj.business=[{
                    name: val[4].value,
                    location: val[5].value,
                    image: val[6].value,
                    price: parseInt(val[7].value),
                    id:businessId,
                    strike_price:parseInt(e.target[7].value) + parseInt(e.target[7].value) * .15,
                    rating:parseInt(Math.random() * (5-3) + 3).toFixed(1),
                    availableFor:e.target[8].value
                }]
                axios.put(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Home/${obj.business[0].id}.json`, obj.business[0])
                
            }
            axios.put(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${userId}.json`, obj)
                .then((res) => {
                    alert("Sign Up Successfull")
                    if(obj.isBusinessOwner){
                        dispatch(Add_User_Data(obj))
                    }else{
                        dispatch(Normal_User(obj))
                    }
                    

                    navigate('/Login')
                    // console.log(obj)
                })
            
        } 
        else {
            alert("User Already exist")
        }
    }

    return (<>
        <form onSubmit={handlesubmit}>
            <h2>SignUp using Email</h2>
            <select required ref={signupRef} onChange={handlesignupRef}>
                <option value="user">Select user Type</option>
                <option value="businessOwner">Business Provider</option>
                <option value="user">User</option>
            </select><br /><br />

            {
                signupForm ? (<>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Ashwani Kumar" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="study@gmail.com" required/>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" placeholder="upto 8 char" minLength={4} maxLength={8} required/>
                </>)
                    : (<>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Ashwani Kumar" required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="study@gmail.com" required/>
                        <label htmlFor="pass">Password:</label>
                        <input type="password" id="pass" placeholder="upto 8 char" minLength={4} maxLength={8} required/>
                        <label htmlFor="property">Property name: </label>
                        <input type="text" id="property" placeholder="villa, 2BHK, 3BHK, 1RK" required/>
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" placeholder="U.P 201306" required/>
                        <label htmlFor="address">image:</label>
                        <input type="text" id="address" placeholder="link only" required/>
                        <label htmlFor="price">Price(INR):</label>
                        <input type="text" id="price" placeholder="2000102" required/>
                        <label > 
                Available For: 
              <select required style={{padding:"5px", margin:"0", fontSize:"14px" , width:"6rem", borderRadius:"5px"}}>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
              </label>
                    </>)
            }





            <button type="submit">Submit</button><br />
            <span>Already have an account</span> <a style={{ color: 'blue' }}><button type="button" onClick={() => navigate('/Login')}>Login</button></a>
        </form>


    </>)
}





