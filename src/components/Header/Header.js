import React from 'react';
import './Header.css';
import profileimg from '../../assets/portprofile.jpg';
import Nav from '../Navbar/Nav'; 

const Header = ({ onAchievementsClick }) => {
  return (
    <header className="header">
      <div className="profile-container">
        <img src={profileimg} alt="Profile" className="profile" />
      </div>
      <div className="text-container">
        <h1 className="animated-text">&lt; Hello, I'm Robera Getachew /&gt;</h1>
        <p className="subtext">Web Developer | Bug Bounty Hunter | Tech Enthusiast</p>
      </div>
      <Nav onAchievementsClick={onAchievementsClick} />
    </header>
  );
};

export default Header;
