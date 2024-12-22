import React from "react";
import "../Styling/Steps.css";


const Help = () => {
  const steps = [
    {
      icon: "📍",
      title: "1. Search and select",
      description:
        "Search for your perfect property. Use our filters and detailed home and neighborhood descriptions to help you make your decision.",
      details: ["View only verified properties.", "Detailed descriptions and local information."]
    },
    {
      icon: "✉️",
      title: "2. Reserve the property",
      description:
        "When you make a reservation, it will take up to 24 hours for the landlord to respond. Provide your payment details at this stage.",
      details: ["Hold payment securely.", "Booking fee included."]
    },
    {
      icon: "✔️",
      title: "3. Confirmation",
      description:
        "Once the landlord accepts, your payment method will automatically be charged. We will share contact details and documents.",
      details: ["Get assistance if needed.", "Receive documents securely."]
    },
    {
      icon: "🔑",
      title: "4. Move in",
      description:
        "The landlord will contact you for the next steps. Pay your first rent to start your tenancy.",
      details: ["Inspect the property before moving in.", "Contact the landlord for support."]
    }
  ];

  return (
    <>
    <div className="steps-container">
         <h1>4 easy steps to book your home</h1>
    <img src="https://cdn.prod.website-files.com/64f84cf2ace0c310194b35e4/652fd0e892259495a239c485_header_ilustracion.png"/>
    
    </div>
   
   
     
      {steps.map((step, index) => (
          <div className="step" key={index}>
          <div className="step-icon">{step.icon}</div>
          <div className="step-content">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          
          </div>
        </div>
      ))}
     
     </>
  );
};

export default Help;