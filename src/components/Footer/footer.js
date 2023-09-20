// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  padding-top: 5vh;
  padding-top:5vh;
  padding-bottom:5vh;
  z-index:100;
`;

const LinkBox = styled.div`
  

  a{
    line-height:3vh;
    text-decoration:none;
    color:#fff;
  }

`

const Footer = () => {
  return (
    <FooterContainer>
      <p>Contact:</p>
      <LinkBox>
        <a href='https://github.com/Leosponnich'><p>Github</p></a>
        <a href='https://www.linkedin.com/in/leo-aleksander-sponnich-009693235/'><p>Linkedin</p></a>
        <p><Link className="mail" onClick={() => window.location.href = 'mailto:leo.sponnich@gmail.com'}>E-mail</Link></p>
        <a href='https://www.instagram.com/leosponnich/'><p>Instagram</p></a>
      </LinkBox>
    </FooterContainer>
    
  );
};

export default Footer;
