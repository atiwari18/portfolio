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
import torchLogo from './torch.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  min-height: 100vh; /* Ensure the wrapper takes full viewport height */
  padding: 1px;
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
                Hello! I'm Atharva Tiwari, an AI researcher and engineer focused on the intersection of deep learning and industrial efficiency. 
                Currently pursuing an M.S. in Computer Science and a B.S. in Industrial Engineering at Worcester Polytechnic Institute, 
                I specialize in deploying high-performance intelligence into resource-constrained environments.
            </p>

            <p>
                My technical foundation is built on years of bridging the gap between advanced models and real-world application. From developing 
                NLP-driven predictive models at ABB  to optimizing supply chain and manufacturing systems at GE Aerospace  and 
                Eaton Corporation, I have consistently focused on driving operational performance. My current research, which includes 
                Continuous-Time Modeling using Neural ODEs and Liquid Time-Constant (LTC) Networks, serves as the engine for my startup. 
                We are currently optimizing these complex CV architectures to run on edge hardware, enabling real-time, efficient intelligence 
                for industrial vehicles.
            </p>

            <p>
                Whether it’s benchmarking state-of-the-art models for computational efficiency  or architecting full-stack AI solutions, 
                I thrive on tackling the challenges where high-level mathematics meets the physical-world constraints of edge devices. I am 
                passionate about building systems that are not only theoretically advanced but architecturally lean and scalable.
            </p>

            <p>
                I am driven by the challenge of translating technical complexity into tangible industrial impact. I’m currently looking to connect 
                with teams that are as committed to innovation and operational excellence as I am. Let’s build the future and change the world!
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
            <img src={torchLogo} alt="torch" />
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
