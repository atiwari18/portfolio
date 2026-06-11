import React from 'react';
import styled from 'styled-components';

const BlockContainer = styled.div`
  width: 75%;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ff8752;
  width: 100%;
  text-align: left;
`;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  color: #ffffff;
  text-align: left;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff8752;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #ff5733;
    color: #fff;
  }
`;

const ProjectBlock = ({ title, description, downloadLink, githubUrl }) => {
  return (
    <BlockContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonContainer>
        {downloadLink && (
          <Button href={downloadLink} download>
            Download Paper
          </Button>
        )}
        {githubUrl && (
          <Button href={githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Button>
        )}
      </ButtonContainer>
    </BlockContainer>
  );
};

export default ProjectBlock;