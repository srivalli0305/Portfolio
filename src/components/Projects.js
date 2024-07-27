// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import CSS for styling

const projects = [
    {
        title: '1.Medication Remainder:',
        description: ' I have designed medication remainder system  ,which remaindes the person at which time they set their schedule at that time it gives remainder.',
    },   
    {
        title: '2.To-Do list',
        description: 'I have build  a Todo-list ,which lists the to-do things.',
    },   
    {
        title:'3.Fetch and Display data from Api:',
        description:'  Make HTTP requests and display the retrieved data in a React Application',
    },
    {
        title:'4.PhoneBook:',
        description:' Perform Create,Read,Update,and Delete(CRUD) operations using MongoDB,  leveraging the MaongoDb shell or a driver like Mongoose for Node.js.',
    },
    {
        title:'5.IDcard:',
        description:' Perform Create,Read,Update,and Delete(CRUD) operations using MongoDB,  leveraging the MaongoDb shell or a driver like Mongoose for Node.js and express js.',
    },
    {
        title:'6.Simple Blog Application:',
        description:'Create a basic blog application where users can create ,read,update,and delete posts.',
    }
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h1 className="section-title">My Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                    
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
