import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 1rem;
`;

const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const HomeContent = styled.p`
  font-size: 1.2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to My Website</HomeTitle>
      <HomeContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
        posuere odio. Vivamus tempus justo ex, eget euismod ligula vestibulum
        eget. Sed nec turpis sed massa vestibulum gravida at eu ipsum. Duis
        eleifend varius lorem. Nullam finibus vestibulum eros, quis viverra est
        aliquet sit amet. Suspendisse suscipit, libero a vestibulum fringilla,
        dui orci hendrerit mauris, et aliquam neque ipsum non erat.
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
