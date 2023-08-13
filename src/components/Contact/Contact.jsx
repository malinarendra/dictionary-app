import React from 'react';
import "./Contact.css";

const Contact = () => {  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const url = "https://formspree.io/f/mzblearv"; // Replace with your Formspree form URL
    
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = '/thanks'; // Replace with your custom thanks page URL
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  
  return (
    <div className="container">
      <p className="heading">Contact Us</p>
      <div className="form-div">
        <form onSubmit={handleFormSubmit}>
          <div className="item">
            <p>First Name<span>*</span></p>
            <input type="text" name="first_name" required/>
          </div>
          <div className="item">
            <p>Last Name<span>*</span></p>
            <input type="text" name="last_name" required/>
          </div>
          <div className="item">
            <p>Email<span>*</span></p>
            <input type="email" name="email" required/>
          </div>
          <div className="item">
            <p>Message<span>*</span></p>
            <textarea rows="6" cols="30" name="message" required></textarea>
          </div>
          <div id="item-submit" className="item">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
