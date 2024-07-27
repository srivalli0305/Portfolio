// src/components/Skills.js
import React from 'react';
import LanguagePieChart from './LanguagePieChart'; // Import the Pie Chart Component
import './Skills.css'; // Import your CSS file for Skills page

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h1 className="section-title">Skills</h1>
            <div className="skills-content">
                <LanguagePieChart /> {/* Render the Pie Chart Component */}
                <p className="skills-description">
                    Here is a visual representation of the programming languages I am familiar with. 
                    The percentages represent the proportion of projects or expertise in each language.
                </p>
            </div>
        </section>
    );
}

export default Skills;
