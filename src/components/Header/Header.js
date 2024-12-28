import React from 'react';
import './Header.css';
import profileimg from '../../assets/portprofile.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="animated-text">
        <h1>&lt; Hello, I'm Robera Getachew /&gt;</h1>
      </div>
      <div className="profile-container">
        <img src={profileimg} alt="Profile" className="profile" />
      </div>
     
    </header>
  );
};

export default Header;