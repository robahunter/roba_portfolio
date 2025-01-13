import React from 'react';
import './Lockscreen.css';
import profileimg from '../../assets/portprofile.jpg';

const LockScreen = ({ onUnlock }) => {
  return (
    <div className="lockscreen">
      <div className="lockscreen-container">
        <img src={profileimg} alt="Profile" className="account-pic" />
        <h1 className="username">Robera Getachew</h1>
        <p>Web Developer | Bug Bounty Hunter | Tech Enthusiast</p>
        <button className="unlock-button" onClick={onUnlock}>
          Unlock
        </button>
      </div>
    </div>
  );
};

export default LockScreen;
