import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  display: inline-block; /* Make height auto-adjust based on content */
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  color: black;

  @media (max-width: 600px) {
    padding: 15px;
    max-width: 90%;
  }

  @media (max-width: 600px) {
    padding: 15px;
    max-width: 60%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
`;

const ProjectImage = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 300px; /* Set a max-height to prevent the image from making the popup too tall */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: black;
  color: orange;
  border-radius: 5px;
  text-decoration: none;
  background-color: black;
  }
`;

const Popup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <h2>{project.name}</h2>
        <ProjectImage src={project.imageUrl} alt={`${project.name} image`} />
        <p>{project.description}</p>
        <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </ProjectLink>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
