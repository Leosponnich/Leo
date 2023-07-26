import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import linkedin from '../../elements/linkedin.svg'
import instagram from '../../elements/instagram.png'

const HeaderContainer = styled.header`
  color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.img`
  height: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIconLink = styled.a`
  display: inline-block;
  margin-right: 1rem;
`;

const SocialIcon = styled.img`
  height: 16px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const NavLink = styled(Link)`
  color: #252525;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;

  &:hover {
    color: brown;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SocialLinks>
        <NavLink to="/">¨L¨</NavLink>
        <SocialIconLink href="https://www.linkedin.com/in/leo-aleksander-sponnich-009693235/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={linkedin} alt="LinkedIn" />
        </SocialIconLink>
        <SocialIconLink href="https://www.instagram.com/leosponnich/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src={instagram} alt="Instagram" />
        </SocialIconLink>
      </SocialLinks>
      <Nav>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
