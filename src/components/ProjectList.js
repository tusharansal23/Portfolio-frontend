import React, { useEffect, useState } from 'react';
import Project from './Project';
import styled from 'styled-components';

const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('There was an error fetching the projects!', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectListContainer>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;
