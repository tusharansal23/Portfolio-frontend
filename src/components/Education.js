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

const Education = ({ education }) => (
  <Card>
    <CardContent>
      <CardTitle>{education.school}</CardTitle>
      <CardDescription>
        {education.degree} in {education.field} ({education.startYear} - {education.endYear})
      </CardDescription>
    </CardContent>
  </Card>
);

export default Education;
