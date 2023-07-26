import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/Home/home';
import Work from './pages/Work/work';
import Resume from './pages/Resume/resume';
import About from './pages/About/about';
import Footer from './components/Footer/footer';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='work' Component={Work}/>
        <Route path='about' Component={About}/>
        <Route path='resume' Component={Resume}/>
        </Routes>
      <Footer />
    </Router>

  );
};

export default App;
