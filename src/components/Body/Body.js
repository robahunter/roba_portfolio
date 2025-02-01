import React, { useState, useEffect } from 'react';
import './Body.css';
import Achievement from '../achiemenents/Achievement';
import { FaTimes } from "react-icons/fa"; 
import profileimg from '../../assets/portprofile.jpg';


const Body = ({ showAchievements, handleCloseAchievements }) => {
  const [terminalText, setTerminalText] = useState('');  
  const [projectList, setProjectList] = useState([]);    
  const [aboutMeText, setAboutMeText] = useState('');
  const [isCommandTyped, setIsCommandTyped] = useState(false);

  // Define the projects array inside the useEffect hook
  useEffect(() => {
    const command = 'ls projects';
    let index = 0;

    // Handle typing effect for the command
    const typeCommand = setInterval(() => {
      if (index < command.length) {
        const charToAdd = command.charAt(index);
        if (charToAdd !== undefined) {
          setTerminalText((prev) => prev + charToAdd);
        }
        index++;
      } else {
        clearInterval(typeCommand);
        setTimeout(() => setIsCommandTyped(true), 500);
      }
    }, 100);

    return () => clearInterval(typeCommand);
  }, []); // Empty dependency array ensures this effect runs only once

  // useEffect(() => {
  //   if (isCommandTyped) {
  //     let index = 0;

  //     // Handle typing out the project list with an interval
  //     const listProjects = setInterval(() => {
  //       const projects = [
  //         {
  //           title: '2 Enterprise Resource Planning systems (ERP Systems)',
  //           description: 'HR Module: Designed and implemented a comprehensive Human Resource module that streamlines the payroll system, recruitment process, and report generation. The module ensures accurate payroll calculations, simplifies HR management, and provides detailed, easy-to-understand reports for efficient decision-making.',
  //         },
  //         {
  //           title: 'Objective Key Results (OKR Systems)',
  //           description: 'Developed and implemented an automated OKR (Objectives and Key Results) system to efficiently track progress and outcomes of organizational objectives. The system simplifies the process of monitoring key results, enabling clearer insights into performance.\n\nThe solution includes a robust authentication and authorization framework, allowing for role-based access control across the organization, ensuring that users with different roles can access the system according to their permissions.\n\nAdditionally, a weekly planning and reporting system was integrated to enable employees to plan their tasks, set goals, and generate reports that facilitate performance tracking and alignment with organizational objectives.',
  //         },
  //         {
  //           title: 'CRM Solutions',
  //           description: 'Participated and delivered a user friendly feature on lead generation and lookups on crm project.',
  //         },
  //         {
  //           title: 'Bug Bounty Reports',
  //           description: 'Identified and reported critical vulnerabilities in web applications.',
  //         },
  //       ];

  //       if (index < projects.length) {
  //         const project = projects[index];
  //         setProjectList((prev) => [...prev, project]);
  //         index++;
  //       } else {
  //         clearInterval(listProjects);
  //       }
  //     }, 500);

  //     return () => clearInterval(listProjects);
  //   }
  // }, [isCommandTyped]); // Depend only on 'isCommandTyped'
 

  // Handle About Me text typing effect
  useEffect(() => {
    if (isCommandTyped) {
      const aboutMe = 'ls aboutMe';
      let index = 0;
      const typeAboutMe = setInterval(() => {
        if (index < aboutMe.length) {
          const charToAdd = aboutMe.charAt(index);
          if (charToAdd !== undefined) {
            setAboutMeText((prev) => prev + charToAdd);
          }
          index++;
        } else {
          clearInterval(typeAboutMe);
        }
      }, 20);

      return () => clearInterval(typeAboutMe);
    }
  }, [isCommandTyped]);

 


  return (
    
    <div>
    
    <div className="profile-container">
        <img src={profileimg} alt="Profile" className="account-pic" />
        <h1 className="username">Robera Getachew</h1>
        <p>Web Developer | Bug Bounty Hunter | Tech Enthusiast</p>
      </div>

      <main className="body">
     
        
        
        <section id="aboutMe" className="about-me-section">
       
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <p className="command-line">
                <span className="prompt">$ </span>
                {aboutMeText}
                {!isCommandTyped && <span className="blinking-cursor">|</span>}
              </p>
              {isCommandTyped && (
             <div className="about-me-description">
             <h2>About Me</h2>
             <p>
               Hello, I'm Robera Getachew
             </p>
             <p>
               A passionate software developer since my childhood.
             </p>
             <p>
               I’ve been coding for as long as I can remember, and my journey has led me to become a full-stack developer with 1 year of experience in the industry. I’m deeply involved in both front-end and back-end development.
             </p>
           
             <h3>Technologies I work with:</h3>
             <ul>
               <li><strong>Frontend:</strong> Angular, React, JavaScript, HTML, CSS, TypeScript</li>
               <li><strong>Backend:</strong> Node.js, Java, Express, Spring Boot, REST APIs</li>
               <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL</li>
               <li><strong>Tools & Others:</strong> Git, Docker, AWS, CI/CD</li>
             </ul>
           
             <p>
               In addition to my work as a developer, I also dabble in bug bounty hunting. I enjoy discovering vulnerabilities and helping to strengthen web applications. Ethical hacking is something I’m passionate about, and I constantly stay up-to-date with the latest security trends.
             </p>
           
             <p>
               I’m always looking for new challenges to learn, grow, and contribute to the tech community. Whether it’s building a web application or finding security flaws, I’m always up for solving problems.
             </p>
           
             <p>
               Feel free to explore my work and get in touch if you'd like to collaborate or chat!
             </p>
           </div>
           
              )}
            </div>
          </div>
        </section>

        {/* <section id="projects" className="projects-section">
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <p className="command-line">
                <span className="prompt">$ </span>
                {terminalText}
                {!isCommandTyped && <span className="blinking-cursor">|</span>}
              </p>
              {isCommandTyped && (
                <ul className="project-list">
                  {projectList.map((project, index) => (
                    <li key={index} className="project-item">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section> */}
      </main>

      {showAchievements && (
  <div className="full-page-animation">
    <div className="close-button" onClick={handleCloseAchievements}>
            <FaTimes />
          </div>
    <Achievement />
  </div>
)}

    </div>
  );
};

export default Body;
