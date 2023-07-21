// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Leo Sponnich. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
