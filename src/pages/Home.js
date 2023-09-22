import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import "../styles/Home.css"
import TypewriterText from './TypewriterText';



function Home() {
  return( <div className='home'>
    <div className='about'>
    
        <div className='prompt'>
        <div className="App">
      <TypewriterText />
    </div>
            <p>
        As an eager and motivated software developer, I am excited to bring my technical skills and passion for problem-solving to a dynamic team. 
        With a solid foundation in computer science, programming languages, and software development methodologies, 
        I am confident in my ability to contribute to the design, development, and maintenance of software applications. 
        My hands-on experience in various projects and internships has honed my ability to work collaboratively, 
        manage time effectively, and deliver high-quality results. I am always eager to learn, grow, 
        and expand my skill set, and I am dedicated to staying up-to-date with the latest technologies and trends in the industry.

            </p>
            <center>
                <a href='https://www.linkedin.com/in/abiud-m-59430b17a/' target='blank'>
                <LinkedIn />
                </a>

                <a href='https://www.linkedin.com/in/abiud-m-59430b17a/' target='blank'>
                <Email />
                </a>

                <a href='https://www.linkedin.com/in/abiud-m-59430b17a/' target='blank'>
                <GitHub />
                </a>
            </center>
            
            
        </div>
    </div>
    <div className='skills'>   
        <h1>Skills</h1>
            <div className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>Building stunning user interfaces with HTML, CSS, and JavaScript. Crafting dynamic experiences with React, Angular, and Vue. Mastering version control with Git.</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Powering the web with Python, Ruby, PHP, Java, and .NET. Crafting server magic with Flask, Ruby on Rails, Laravel, and Spring. Navigating data oceans with MySQL, PostgreSQL, and more. Securing the digital realm with OAuth, SSL, and JWT.</span>
            </li>
            <li className='item'>
                <h2>Project Management</h2>
                <span>Leading teams with effective communication and risk management. Navigating time and budgets while allocating resources. Charting the course with Agile/Scrum methodologies and ensuring quality at every turn.</span>
            </li>
            <li className='item'>
                <h2>Networking</h2>
                <span>Designing robust network architectures. Mastering TCP/IP protocols and routing. Fortifying networks with security and firewalls. Troubleshooting and optimizing for peak performance. Automating and monitoring for reliability.</span>
            </li>
            <li className='item'>
                <h2>Cybersecurity</h2>
                <span>Unraveling the secrets of threat intelligence. Leading incident response and SIEM efforts. Protecting data with cryptography and encryption. Building secure software and assessing risks. Managing identities and navigating the complex world of cybersecurity laws.</span>
            </li>
            <li className='item'>
                <h2>Business Analysis</h2>
                <span>Gathering requirements and managing stakeholders. Modeling processes and analyzing data. Solving problems through effective documentation and project management. Guiding projects with Agile methodologies.</span>
            </li>
            <li className='item'>
                <h2>Graphics Design</h2>
                <span>Architecting visually stunning networks. Mastering TCP/IP networking and securing data. Managing networks with finesse and troubleshooting with precision.</span>
            </li>
            <li className='item'>
                <h2>UI/UX Design</h2>
                <span>Unearthing user insights through research. Crafting intuitive wireframes and prototypes. Designing visually captivating experiences with an eye for detail.</span>
            </li>
            <li className='item'>
                <h2>Documents</h2>
                <span>Defining service levels with SLAs. Crafting compelling RFPs. Specifying system and user requirements. Mapping technical details and orchestrating comprehensive testing. Documenting systems, processes, and recovery plans.</span>
            </li>
            </div>

    </div>
  </div>)
}

export default Home
