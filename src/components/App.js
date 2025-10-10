import React, { useState } from 'react';
import Particles from './Particles';
import '../styles/App.css';
import AcademiaPage from './AcademiaPage';
import Card from './Contact';
import ProjectsPage from './ProjectsPage';
import ScrollToTopButton from './ScrollToTopButton';

export default function App() {
    const [currentSection, setCurrentSection] = useState('home');

    const scrollToSection = (section) => {
        setCurrentSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div id="home" className="app-container fade-in">
                <Particles
                    particleColors={['#8b7355', '#a68b5b']}
                    particleCount={150}
                    particleSpread={10}
                    speed={0.08}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />

                <div className="hero-overlay">
                    <h1 className="hero-title">
                        María Blanco González
                    </h1>

                    <p className="hero-subtitle">
                        PhD Candidate
                    </p>

                    <div className="hero-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => scrollToSection('academia')}
                        >
                            Academia
                        </button>
                        <button className="btn btn-secondary"
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </button>
                    </div>
                </div>
                <div className="bottom-buttons">
                    <Card />
                </div>
            </div>
            
            <div id="academia" className="fade-in">
                <AcademiaPage />
            </div>
            <div id="projects" className="fade-in">
                <ProjectsPage />
            </div>
            <ScrollToTopButton />
        </>
    );
}
