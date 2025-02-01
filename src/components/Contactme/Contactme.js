import React, { useState } from 'react';
import './Contactme.css'

function Contactme() {
  return (

   <section className="contact-me">
      <h2 className="contact-title">Stay Connected</h2>
      <p className="contact-subtitle">Find me on these platforms:</p>
      <div className="social-icons-container">
        <a href="https://www.linkedin.com/in/robera-getachew-bb5236290/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/robahunter" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://gitlab.com/roberag" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-gitlab"></i>
       </a>

         <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a> 
        <a href="mailto:gamingwizeazy@gmail.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

     
    </section>
   
  );
  
}

export default Contactme