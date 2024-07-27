// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for styling
import { Link } from 'react-scroll'; // Import the react-scroll Link component

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h1 className="section-title">Contact Me</h1>
            <div className="contact-container">
                <div className="contact-box">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Your email address" 
                    />
                    <label htmlFor="linkedin">LinkedIn:</label>
                    <input 
                        type="text" 
                        id="linkedin" 
                        placeholder="Your LinkedIn profile link" 
                    />
                    <label htmlFor="phone">Phone No.:</label>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="Your phone number" 
                    />
                </div>
            </div>
            <Link to="home" smooth={true} duration={500} className="go-back-btn">
                Go Back to Home
            </Link>
        </section>
    );
};

export default Contact;
