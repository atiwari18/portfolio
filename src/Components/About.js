import React from 'react';
import styled from 'styled-components';
import TVABackground from './TVABackground';
import yourImage from './PIC_5867.jpg';
import resumePDF from './Resume (Atharva Tiwari).pdf';
// Import your tech stack logos
import pythonLogo from './python.png'; 
import CLogo from './C.png';
import CppLogo from './C++.png';
import CSSLogo from './css3.png';
import githubLogo from './github.png';
import javaLogo from './java.png';
import jsLogo from './JavaScript.png';
import reactLogo from './react.png';
import sciKitLogo from './scikit.png';
import tensorLogo from './Tensor.png';
import sqlLogo from './sql.png';
import gitLogo from './git.png';
import linuxLogo from './linux.png';
import awsLogo from './aws.png';
import numpyLogo from './numpy.png';
import pandasLogo from './pandas.png';
import windowsLogo from './windows.png';
import powerBILogo from './powerbi.png';
import msOfficeLogo from './msoffice.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  min-height: 100vh; /* Ensure the wrapper takes full viewport height */
  padding: 20px;
`;

const Container = styled.div`
  display: flex; /* Add this to make children elements side by side */
  justify-content: space-between;
  align-item: flex-start;
  padding: 20px;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto 0 auto; /* Add a top margin to the container */

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 45%;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const ImageBox = styled(Box)`
  &:hover {
    background-color: orange;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const DescriptionBox = styled(Box)`
  padding: 20px;
  color: orange;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
  overflow-y: auto;

  &:hover {
    background-color: orange;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

const TechStackItem = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 60px;
    height: auto;
  }
`;

// Global style for titles
const Title = styled.h1`
  margin: 10px;
  font-family: 'Courier New', Courier, monospace;
  color: orange;
  text-align: center;
`;

const ResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 40px auto 0 auto;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ResumePreview = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const DownloadButton = styled.a`
  padding: 10px 20px;
  background-color: orange;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff9800;
  }
`;

// In your About component
const About = () => {
  return (
    <TVABackground>
      <Wrapper>
        <Title className='tva-title'>About Me</Title>
        <Container>
          <ImageBox>
            <Image src={yourImage} alt="Your Name" />
          </ImageBox>
          <DescriptionBox>
            <p>
            Hello! I'm Atharva Tiwari, a driven and curious individual currently pursuing a Master’s in Computer Science and a Bachelor’s in 
            Industrial Engineering at Worcester Polytechnic Institute. My academic journey has equipped me with a unique blend of technical 
            expertise and problem-solving skills, particularly in the fields of machine learning, software engineering, and operations management.
            </p>

            <p>
            Throughout my time at WPI, I've had the opportunity to work on diverse projects that have honed my abilities to analyze complex 
            datasets, develop innovative software solutions, and optimize operational processes. One such project involved developing machine 
            learning models to classify messages from Telegram and Helpline datasets, providing actionable insights into resource allocation and 
            needs in conflict zones. This project highlighted the potential of data-driven approaches in humanitarian efforts.
            </p>

            <p>
            In another project I have Explored the use of machine learning for the diagnosis of psychiatric disorders. Built and evaluated 
            models using EEG data, demonstrating how technology can assist in reducing misdiagnosis and improving mental health care. Led a 
            team in creating a comprehensive seat booking system, "Seats4U," utilizing React.js and AWS services. The platform is user-friendly, 
            offering efficient management of event seating with integrated admin controls.
            </p>

            <p>
            I find immense joy in what I do, whether it's coding, problem-solving, or diving into complex projects. My passion for technology 
            fuels my continuous desire to learn and grow, driving me to explore new challenges and develop innovative solutions. I believe that 
            with each project, there's an opportunity to learn something new, which keeps my enthusiasm alive.
            </p>

            <p>
            As I approach the next phase of my career, I am eager to take on new challenges that will allow me to continue growing as a 
            software engineer and machine learning engineer. I look forward to contributing my skills and knowledge to a dynamic team where 
            I can make a meaningful impact.
            </p>
          </DescriptionBox>
        </Container>

        <Title className='tva-title'>My Techstack</Title>
        <TechStackContainer>
          <TechStackItem>
            <img src={pythonLogo} alt="Python" />
          </TechStackItem>
          <TechStackItem>
            <img src={tensorLogo} alt="Tensor" />
          </TechStackItem>
          <TechStackItem>
            <img src={sciKitLogo} alt="SCiKit" />
          </TechStackItem>
          <TechStackItem>
            <img src={numpyLogo} alt="Numpy" />
          </TechStackItem>
          <TechStackItem>
            <img src={pandasLogo} alt="Pandas" />
          </TechStackItem>
          <TechStackItem>
            <img src={jsLogo} alt="JS" />
          </TechStackItem>
          <TechStackItem>
            <img src={CSSLogo} alt="CSS" />
          </TechStackItem>
          <TechStackItem>
            <img src={reactLogo} alt="React" />
          </TechStackItem>
          <TechStackItem>
            <img src={javaLogo} alt="Java" />
          </TechStackItem>
          <TechStackItem>
            <img src={CLogo} alt="C" />
          </TechStackItem>
          <TechStackItem>
            <img src={CppLogo} alt="Cpp" />
          </TechStackItem>
          <TechStackItem>
            <img src={githubLogo} alt="Github" />
          </TechStackItem>
          <TechStackItem>
            <img src={linuxLogo} alt="Linux" />
          </TechStackItem>
          <TechStackItem>
            <img src={windowsLogo} alt="Windows" />
          </TechStackItem>
          <TechStackItem>
            <img src={sqlLogo} alt="SQL" />
          </TechStackItem>
          <TechStackItem>
            <img src={gitLogo} alt="Git" />
          </TechStackItem>
          <TechStackItem>
            <img src={awsLogo} alt="AWS" />
          </TechStackItem>
          <TechStackItem>
            <img src={powerBILogo} alt="PowerBI" />
          </TechStackItem>
          <TechStackItem>
            <img src={msOfficeLogo} alt="MS Office" />
          </TechStackItem>
        </TechStackContainer>

        <ResumeSection>
          <Title className='tva-title'>My Resume</Title>
          <ResumePreview src={resumePDF} title="Resume Preview" />
          <DownloadButton href={resumePDF} download="Atharva_Tiwari_Resume.pdf">
            Download My Resume
          </DownloadButton>
        </ResumeSection>
      </Wrapper>
    </TVABackground>
  );
};

export default About;
