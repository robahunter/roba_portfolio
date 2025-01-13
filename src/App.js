import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Lockscreen from './components/Lockscreen/Lockscreen';
import Body from './components/Body/Body';
import Contactme from './components/Contactme/Contactme';
import Projects from './components/Projects/Projects';
import Achievement from './components/achiemenents/Achievement';
import { FaTimes } from "react-icons/fa";
import GitLabContributions from './components/contributions/GitLabContributions';

function App() {
  const [showAchievements, setShowAchievements] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => setIsLocked(false); // Unlock the screen
  const handleShowAchievements = () => setShowAchievements(true);
  const handleCloseAchievements = () => setShowAchievements(false);

  return (
    <Router basename="/roba_portfolio">
      <div style={{ display: 'flex' }}>
        {!isLocked && <Nav onAchievementsClick={handleShowAchievements} />}
        <div style={{ marginLeft: !isLocked ? '70px' : '0', width: '100%' }}>
          {isLocked ? (
            <Lockscreen onUnlock={handleUnlock} />
          ) : (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Body
                      showAchievements={showAchievements}
                      handleCloseAchievements={handleCloseAchievements}
                    />
                  }
                />
                <Route path="/contact" element={<Contactme />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contributions" element={<GitLabContributions username="roberag" />} />


              </Routes>

              {/* Render achievements modal globally */}
              {showAchievements && (
                <div className="full-page-animation">
                  <div className="close-button" onClick={handleCloseAchievements}>
            <FaTimes />
          </div>
                  <Achievement />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
