import React from "react";
import './Footer.css';

export default function Footer(){
  return (
    <>
    <div className="footer-div">
    <div className="main-footer">

      <div className="about-us">
        <h3 style={{ color:"rgb(228, 76, 218)"}}>About Us</h3>
        <p>Transforming the real estate market in Bangalore by simplifying property search and rentals with user-friendly features, detailed listings, and cutting-edge technologies.</p>
      </div>

      <div className="quick-links">
        <h3 style={{ color:"rgb(228, 76, 218)"}}>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Search Properties</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Terms and Conditions</a></li>
        </ul>
      </div>

      <div className="contact-us">
        <h3 style={{ color:"rgb(228, 76, 218)"}}>Contact Us</h3>
        <div className="contact-us-1">
          Email: support@realestateapp.com<br/>
          Phone: +91-123-456-7890<br/>
          Address: 123, Startup Hub, Bangalore
        </div>
        <div className="contact-us-2">
          <a href="#"><img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000" alt="facebook" /></a>
          <a href="#"><img src="https://img.icons8.com/?size=100&id=vzeEiquVUR7e&format=png&color=000000" alt="twitter" /></a>
          <a href="#"><img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" /></a>
          
        </div>
      </div>

    </div>
    <div className="main2-footer">
      &copy; 2024 Real Estate App | All Rights Reserved
    </div>    
    </div>
    </>
  )
}