import React, { useState } from 'react';
import '../Styling/sold.css';
import axios from 'axios';

function Sold() {
  // State for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State for form data
  const [postdata, setpostData] = useState({
    propertyName: "",
    address:"" ,
    location: "",
    price: "",
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

      console.log(response.data);
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
      <button className="btn" onClick={openPopup}>ADD PROPERTY</button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Property</h2>


            <form onSubmit={handleSubmit}>

              <label>
                Property Name:
                <input
                  type="text"
                  name="propertyName"
                  value={postdata.propertyName}
                  onChange={handleInputChange}
                  placeholder="Enter Property Name"
                  required
                />
              </label>
              <label>
                Address :
                <input
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
                  type="number"
                  name="price"
                  value={postdata.price}
                  onChange={handleInputChange}
                  placeholder="Enter Price"
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
