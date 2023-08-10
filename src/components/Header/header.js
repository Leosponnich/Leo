import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className ='logo'>
        <Link className='navLink' to="/">Leo Sponnich</Link>
      </div>
      <nav>
      <Link className='navLink' to="/about">About</Link>
      <Link className='navLink' to="/">Work</Link>
      </nav>
    </header>
  );
};

export default Header;
