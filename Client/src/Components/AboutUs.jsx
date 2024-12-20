
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
      <section className="about-hero">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">
          Revolutionizing the real estate market in Bangalore. Seamless,
          stylish, and smart solutions for your housing needs.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          At <strong>HomeEase</strong>, our mission is to transform the housing
          experience by leveraging innovative technology. We simplify the
          process of finding and renting properties, making it transparent and
          stress-free for everyone.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Wide Range of Properties</h3>
            <p>Explore a variety of properties tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <h3>AI-Powered Recommendations</h3>
            <p>Get suggestions based on your preferences and history.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Transactions</h3>
            <p>Enjoy safe and seamless payment experiences.</p>
          </div>
          <div className="feature-card">
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
              src="https://via.placeholder.com/300x200?text=Modern+Building"
              alt="Modern Building"
            />
            <p>Innovative Housing Solutions</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/300x200?text=Urban+Skyscraper"
              alt="Urban Skyscraper"
            />
            <p>Shaping Bangalore’s Future</p>
          </div>
          <div className="team-card">
            <img
              src="https://via.placeholder.com/300x200?text=Real+Estate+Innovation"
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
