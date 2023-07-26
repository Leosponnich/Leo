import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import image1_1 from '../../elements/leo.png';
import image1_2 from '../../elements/leo.png';
import image2_1 from '../../elements/leo.png';
import image2_2 from '../../elements/leo.png';
import image3_1 from '../../elements/leo.png';
import image3_2 from '../../elements/leo.png';
import image4_1 from '../../elements/leo.png';
import image4_2 from '../../elements/leo.png';
import image5_1 from '../../elements/Travel2.jpeg';
import image5_2 from '../../elements/Travel.jpeg';

const MyWorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffbf2;
`;

const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
`;

const WorkItem = styled.li`
-webkit-text-stroke: 1px #000000;
  color: transparent;
  font-family: "Inter-Bold", Helvetica;
  font-size: 64px;
  font-weight: 700;
  font-size: 64px;
  margin: -10px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 2;

  &:hover {
    -webkit-text-stroke: 0px #000000;
    color: #252525; /* Change the hover color as needed */
  }
  ${props =>
    props.even &&
    css`
      transform: translateX(-30px);
    `}

  ${props =>
    props.odd &&
    css`
      transform: translateX(40px);
    `}
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 150px;
  height: 100px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease;
`;

const LeftImage = styled.img`
  position: fixed;
  bottom: 50px;
  left: 10px;
  width: 250px;
  height: 200px;
`;

const RightImage = styled.img`
  position: fixed;
  bottom: 200px;
  right: 10px;
  width: 250px;
  height: 350px;
  z-index: 1
`;

const Work = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = word => {
    setSelectedWord(word);
  };

  const handleMouseLeave = () => {
    setSelectedWord(null);
  };
  const words = ['WattCast', 'SHFL.', 'Portfolio', 'GelaQuiz', 'Travel'];
  const wordImages = {
    'WattCast': [image1_1, image1_2],
    'SHFL.': [image2_1, image2_2],
    'Portfolio': [image3_1, image3_2],
    'GelaQuiz': [image4_1, image4_2],
    'Travel': [image5_1, image5_2],
  };

  return (
    <MyWorkContainer>
      <WorkList>
        {words.map((word,index) => (

        <WorkItem
            key={index}
            even={index%2 ===0}
            odd={index%2 !==0}
            onMouseEnter={() => handleWordClick(word)} 
            onMouseLeave={handleMouseLeave}
                style={{
                    marginLeft: index%2===0 ? '-10px' : 0,
                    marginRight: index % 2 !==0 ? '-10px' : 0,
                }}
          >
          {word}
        </WorkItem>
        ))}
      </WorkList>
      <ImageWrapper isVisible={selectedWord !== null}>
        {selectedWord !== null && (
          <>
            <LeftImage src={wordImages[selectedWord][0]} alt={`${selectedWord}-left`} />
            <RightImage src={wordImages[selectedWord][1]} alt={`${selectedWord}-right`} />
          </>
        )}
      </ImageWrapper>
    </MyWorkContainer>
  );
};

export default Work;
