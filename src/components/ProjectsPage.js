import React from 'react';
import '../styles/ProjectsPage.css';

const projects = [
  {
    title: 'Cyanobacteria Classification',
    description: 'Modelo multimodal que combina CNN y Transformers para clasificación automática de cianobacterias usando imágenes de microscopía.',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=400&q=80',
    link: 'https://link.springer.com/article/10.1007/s10452-024-10127-4'
  },
  {
    title: 'Edge Computing Pipeline',
    description: 'Sistema de procesamiento en tiempo real para aplicaciones de microscopía de bajo coste usando edge computing.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80',
    link: 'https://www.mdpi.com/2079-9292/14/1/162'
  },
  {
    title: 'Prader-Willi Rehabilitation',
    description: 'Aplicación de rehabilitación para niños con Síndrome de Prader-Willi usando tecnologías interactivas.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/MariaBlancoGonzalez'
  },
  {
    title: 'Computer Vision Toolkit',
    description: 'Herramientas de visión por computador para análisis automatizado de imágenes médicas y biológicas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/MariaBlancoGonzalez'
  },
  {
    title: 'Tu Proyecto Aquí',
    description: 'Espacio reservado para que agregues uno de tus proyectos destacados.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/MariaBlancoGonzalez'
  },
  {
    title: 'Tu Proyecto Aquí',
    description: 'Espacio reservado para que agregues otro de tus proyectos destacados.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    link: 'https://github.com/MariaBlancoGonzalez'
  }
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
    { name: 'BBDD', icon: '🗄️', category: 'Database' },
  ];

  return (
    <div className="projects-page-bg">
      <h2 className="projects-title">Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      
      <div className="technologies-section">
        <h3 className="technologies-title">Tecnologías Utilizadas</h3>
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