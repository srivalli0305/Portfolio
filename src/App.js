// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
                setShowNavbar(homeSectionBottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        
        <div>
              {showNavbar && <Navbar />}
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
            
       
    );
}

export default App;
