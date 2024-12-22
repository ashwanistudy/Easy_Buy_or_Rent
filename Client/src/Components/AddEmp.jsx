import React, { useState } from "react";
import axios from "axios";
import "../styling/AddEmp.css";
import Sold from "./sold";

export const AddEmp = () => {
  const [EmpeData, setEmpData] = useState({
    name: "",
    propertyName: "",
    contact: "",
    email: "",
    address: "",
    location: "",
    message: "",
  });

  // registration form on off function 
  const [isopen, setopen] = useState(false);



  const HandleChange = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...EmpeData, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shre-5279e-default-rtdb.firebaseio.com/SHRE.json",
        EmpeData
      );
      console.log(response.data);
      alert("Registered Successfully");
      setEmpData({
        name: "",
        propertyName: "",
        contact: "",
        email: "",
        address: "",
        location: "",
        message: "",
      });
      setopen(false);
    } catch (error) {
      console.log("error", error);
    }
  };
 
  return (
    <>
      <div id="Container">
        <h1>Open the door to your next role</h1>
        <span>
          "Join us today and unlock opportunities for your next big move!"
          <button
            id="fromButton"
            onClick={() => setopen(!isopen)}
          >
            {isopen ? "Close the Registration Form 🔴" : "Open Registration Form 🟢"}
          </button>
        </span>
      </div>
      {isopen && (
        <div className="popupOverlay">
          <form onSubmit={HandleSubmit} className="popupForm">
            <label>
              Enter Name <span style={{ color: "red" }}>*</span>
              <input
                name="name"
                placeholder="Enter Your full name"
                value={EmpeData.name}
                type="text"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Property Name <span style={{ color: "red" }}>*</span>
              <input
                placeholder="House Name"
                name="propertyName"
                value={EmpeData.propertyName}
                type="text"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Contact Number <span style={{ color: "red" }}>*</span>
              <input
                placeholder="Contact Number"
                name="contact"
                value={EmpeData.contact}
                type="number"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Email Address <span style={{ color: "red" }}>*</span>
              <input
                placeholder="Email Address"
                name="email"
                value={EmpeData.email}
                type="email"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Address <span style={{ color: "red" }}>*</span>
              <input
                placeholder="Address"
                name="address"
                value={EmpeData.address}
                type="text"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Location<span style={{ color: "red" }}>*</span>
              <input
                placeholder="Current Location"
                name="location"
                value={EmpeData.location}
                type="text"
                onChange={HandleChange}
                required
              />
            </label>
            <label>
              Message
              <input
                placeholder="Message"
                name="message"
                value={EmpeData.message}
                type="text"
                onChange={HandleChange}
              />
            </label>
            <div className="formButtons">
              <input type="submit" value="Submit" />
              <button
                type="button"
                id="Closebut"
                onClick={() => setopen(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
   


    </>
  );
};
