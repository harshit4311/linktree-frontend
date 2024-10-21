import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="/images/BlackBG-GitHub_PFP.png"
          alt="Profile"
          className="profile-picture"
        />
        <h1><strong>Harshit Shah</strong></h1>
        <p><strong>CS Sophomore@BITS Pilani </strong></p>
        <p><strong>Prev. ML Intern@University of Oxford | Software Developer/Machine Learning Engineer</strong></p>
      </div>
      <div className="links">
        <a href="https://linkedin.com/in/harshit-shah16" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/harshit4311" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/harshit.shahh/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
