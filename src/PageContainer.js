import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import HomePage from './pages/Home/home';
import Work from './pages/Work/work';
import About from './pages/About/about';
import SHFL from './pages/Shfl/shfl';
import WattCast from './pages/WattCast/wattCast';

const PageContainer = () => {
  const location = useLocation();

  return (
    <div>
      {/* Use React Transition Group components for animations */}
      <CSSTransition
        in={true}
        appear={true}
        timeout={300}
        classNames="page"
      >
        <div>
          {location.pathname === '/' && <HomePage />}
          {location.pathname === '/work' && <Work />}
          {location.pathname === '/about' && <About />}
          {location.pathname === '/shfl' && <SHFL />}
          {location.pathname === '/WattCast' && <WattCast />}
        </div>
      </CSSTransition>
    </div>
  );
};

export default PageContainer;
