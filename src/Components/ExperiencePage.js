import React from 'react';
import ProjectBlock from './ProjectBlock';
import styled from 'styled-components';
import TVABackground from './TVABackground';

const PageContainer = styled.div`
  padding: 20px;
  color: #fff;
  min-height: 100vh;
`;

const ExperiencePage = () => {
  const projects = [
    {
      title: 'Unveiling Communication and Support Dynamics: Analyzing Telegram and Helpline Data in Conflict Zones',
      description: 'The traditional Fordist approach to humanitarian response often falls short in addressing the complexities of modern crises. To better understand the demands arising from the Ukrainian situation and suggest practical solutions, this project leverages the Telegram and 527 datasets. By conducting rigorous analysis, we aim to offer insights through the following approaches. (1) 527 Helpline Dataset Analysis: We employed Exploratory Data Analysis (EDA) and a regression model to understand the factors influencing the protection of Ukrainian rights abroad. The regression model helping identified key features impacting these protections. (2) Telegram Dataset Analysis: Using EDA and a Latent Dirichlet Allocation (LDA) machine learning model, we analyzed the Telegram dataset to uncover important themes and communication patterns. This analysis sheds lights on public debates and concerns. By integrating the findings from both datasets, this project aims to provide a comprehensive understanding of digital communication trends and practical support mechanisms. These insights have significant implications for future research on conflict affected populations and international human rights efforts, offering a nuanced perspective on addressing modern humanitarian crises.',
      downloadLink: '/path/to/code-one.zip',
    },
    {
      title: 'Psychiatry and Machine Learning: Unlocking New Frontiers in Mental Health Diagnosis and Treatment',
      description: 'This paper was the culmination of research on psychiatric disorder, electroencephalogram (EEG) data and machine learning models for classification. This research paper examines the role that Machine Learning (ML) can play in aiding psychiatrists in the diagnoses of psychiatric disorder. This paper discusses why an ML model would be helpful in the current mental health climate and to prevent misdiagnoses. It discusses the approach taken to parse and clean the data, analyze it and prepare it for machine learning analysis. Finally, this cleaned data is used in Support Vector Machines (SVM), Random Forest, and CNNs to see which algorithm yields the best model. This paper concludes with a discussion of these approaches and why a multi-class classification model cannot be achieved with this data.',
      downloadLink: '/path/to/code-two.zip',
    },
    {
        title: 'The Future of Screenwriting in the Age of AI',
        description: 'The Humanities and Arts Requirement was completed with a sequence of courses in writing and German that culminated in a research paper in a seminar on AI and the future of work. This research paper examines the role of AI in the future of screenwriting. It discusses the process of creative writing, emphasizing the centrality of conveying and connecting via human emotions. While some of the recent AI systems are designed to replace writers, other AI systems are designed to work with writers. Comparing these types of AI systems, the paper examines human-machine collaboration in creative writing and envisions a possible future where machines and humans create emotionally moving scripts. It concludes with an analysis of AI’s potential impact on the future of Hollywood writers.',
        downloadLink: '/path/to/code-one.zip',
      },
    // Add more projects as needed
  ];

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
    </TVABackground>

  );
};

export default ExperiencePage;
