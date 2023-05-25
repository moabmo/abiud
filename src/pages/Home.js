import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import "../styles/Home.css"


function Home() {
  return( <div className='home'>
    <div className='about'>
        <h2>Hello, this is Monyoro</h2>
        <div className='prompt'>
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

                <a href='mailto:monyorodemongare@gmail.com' target='blank'>
                <Email />
                </a>

                <a href='https://github.com/moabmo' target='blank'>
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
                <span>HTML/CSS, JavaScript, CSS preprocessors, Front-end frameworks (React, Angular, Vue), Version control (Git).</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Server-side programming languages (Python, Ruby, PHP, Java, .NET), Web frameworks (Flask, Ruby on Rails, Laravel, Spring), Relational databases and SQL (MySQL, PostgreSQL, Oracle), NoSQL databases (MongoDB, Cassandra, Couchbase), API development and integration (RESTful, SOAP), Server administration and management (Linux, Amazon Web Services, Microsoft Azure), Caching and performance optimization (Memcached, Redis), Security and authentication (OAuth, SSL, JWT).</span>
            </li>
            <li className='item'>
                <h2>Project Management</h2>
                <span>Leadership, Communication, Risk Management, Time Management, Budget Management, Resource Allocation, Stakeholder Management, Project Planning, Quality Management, Agile/Scrum methodologies.</span>
            </li>
            <li className='item'>
                <h2>Networking</h2>
                <span>Network architecture and design, TCP/IP protocols, Routing and switching, Network security and firewalls, Network security and firewalls, Wireless networking, Network troubleshooting, Cloud networking, Network virtualization, Network performance monitoring, DNS and DHCP configuration, Load balancing, VPN configuration and management, Network automation & scripting, and Network management and monitoring tools. </span>
            </li>
            <li className='item'>
                <h2>Cybersecurity</h2>
                <span>Threat intelligence analysis, Incident response & management, Security information & event management (SIEM), Cryptography & encryption, Cryptography & encryption, Secure software development, Risk management & assessment, Identity & access management (IAM), Cloud security, Compliance & regulatory knowledge, Security architecture & design, Cybersecurity laws and regulations, & Vulnerability assessment & management</span>
            </li>
            <li className='item'>
                <h2>Business Analysis</h2>
                <span>Requirements gathering, Stakeholder management, Process modeling, Data analysis, Problem-solving, Documentation, Communication, Project management, Agile methodologies, Technical understanding.</span>
            </li>
            <li className='item'>
                <h2>Graphics Design</h2>
                <span>Network Architecture Design, TCP/IP Networking, Routing and Switching, Network Security, Wireless Networking, Network Management and Administration, Network Troubleshooting and Problem Solving.</span>
            </li>
            <li className='item'>
                <h2>UI/UX Design</h2>
                <span>User research, Wireframing, Prototyping, Visual design, Information architecture, Interaction design, Design software proficiency.</span>
            </li>
            <li className='item'>
                <h2>Documents</h2>
                <span>Service Level Agreement (SLA), Request for Proposal (RFP), System Requirements Specification, User Requirements Specification, Technical Specification, Test Plan, Test Cases, User Manual, System Manual, Disaster Recovery Plan (DRP), Business Continuity Plan (BCP), Security Policy.</span>
            </li>
        </div>
    </div>
  </div>)
}

export default Home
