import React, { useEffect, useState } from 'react';
import Education from './Education';
import styled from 'styled-components';

const EducationListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const EducationList = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('http://localhost:5000/education');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEducation(data);
      } catch (error) {
        console.error('There was an error fetching the education data!', error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <EducationListContainer>
      {education.map(ed => (
        <Education key={ed.id} education={ed} />
      ))}
    </EducationListContainer>
  );
};

export default EducationList;
