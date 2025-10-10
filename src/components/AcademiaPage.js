import React from 'react';
import '../styles/AcademiaPage.css';

const AcademiaPage = () => {
  return (
    <div className="academia-section">
      <div className="academia-investigadora">
        <div className="academia-timeline-title" style={{textAlign: 'center', marginTop: '2rem'}}>
          <h2>Vida Investigadora</h2>
        </div>
        <div className="academia-highlights academia-stack">
          <div className="highlight-section publicaciones">
            <h4>Publicaciones Top</h4>
            <ul>
              <li>
                <a href="https://link.springer.com/article/10.1007/s10452-024-10127-4" target="_blank" rel="noopener noreferrer">
                  Multimodal Deep Learning for Cyanobacteria Classification: A Fusion of CNN and Transformer Architectures - Aquatic Ecology, 2025
                </a>
              </li>
              <li>
                <a href="https://www.mdpi.com/2079-9292/14/1/162" target="_blank" rel="noopener noreferrer">
                  Real-Time Edge Computing vs. GPU-Accelerated Pipelines for Low-Cost Microscopy Applications. - Electronics, 2025
                </a>
              </li>
            </ul>
          </div>
          <div className="highlight-section">
            <h4>Conferencias</h4>
            <ul>
              <li>CASEIB 2025 - </li>
            </ul>
          </div>
          <div className="highlight-section">
            <h4>Premios y Reconocimientos</h4>
            <ul>
              <li>Matrícula de Honor - Trabajo fin de Master - 2024</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="academia-content academia-duo-centered">
        <div className="academia-col">
          <div className="academia-timeline-title">
            <h2>Trayectoria Profesional</h2>
            <div className="academia-subtitle">Experiencia y Prácticas</div>
          </div>
          <div className="academia-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 - Actualidad</div>
              <div className="timeline-content">
                <h3>Personal de investigación (Jornada completa)</h3>
                <p className="institution">Universidad de Castilla-La Mancha</p>
                <p className="description">Ciudad Real, Castilla-La Mancha, España</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Personal de investigación (Jornada parcial)</h3>
                <p className="institution">Universidad de Castilla-La Mancha</p>
                <p className="description">Ciudad Real, Castilla-La Mancha, España</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Estudiante en prácticas</h3>
                <p className="institution">Comunitelia</p>
                <p className="description">Contrato de prácticas, Feb. 2022 - Jul. 2022 · 6 meses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="academia-col">
          <div className="academia-timeline-title">
            <h2>Trayectoria Académica</h2>
            <div className="academia-subtitle">Formación y Desarrollo Profesional</div>
          </div>
          <div className="academia-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 - Presente</div>
              <div className="timeline-content">
                <h3>PhD Candidate</h3>
                <p className="institution">Universidad de Castilla-La Mancha</p>
                <p className="description">Doctorado en CC. y Tec. Aplicadas a la Ing. Industrial.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023 - 2024</div>
              <div className="timeline-content">
                <h3>Máster en Ciencia de Datos</h3>
                <p className="institution">Universitat Oberta de Catalunya</p>
                <p className="description">Tesis sobre Modelos multimodales aplicados a la microbiología.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018 - 2023</div>
              <div className="timeline-content">
                <h3>Grado en Ingeniería Informática</h3>
                <p className="institution">Universidad de Castilla-La Mancha</p>
                <p className="description">Especialización en Computación. Mención Bilingüe. Proyecto final enfocado en la rehabilitación de niños con el Síndrome de Prader Willi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademiaPage;
