import React from 'react';
import '../styles/ProjectsPage.css';

const projects = [
  {
    title: 'Cyanobacteria Classification',
    description: 'Multimodal model combining CNN and Transformers for automatic cyanobacteria classification using microscopy images.',
    image: 'https://images.unsplash.com/photo-1579781403299-11c35baa47e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000',
    link: 'https://link.springer.com/article/10.1007/s10452-025-10227-5'
  },
  {
    title: 'Edge Computing Pipeline',
    description: 'Real-time processing system for low-cost microscopy applications using edge computing.',
    image: '/assets/openflexure.png',
    link: 'https://www.mdpi.com/2079-9292/14/1/162'
  },
  {
    title: 'Prader-Willi Rehabilitation',
    description: 'Rehabilitation application for children with Prader-Willi Syndrome using interactive technologies.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/MariaBlancoGonzalez/PraderWilli-Rehab'
  },
  {
    title: 'WSI Stitching Tool',
    description: 'Tool for reconstructing WSI images from coordinate-based patches.',
    image: 'https://plus.unsplash.com/premium_photo-1725650439956-68d055fd1595?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000',
    link: 'https://github.com/MariaBlancoGonzalez/Grid-Pattern-Stiching'
  },
];

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const technologies = [
    { name: 'Java', icon: '☕', category: 'Programming' },
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'JavaScript', icon: 'JS', category: 'Programming' },
    { name: 'HTML', icon: '🌐', category: 'Programming' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
    { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
    { name: 'OpenCV', icon: '👁️', category: 'Computer Vision' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Git', icon: '📚', category: 'Version Control' },
    { name: 'Linux', icon: '🐧', category: 'Operating System' },
    { name: 'Jupyter', icon: '📓', category: 'Data Science' },
    { name: 'Scikit-learn', icon: '🔬', category: 'AI/ML' },
    { name: 'NumPy', icon: '🔢', category: 'Data Science' },
    { name: 'Pandas', icon: '🐼', category: 'Data Science' },
    { name: 'Matplotlib', icon: '📊', category: 'Visualization' },
    { name: 'FastAPI', icon: '⚡', category: 'Backend' },
    { name: 'Databases', icon: '🗄️', category: 'Database' },
  ];

  return (
    <div className="projects-page-bg">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      
      <div className="technologies-section">
        <h3 className="technologies-title">Technologies Used</h3>
        <div className="technologies-grid">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}