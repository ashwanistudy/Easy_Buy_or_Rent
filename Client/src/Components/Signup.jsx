import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add_User_Data } from "../Redux/action"

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
        // let res = await axios.get(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json`)

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
                    propertyName: val[4].value,
                    location: val[5].value,
                    address: val[6].value,
                    price: val[7].value,
                    message: val[8].value,
                    userId
                }
            }
            axios.put(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${userId}.json`, obj)
                .then((res) => {
                    alert("Sign Up Successfull")
                    dispatch(Add_User_Data(obj))
                    navigate('/Login')
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
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" placeholder="Noida sector 167" required/>
                        <label htmlFor="price">Price(INR):</label>
                        <input type="text" id="price" placeholder="2000102" required/>
                        <label htmlFor="message">Message:</label>
                        <input type="text" id="message" placeholder="Sale or Rent" required/>
                    </>)
            }





            <button>Submit</button><br />
            <span>Already have an account</span> <a style={{ color: 'blue' }}><button type="button" onClick={() => navigate('/Login')}>Login</button></a>
        </form>


    </>)
}





