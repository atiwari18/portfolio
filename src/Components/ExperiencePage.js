import React, {useState} from 'react';
import ProjectBlock from './ProjectBlock';
import Popup from './Popup';
import styled from 'styled-components';
import TVABackground from './TVABackground';
import wireshark from './wireshark.png';
import qrserver from './QRServer.png';
import seats4u from './seats4u.png';
import howtosave from './how_to_save.png';
import cardiac from './rehab.png';
import mqp from './Unveiling Communication and Support Dynamics Analyzing Telegram and Helpline Data in Conflict Zones (Atharva Tiwari).pdf';
import psych from './Psychiatric_Disorder_ML_Paper.pdf'
import humanities from './Future of Screenwriting in the Age of AI.pdf'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr)); /* Adjusts columns to fit available space */
  gap: 20px;
  padding: 20px;
  box-sizing: border-box; /* Ensures padding is included in the width calculation */

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr)); /* Adjust columns for smaller screens */
  }

  @media (max-width: 685px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr)); /* Adjust columns for smaller screens */
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Further adjust columns for very small screens */
  }
`;

const GridItem = styled.div`
  background-color: black; /* Example background color */
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  align-items: center;
  justify-content: center;
  color: orange;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Courier New', Courier, monospace;

  &:hover {
    background-color: orange; /* Change background color on hover */
    color: black; /* Optional: Change text color on hover for contrast */
  }

  @media (max-width: 600px) {
    font-size: 1.2rem; /* Smaller font size on smaller screens */
    padding: 10px; /* Reduce padding on smaller screens */
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px; /* Space between the image and the text */
`;

const codingProjects = [
    {
      name: 'Wireshark CLI',
      imageUrl: wireshark,
      description: 'A command-line interface like Wireshark called Wireview, allowing for efficient packet analysis.',
      githubUrl: 'https://github.com/atiwari18/wireview',
    },
    {
      name: 'QR Code Server',
      imageUrl: qrserver,
      description: 'A server to generate and serve QR codes dynamically for various applications.',
      githubUrl: 'https://github.com/atiwari18/QRServer',
    },
    {
      name: 'Seats4U',
      imageUrl: seats4u,
      description: 'A seat booking system for events, with a user-friendly interface and admin controls.',
      githubUrl: 'https://github.com/atiwari18/CS3733UlyseesB23',
    },
    {
      name: 'How To Save',
      imageUrl: howtosave,
      description: 'An application to help users track and manage their savings effectively.',
      githubUrl: 'https://github.com/atiwari18/monthly_savings_reccomendations',
    },
    {
      name: 'Achieving Effective Operations @ Cardiac Rehabilitation Center',
      imageUrl: cardiac,
      description: 'A project aimed at improving operational efficiency in cardiac rehabilitation centers.',
      githubUrl: 'https://docs.google.com/presentation/d/1jgeI3ydtaOG72IWtX9FeOCAhvHhj6-Mqs53lLUXCI6k/edit?usp=sharing',
    },
  ];

const ExperiencePage = () => {
  const projects = [
    {
      title: 'Unveiling Communication and Support Dynamics: Analyzing Telegram and Helpline Data in Conflict Zones',
      description: 'The traditional Fordist approach to humanitarian response often falls short in addressing the complexities of modern crises. To better understand the demands arising from the Ukrainian situation and suggest practical solutions, this project leverages the Telegram and 527 datasets. By conducting rigorous analysis, we aim to offer insights through the following approaches. (1) 527 Helpline Dataset Analysis: We employed Exploratory Data Analysis (EDA) and a regression model to understand the factors influencing the protection of Ukrainian rights abroad. The regression model helping identified key features impacting these protections. (2) Telegram Dataset Analysis: Using EDA and a Latent Dirichlet Allocation (LDA) machine learning model, we analyzed the Telegram dataset to uncover important themes and communication patterns. This analysis sheds lights on public debates and concerns. By integrating the findings from both datasets, this project aims to provide a comprehensive understanding of digital communication trends and practical support mechanisms. These insights have significant implications for future research on conflict affected populations and international human rights efforts, offering a nuanced perspective on addressing modern humanitarian crises.',
      downloadLink: mqp,
    },
    {
      title: 'Psychiatry and Machine Learning: Unlocking New Frontiers in Mental Health Diagnosis and Treatment',
      description: 'This paper was the culmination of research on psychiatric disorder, electroencephalogram (EEG) data and machine learning models for classification. This research paper examines the role that Machine Learning (ML) can play in aiding psychiatrists in the diagnoses of psychiatric disorder. This paper discusses why an ML model would be helpful in the current mental health climate and to prevent misdiagnoses. It discusses the approach taken to parse and clean the data, analyze it and prepare it for machine learning analysis. Finally, this cleaned data is used in Support Vector Machines (SVM), Random Forest, and CNNs to see which algorithm yields the best model. This paper concludes with a discussion of these approaches and why a multi-class classification model cannot be achieved with this data.',
      downloadLink: psych,
    },
    {
        title: 'The Future of Screenwriting in the Age of AI',
        description: 'The Humanities and Arts Requirement was completed with a sequence of courses in writing and German that culminated in a research paper in a seminar on AI and the future of work. This research paper examines the role of AI in the future of screenwriting. It discusses the process of creative writing, emphasizing the centrality of conveying and connecting via human emotions. While some of the recent AI systems are designed to replace writers, other AI systems are designed to work with writers. Comparing these types of AI systems, the paper examines human-machine collaboration in creative writing and envisions a possible future where machines and humans create emotionally moving scripts. It concludes with an analysis of AI’s potential impact on the future of Hollywood writers.',
        downloadLink: humanities,
      },
    // Add more projects as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <TVABackground>
        <h1 className="tva-title">My Experience</h1>
        {projects.map((project, index) => (
          <ProjectBlock
            key={index}
            title={project.title}
            description={project.description}
            downloadLink={project.downloadLink}
          />
        ))}

        <GridContainer>
            {codingProjects.map((project, index) => (
            <GridItem key={index} onClick={() => handleProjectClick(project)}>
                <ProjectImage src={project.imageUrl} alt={`${project.name} image`} />
                {project.name}
            </GridItem>
            ))}
        </GridContainer>

        {/* Popup for project details */}
        {selectedProject && (
        <Popup project={selectedProject} onClose={handleClosePopup} />
        )}
    </TVABackground>

  );
};

export default ExperiencePage;
