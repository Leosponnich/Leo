import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


import Header from './components/Header/header';
import './components/Header/header.css';
import './pages/Home/home.css';
import './elements/styles.css';
import Home from './pages/Home/home';
import Work from './pages/Work/work';
import SHFL from './pages/Shfl/shfl';
import WattCast from './pages/WattCast/wattCast';
import About from './pages/About/about';
import Footer from './components/Footer/footer';
import ScrollToTop from './components/start/scroll';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <AnimatePresence initial={false} >
        <Routes key={Route.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="shfl" element={<SHFL />} />
          <Route path="WattCast" element={<WattCast />} />
        </Routes>
        </AnimatePresence>
      <Footer />
    </Router>
  );
};

export default App;
