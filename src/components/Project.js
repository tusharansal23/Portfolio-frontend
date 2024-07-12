import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const CardLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #667eea;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Project = ({ project }) => (
  <Card>
    <CardImage src={project.image} alt={project.title} />
    <CardContent>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
      <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </CardLink>
    </CardContent>
  </Card>
);

export default Project;
