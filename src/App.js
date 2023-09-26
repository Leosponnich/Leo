import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from './components/Header/header';
import './components/Header/header.css';
import './pages/Home/home.css';
import './elements/styles.css';
import Home from './pages/Home/home';
import Work from './pages/Work/work';
import SHFL from './pages/Shfl/shfl';
import WattCast from './pages/WattCast/wattCast';
import Listen from './pages/Listen/listen';
import Portfolio from './pages/porfolio/portfolio';
import About from './pages/About/about';
import Footer from './components/Footer/footer';
import ScrollToTop from './components/start/scroll';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

const App = () => {
  return (
    <>
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
          <Route path="listen" element={<Listen />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        </AnimatePresence>
      <Footer />
    </Router>
    <Helmet>
      {/*Global tags */}
      <title>Leosponnich</title>
      <meta name="description" content="Welcome to my portfolio website, where I showcase my skills in IT, web development, and UX/UI design. Explore my projects, discover my creative process, and get in touch to collaborate on exciting new ventures. Let's bring your digital ideas to life together!" />
      <link rel="canonical" href="https://www.leosponnich.com" />
      <meta name="robots" content="index, follow" />

       {/* Open Graph Tags (for Facebook and other platforms) */}
       <meta property="og:title" content="leosponnich" />
        <meta property="og:description" content="Welcome to leosponnich, where creativity meets innovation. Explore my portfolio and discover my journey in IT, web development, and UX/UI design." />
        <meta property="og:url" content="https://www.leosponnich.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags (for Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="leosponnich" />
        <meta name="twitter:description" content="Welcome to leosponnich, where creativity meets innovation. Explore my portfolio and discover my journey in IT, web development, and UX/UI design." />
        <meta name="twitter:url" content="https://www.leosponnich.com/" />
        <meta name="twitter:site" content="@leosponnich" />
    </Helmet>
    <Analytics/>
    </>
  );
};

export default App;
