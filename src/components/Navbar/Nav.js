import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ onAchievementsClick }) => {
  return (
    <nav className="ubuntu-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link" title="Home">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li className="nav-item">
          <button className="nav-link" title="Achievements" onClick={onAchievementsClick}>
            <i className="fas fa-trophy"></i>
          </button>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" title="Projects">
            <i className="fas fa-folder-open"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contributions" className="nav-link" title="Contributions">
          <i class="fas fa-project-diagram"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" title="Contact">
            <i className="fas fa-envelope"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
