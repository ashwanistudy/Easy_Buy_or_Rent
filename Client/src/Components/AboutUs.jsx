
// function AboutUs(){
//     return (
//         <h2>about us</h2>
//     )
// }

// export default AboutUs

import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div id="flex1">
      <section className="about-hero">
        <h1 className="hero-title">About Us</h1>
       
        <p className="hero-subtitle">
          Revolutionizing the real estate market in Bangalore. Seamless,
          stylish, and smart solutions for your housing needs.
        </p>
      </section>
      <img id="img1" src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720&im_format=avif" alt="" />
      </div>

      {/* Mission Section */}
      <div id="flex2">
      <img id="img2" src="https://a0.muscache.com/im/pictures/a84d991e-8d4a-4ff6-818b-ca07292d3343.jpg?im_w=720&im_format=avif" alt="" />

      <section className="about-mission">
        
        <h2 className="section-title" id="h2">Our Mission</h2>
        <p className="section-text">
          At <strong>HomeEase</strong>, our mission is to transform the housing
          experience by leveraging innovative technology. We simplify the
          process of finding and renting properties, making it transparent and
          stress-free for everyone.
        </p>
      </section>
      </div>

      {/* Features Section */}
      <section className="about-features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card card1">
            <h3>Wide Range of Properties</h3>
            <p>Explore a variety of properties tailored to your needs.</p>
          </div>
          <div className="feature-card card2">
            <h3>AI-Powered Recommendations</h3>
            <p>Get suggestions based on your preferences and history.</p>
          </div>
          <div className="feature-card card1">
            <h3>Secure Transactions</h3>
            <p>Enjoy safe and seamless payment experiences.</p>
          </div>
          <div className="feature-card card2">
            <h3>Verified Reviews</h3>
            <p>Trust honest feedback from real tenants and landlords.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className="section-title">A Vision Built on Trust</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-1029501665597967518/original/2e4ca862-2317-4684-bd29-68603674e0bd.jpeg?im_w=720&im_format=avif"
              alt="Modern Building"
            />
            <p>Innovative Housing Solutions</p>
          </div>
          <div className="team-card">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzODA3MzIyMjM2ODY5MjMzNQ%3D%3D/original/9dd40971-c2a5-451e-b02a-e3fb2ebfd853.jpeg?im_w=720&im_format=avif"
              alt="Urban Skyscraper"
            />
            <p>Shaping Bangalore’s Future</p>
          </div>
          <div className="team-card">
            <img
              src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/efce16de-143b-4083-be3f-ba0b5275f97a.jpg?im_w=720&im_format=avif"
              alt="Real Estate Innovation"
            />
            <p>Technology Meets Real Estate</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="about-cta">
        <h2 className="cta-title">Join Us Today</h2>
        <p className="cta-text">
          Discover your dream home or simplify property management with our
          cutting-edge platform. Let's make housing effortless.
        </p>
        <a href="/search" className="cta-button">
          Explore Listings
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
