import React from "react";

const Footer1 = () => {
  return (
    <footer style={{ backgroundColor: "#2c3e50", color: "#ecf0f1", padding: "20px 0" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* About Us Section */}
        <div style={{ flex: "1 1 300px", padding: "10px" }}>
          <h3 style={{ marginBottom: "10px" }}>About Us</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
            Transforming the real estate market in Bangalore by simplifying property search and rentals
            with user-friendly features, detailed listings, and cutting-edge technologies.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1 1 300px", padding: "10px" }}>
          <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li>
              <a href="/" style={{ color: "#ecf0f1", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/properties" style={{ color: "#ecf0f1", textDecoration: "none" }}>
                Search Properties
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#ecf0f1", textDecoration: "none" }}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="/terms" style={{ color: "#ecf0f1", textDecoration: "none" }}>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div style={{ flex: "1 1 300px", padding: "10px" }}>
          <h3 style={{ marginBottom: "10px" }}>Contact Us</h3>
          <p style={{ fontSize: "14px" }}>
            Email: support@realestateapp.com
            <br />
            Phone: +91-123-456-7890
            <br />
            Address: 123, Startup Hub, Bangalore
          </p>
          <div style={{ marginTop: "10px" }}>
            <a href="#" style={{ color: "#ecf0f1", marginRight: "10px", textDecoration: "none" }}>
              Facebook
            </a>
            <a href="#" style={{ color: "#ecf0f1", marginRight: "10px", textDecoration: "none" }}>
              Twitter
            </a>
            <a href="#" style={{ color: "#ecf0f1", textDecoration: "none" }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px",
          borderTop: "1px solid #34495e",
          paddingTop: "10px",
        }}
      >
        &copy; 2024 Real Estate App | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer1;
