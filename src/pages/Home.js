import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: white;
  animation: ${fadeIn} 2s ease-in;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const Home = () => (
  <HomeContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Title>Welcome to My Portfolio</Title>
    <Description>Discover my projects and education journey.</Description>
  </HomeContainer>
);

export default Home;
