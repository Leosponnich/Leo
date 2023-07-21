import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';

const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={<Home/>} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
