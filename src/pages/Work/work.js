import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import image1_1 from '../../elements/Roma1.jpeg';
import image1_2 from '../../elements/Roma2.jpeg';
import image2_1 from '../../elements/Gu1.jpeg';
import image2_2 from '../../elements/gu2.jpeg';
import image3_1 from '../../elements/pa1.JPEG';
import image3_2 from '../../elements/Travel.jpeg';
import image4_1 from '../../elements/monopoli1.JPEG';
import image4_2 from '../../elements/monopoli2.JPG';
import image5_1 from '../../elements/ostuni1.jpeg';
import image5_2 from '../../elements/ostuni2.jpeg';
import './work.css';

const MyWorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  
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
  z-index: 100;

  &:hover {
    -webkit-text-stroke: 0px #000000;
    color: #252525; /* Change the hover color as needed */
  }
  ${props =>
    props.$even &&
    css`
      transform: translateX(-30px);
    `}

  ${props =>
    props.$odd &&
    css`
      transform: translateX(40px);
    `}

    @media (max-width: 408px){
      font-size:30px;
    }
`;

const ImageWrapper = styled.div`
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease;
`;

const LeftImage = styled.img`
  top:100px;
  position: fixed;
  left: 30px;
  width: 30vw;
  z-index:1;

  @media (max-width: 768px){
    width: 60vw;
  }
`;

const RightImage = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40vw;
  z-index: 1;

  @media (max-width: 768px){
    width: 60vw;
    right: 80px;
    bottom: 130px;
    
  }
`;

const Work = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = word => {
    setSelectedWord(word);
  };

  const handleMouseLeave = () => {
    setSelectedWord(null);
  };
  const words = ['Rome', 'Guilianova', 'Polignano a mare', 'Monopoli', 'Ostuni'];
  const wordImages = {
    'Rome': [image1_1, image1_2],
    'Guilianova': [image2_1, image2_2],
    'Polignano a mare': [image3_1, image3_2],
    'Monopoli': [image4_1, image4_2],
    'Ostuni': [image5_1, image5_2],
  };

  return (
    <MyWorkContainer>
      <WorkList>
        {words.map((word,index) => (
        <WorkItem
            key={index}
            $even={index%2 ===0}
            $odd={index%2 !==0}
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
      <ImageWrapper $isVisible={selectedWord !== null}>
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
