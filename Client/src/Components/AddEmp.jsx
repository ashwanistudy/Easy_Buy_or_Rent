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

  const [isTnCVisible, setTnCVisible] = useState(false);


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
<div className="Block2" >
<img src="https://media.designcafe.com/wp-content/uploads/2022/07/15170350/luxury-home-design-on-budget.jpg"  style={{padding:50}}/>




<div className="termsAndConditions">
      <span> Before posting a property please read the term & conditions <button className="tcbut" onClick={() => setTnCVisible(!isTnCVisible)}>
          {isTnCVisible ? "Hide Terms and Conditions 🔴" : "Show Terms and Conditions 🟢"}
        </button></span>
        </div>
{isTnCVisible && (
          
        
<div className="termtext">

   
    <h1>Terms and Conditions </h1>

    <h2>Introduction</h2>
    <p>
        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.
    </p>
    <p>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
    </p>
    <p>Minors or people below 18 years old are not allowed to use this Website.</p>

    <h2>Intellectual Property Rights</h2>
    <p>
        Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
    </p>
    <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

    <h2>Restrictions</h2>
    <p>You are specifically restricted from all of the following:</p>
    <ul>
        <li>Publishing any Website material in any other media;</li>
        <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
        <li>Publicly performing and/or showing any Website material;</li>
        <li>Using this Website in any way that is or may be damaging to this Website;</li>
        <li>Using this Website in any way that impacts user access to this Website;</li>
        <li>
            Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
        </li>
        <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
        <li>Using this Website to engage in any advertising or marketing.</li>
    </ul>
    <p>
        Certain areas of this Website are restricted from being accessed by you, and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential, and you must maintain confidentiality as well.
    </p>

    <h2>Your Content</h2>
    <p>
        In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
    </p>
    <p>Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.</p>

    <h2>No Warranties</h2>
    <p>
        This Website is provided “as is,” with all faults, and Company Name expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
    </p>

    <h2>Limitation of Liability</h2>
    <p>
        In no event shall Company Name, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract. Company Name, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
    </p>

    <h2>Indemnification</h2>
    <p>
        You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
    </p>

    <h2>Severability</h2>
    <p>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
    </p>

    <h2>Variation of Terms</h2>
    <p>
        Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
    </p>

    <h2>Assignment</h2>
    <p>
        The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
    </p>

    <h2>Entire Agreement</h2>
    <p>
        These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website and supersede all prior agreements and understandings.
    </p>

    <h2>Governing Law & Jurisdiction</h2>
    <p>
        These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.
    </p>


            </div>
        )}
      
      <img src="https://acquisitioninternational.digital/wp-content/uploads/2022/02/Terms-and-Conditions-Agreement.jpg"  style={{padding:50}}/>

</div>
<div className="Block2" >
  <span>Now it's easy to sale your house</span>
<img src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297260081/original/e97a2325-f789-49df-b474-25c77476d433.jpeg?im_w=1680&im_format=avif" style={{height:500 ,padding:50}}/>
<div style={{ 
  display: "flex", 
  boxShadow: "0px 0px 5px 5px rgba(124, 94, 194, 0.1)" 
}}>
<img src="https://cdn.pixabay.com/photo/2017/10/12/17/42/house-for-sale-2845213_640.jpg"  />
  <div><Sold/></div>
  <img src="https://cdn.pixabay.com/photo/2017/10/12/17/42/house-for-sale-2845213_640.jpg" />
</div>
</div>
 


    </>
  );
};
