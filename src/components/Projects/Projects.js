// src/components/projects/Projects.js
import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FaBuilding, FaChartBar, FaHandshake, FaBug } from 'react-icons/fa';

const Projects = () => {
    const [terminalText, setTerminalText] = useState('');  
    const [projectList, setProjectList] = useState([]);    
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
  
    useEffect(() => {
      if (isCommandTyped) {
        let index = 0;
  
        // Handle typing out the project list with an interval
        const listProjects = setInterval(() => {
          const projects = [
            {
              title: 'Enterprise Resource Planning systems (ERP Systems)',
              description: 'HR Module: Designed and implemented a comprehensive Human Resource module that streamlines the payroll system, recruitment process, and report generation. The module ensures accurate payroll calculations, simplifies HR management, and provides detailed, easy-to-understand reports for efficient decision-making.',
              icon: <FaBuilding />, // Icon for ERP systems
            },
            {
              title: 'Objective Key Results (OKR Systems)',
              description: 'Developed and implemented an automated OKR (Objectives and Key Results) system to efficiently track progress and outcomes of organizational objectives. The system simplifies the process of monitoring key results, enabling clearer insights into performance.\n\nThe solution includes a robust authentication and authorization framework, allowing for role-based access control across the organization, ensuring that users with different roles can access the system according to their permissions.\n\nAdditionally, a weekly planning and reporting system was integrated to enable employees to plan their tasks, set goals, and generate reports that facilitate performance tracking and alignment with organizational objectives.',
              icon: <FaChartBar />, // Icon for OKR systems
            },
            {
              title: 'CRM Solutions',
              description: 'Participated and delivered a user friendly feature on lead generation and lookups on crm project.',
              icon: <FaHandshake />, // Icon for CRM solutions
            },
            {
              title: 'Bug Bounty Reports',
              description: 'Identified and reported critical vulnerabilities in web applications.',
              icon: <FaBug />, // Icon for bug bounty reports
            },
          ];
  
          if (index < projects.length) {
            const project = projects[index];
            setProjectList((prev) => [...prev, project]);
            index++;
          } else {
            clearInterval(listProjects);
          }
        }, 500);
  
        return () => clearInterval(listProjects);
      }
    }, [isCommandTyped]); // Depend only on 'isCommandTyped'
   
  
    // Handle About Me text typing effect
    
  
   
  
  
    return (
      // <div>
      //   <main className="body">
          
  
      //     <section id="projects" className="projects-section">
      //       <div className="terminal">
      //         <div className="terminal-header">
      //           <span className="dot red"></span>
      //           <span className="dot yellow"></span>
      //           <span className="dot green"></span>
      //         </div>
      //         <div className="terminal-body">
      //           <p className="command-line">
      //             <span className="prompt">$ </span>
      //             {terminalText}
      //             {!isCommandTyped && <span className="blinking-cursor">|</span>}
      //           </p>
      //           {isCommandTyped && (
      //             <ul className="project-list">
      //               {projectList.map((project, index) => (
      //                 <li key={index} className="project-item">
      //                   <h3>{project.title}</h3>
      //                   <p>{project.description}</p>
      //                 </li>
      //               ))}
      //             </ul>
      //           )}
      //         </div>
      //       </div>
      //     </section>
      //   </main>
  
      
      // </div>
      <div>
      <main className="body">
        <section id="projects" className="projects-section">
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
                      <h3>
                        <span className="project-icon">{project.icon}</span> {project.title}
                      </h3>
                      <p>{project.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
    );
};

export default Projects;
