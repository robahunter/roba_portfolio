import React from 'react';
import './Body.css';

const Body = () => {
    return (
      <main className="body">
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm a software developer with a passion for building efficient and scalable web applications. 
            I specialize in <strong>Angular</strong>, <strong>Java</strong>,<strong>React</strong> and other various <strong>frontend technologies</strong>.
            and many <strong>backend</strong> technologies as well as various Database technologies.
            I'm also deeply interested in <strong>cybersecurity</strong> and enjoy participating in bug bounty programs.
          </p>
          <div className="code-container">
            <pre>
              <code className="code-snippet">
                {`let myPassion = ["Coding", "Learning", "Problem-Solving"];
  for (let activity of myPassion) {
    console.log(activity);
  }`}
              </code>
            </pre>
          </div>
        </section>
  
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>DJ Song Request App:</strong> A real-time app for DJs to manage song requests using Next.js and Firebase.</li>
            <li><strong>Bug Bounty Reports:</strong> Identified and reported critical vulnerabilities in web applications.</li>
            <li><strong>Interactive Dashboard:</strong> A dynamic, responsive dashboard built with Angular and ngx-charts.</li>
          </ul>
        </section>
  
        <section className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Discovered vulnerabilities in high-profile platforms as part of bug bounty programs.</li>
            <li>Built reusable and responsive Angular components for complex dashboards.</li>
            <li>Enhanced user experiences with modern UI/UX design principles.</li>
          </ul>
        </section>
  
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>GitHub: <a href="https://github.com/your-github" target="_blank">github.com/your-github</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/your-profile" target="_blank">linkedin.com/in/your-profile</a></p>
        </section>
      </main>
    );
  };
  
  export default Body;
  