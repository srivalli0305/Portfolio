// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import myPhoto from '../assets/whatsapp-image1.jpg'; // Correct path to the image
import cvFile from '../assets/whatsapp-image2.jpg'; // Path to your CV file
import linkedinLogo from '../assets/linkedIn logo.png'; // Path to LinkedIn logo
import githubLogo from '../assets/GitHub logo.png'; // Path to GitHub logo

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="portfolio-title">Portfolio</div>
            <div className="home-content">
                <div className="text-content">
                    <p className="greeting">Hello, It's <span className="highlight">Me</span></p>
                    <h1 className="name">Tamada Srivalli</h1>
                    <p> And I’m a <span className="highlight-student">Btech Student</span> of <span className="highlight">Kiet Group Of Institutions</span></p>
                    <p className="description">I am a B.Tech 3rd year student at Kakinada Institute of Engineering
                        and Technology, specializing in Computer Science. I enjoy coding 
                        and learning new technologies.
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/srivalli-tamada-5882562a1" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                        </a>
                        <a href="https://github.com/srivalli0305" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-logo" />
                        </a>
                    </div>
                    <a href={cvFile} download className="download-cv-btn">Download CV</a>
                </div>
                <img src={myPhoto} alt="Profile" className="profile-photo" />
            </div>
        </section>
    );
}

export default Home;
