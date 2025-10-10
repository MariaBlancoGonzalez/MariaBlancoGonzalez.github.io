import React from 'react';
import styled from 'styled-components';

/*CHECK UIVERSE.IO*/
const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <a className="socialContainer containerOne" href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">
          <svg className="socialSvg scholarSvg" viewBox="0 0 48 48" width="20" height="20">
            <path fill="#4285F4" d="M24 4L6 20h5v10h8V20h6v10h8V20h5z"/>
            <path fill="#34A853" d="M6 36v-2c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v2z"/>
            <path fill="#FBBC05" d="M18 36v-2c0-2.21 1.79-4 4-4s4 1.79 4 4v2z"/>
            <path fill="#EA4335" d="M24 44c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z"/>
          </svg>
        </a>
        <a className="socialContainer containerTwo" href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <svg className="socialSvg githubSvg" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48A10.025 10.025 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
  <a className="socialContainer containerThree" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>
  <a className="socialContainer containerFour" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="socialSvg whatsappSvg">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    box-shadow: none;
  }

  /* for all social containers*/
  .socialContainer {
    width: 40px;
    height: 50px;
    background-color: #3d3427;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 1.2s;
    border-radius: 15px 0 15px 0px;
    cursor: pointer;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 1.2s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 1.2s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 1.2s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #f90101;
    transition-duration: 1.2s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 1.2s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 1.2s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default Card;
