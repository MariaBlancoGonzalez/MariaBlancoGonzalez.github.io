import React from 'react';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Deep Learning para Clasificación de Cianobacterias",
      description: "Desarrollo de modelos multimodales que combinan arquitecturas CNN y Transformer para la clasificación automática de cianobacterias en microscopía.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Transformer"],
      status: "Publicado",
      year: "2024"
    },
    {
      title: "Edge Computing vs GPU para Microscopía",
      description: "Comparación de rendimiento entre pipelines de Edge Computing y GPU para aplicaciones de microscopía de bajo coste.",
      technologies: ["Python", "Edge Computing", "GPU", "Real-time Processing"],
      status: "Publicado",
      year: "2024"
    },
    {
      title: "Rehabilitación para Síndrome de Prader Willi",
      description: "Proyecto final de grado enfocado en el desarrollo de herramientas de rehabilitación para niños con Síndrome de Prader Willi.",
      technologies: ["JavaScript", "React", "Healthcare", "UI/UX"],
      status: "Completado",
      year: "2023"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-status">
                <span className={`status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
