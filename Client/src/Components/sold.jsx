import React, { useState } from 'react';
import '../Styling/sold.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Business } from '../Redux/action';

function Sold() {
  const localUser = useSelector((state) => state.LocalUser)
  const dispatch = useDispatch()
  // State for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State for form data
  const [postdata, setpostData] = useState({
    propertyName: "",
    address:"" ,
    location: "",
    price: "",
    message:"",
    // image: null,
  });
 
  // Open the popup
  const openPopup = () => setIsPopupOpen(true);

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    resetForm();
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setpostData({ ...postdata, [name]: value });

  };


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setpostData({ ...postdata, image: file });
  // };


  const resetForm = () => {
    setpostData({
      propertyName: "",
      address:"",
      location: "",
      price: "",
      message:"",
      // image: null,
    });
  };

  // Handle add post submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
  //     const formData = new FormData();
  //     formData.append('propertyName', postdata.propertyName);
  //     formData.append('location', postdata.location);
  //     formData.append('price', postdata.price);
  //     if (postdata.image) {
  //       formData.append('image', postdata.image);
  //     }
  // console.log(formData)
      const response = await axios.post(
         "https://shre-5279e-default-rtdb.firebaseio.com/SHRE.json",
         postdata,
      );

      postdata.businessId=Math.ceil(Math.random() * 1000 + 1)
      dispatch(Add_Business(postdata, localUser))
      alert("Property added successfully!");

      resetForm()
      setIsPopupOpen(false);
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
                  name="propertyName"
                  value={postdata.propertyName}
                  onChange={handleInputChange}
                  placeholder="Enter Property Name"
                  required
                  style={{padding:"5px", margin:"0", fontSize:"14px"}}
                />
              </label>
              <label>
                Address :
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  type="text"
                  name="address"
                  value={postdata.address}
                  onChange={handleInputChange}
                  placeholder="Enter Property Name"
                  required
                />
              </label>
              <label>
                Location:
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  type="text"
                  name="location"
                  value={postdata.location}
                  onChange={handleInputChange}
                  placeholder="Enter Property Location"
                  required
                />
              </label>

              <label>
                Price (in Rs):
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  type="number"
                  name="price"
                  value={postdata.price}
                  onChange={handleInputChange}
                  placeholder="Enter Price"
                  required
                />
              </label>

              <label>
                message:
                <input
                style={{padding:"5px", margin:"0", fontSize:"14px"}}
                  type="text"
                  name="message"
                  value={postdata.message}
                  onChange={handleInputChange}
                  placeholder="message"
                  required
                />
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
