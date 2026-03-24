import React from 'react';
import '../styles/AcademiaPage.css';

const AcademiaPage = () => {
  return (
    <div className="academia-section">
      {/* Top section for publications and awards */}
      <div className="academia-investigadora">
        <div className="academia-timeline-title" style={{textAlign: 'center', marginTop: '2rem'}}>
          <h2>Research Career</h2>
        </div>
        <div className="academia-highlights academia-stack">
          <div className="highlight-section publicaciones">
            <h4>Top Publications</h4>
            <ul>
              <li>
                <a href="https://link.springer.com/article/10.1007/s10452-025-10227-5" target="_blank" rel="noopener noreferrer">
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
            <h4>Conferences</h4>
            <ul>
              <li>CASEIB 2025 | Conference Paper | Coloring cancer: GAN Powered Biomarker Synthesis from H&E Stains</li>
              <li>CASEIB 2025 | Poster | Overcoming Data Limitations in Digital Pathology through GAN-Based Image Generation: Application to Breast Cancer Classification</li>
              <li>SPAOM 2024 | Poster | AI-driven automated identification and genetic characterization of planktonic cyanobacteria</li>
            </ul>
          </div>
          <div className="highlight-section">
            <h4>Awards and Honors</h4>
            <ul>
              <li>Highest Honors - Master's Thesis - 2024</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Centered professional and academic paths */}
      <div className="academia-content academia-duo-centered">
        {/* Professional column */}
        <div className="academia-col">
          <div className="academia-timeline-title">
            <h2>Professional Career</h2>
            <div className="academia-subtitle">Experience and Internships</div>
          </div>
          <div className="academia-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 - Present</div>
              <div className="timeline-content">
                <h3>Research Staff (Full-time)</h3>
                <p className="institution">University of Castilla-La Mancha</p>
                <p className="description">
                  Ciudad Real, Castilla-La Mancha, Spain
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Research Staff (Part-time)</h3>
                <p className="institution">University of Castilla-La Mancha</p>
                <p className="description">
                  Ciudad Real, Castilla-La Mancha, Spain
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Internship Student</h3>
                <p className="institution">Comunitelia</p>
                <p className="description">
                  Internship contract, Feb. 2022 - Jul. 2022 · 6 months
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Academic column */}
        <div className="academia-col">
          <div className="academia-timeline-title">
            <h2>Academic Career</h2>
            <div className="academia-subtitle">Education and Professional Development</div>
          </div>
          <div className="academia-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 - Present</div>
              <div className="timeline-content">
                <h3>PhD Candidate</h3>
                <p className="institution">University of Castilla-La Mancha</p>
                <p className="description">
                  PhD in Science and Technology Applied to Industrial Engineering.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023 - 2024</div>
              <div className="timeline-content">
                <h3>Master's in Data Science</h3>
                <p className="institution">Open University of Catalonia</p>
                <p className="description">
                  Thesis on multimodal models applied to microbiology.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018 - 2023</div>
              <div className="timeline-content">
                <h3>Bachelor's Degree in Computer Engineering</h3>
                <p className="institution">University of Castilla-La Mancha</p>
                <p className="description">
                  Specialization in Computing. Bilingual distinction. Final project focused on the rehabilitation of children with Prader-Willi Syndrome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademiaPage;