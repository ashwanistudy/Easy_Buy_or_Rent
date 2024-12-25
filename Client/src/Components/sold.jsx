import React, { useState } from 'react';
import '../Styling/sold.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Business } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

function Sold() {
  let localUser = useSelector((state) => state.LocalUser)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  // State for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State for form data
  // const [postdata, setpostData] = useState({
    
  //   image: null,
  //   location: "",
  //   name: "",
  //   address:"" ,
    
  //   price: "",
  //   message:"",
    
  // });
 
  // Open the popup
  const openPopup = () => setIsPopupOpen(true);

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };


  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setpostData({ ...postdata, [name]: value });

  // };


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setpostData({ ...postdata, image: file });
  // };


  // const resetForm = () => {
  //   setpostData({
  //     propertyName: "",
  //     address:"",
  //     location: "",
  //     price: "",
  //     message:"",
  //     // image: null,
  //   });
  // };

  // Handle add post submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId= Math.ceil(Math.random() * 1000 + 1)
    const obj ={
      id:userId,
      name:e.target[0].value,
      location:e.target[1].value,
      image:e.target[2].value,
      price:parseInt(e.target[3].value),
      strike_price:parseInt(e.target[3].value) + parseInt(e.target[3].value) * .15,
      rating:(Math.random() * (5-3) + 3).toFixed(1),
      availableFor:e.target[4].value
    }
    try {
      await axios.put(
         `https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Home/${userId}.json`,
         obj,
      );
      localUser.business.push(obj)
      dispatch(Add_Business(obj, localUser))
      alert("Property added successfully!");

      // resetForm()
      setIsPopupOpen(false);
      navigate('/')
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("getting error");
    }
  };

  return (
    <div className="App">
      <h1>ADD YOUR PROPERTY</h1>
      <button className="btn" onClick={openPopup} >ADD PROPERTY</button>

      {isPopupOpen && (
        <div className="popup" >
          <div className="popup-content" style={{ margin:"0rem", padding:"0"}}>
            <h2 style={{margin:"0rem", padding:"0", marginTop:"5px"}}>Add Property</h2>


            <form onSubmit={handleSubmit} style={{ marginTop:"5px", maxWidth:"25rem"}}>
            
              <label>
                Property Name:
                <input
                  type="text"
                  placeholder="Villa, Flat House"
                  required
                  style={{padding:"5px", margin:"0", fontSize:"14px"}}
                />
              </label>
              <label>
              Location :
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  placeholder="City"
                  required
                />
              </label>
              <label>
                image:
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  placeholder="Image Link only"
                  required
                />
              </label>

              <label>
                Price (in Rs):
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  placeholder="Enter Price"
                  required
                />
              </label>


              <label > 
                Available For: 
              <select required style={{padding:"5px", margin:"0", fontSize:"14px" , width:"6rem", borderRadius:"5px"}}>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
              </label>

              

              <div className="form-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="close-btn" onClick={closePopup}>Close</button>
              </div>

            
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sold;
