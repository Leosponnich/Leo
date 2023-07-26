import React from "react";
import './home.css';
import leoImage from '../../elements/leobackground.png';

const Home = () => {
  return (
    <div className="main">
        <div className="spacer"></div>
        <div className="mainContent">
            <div className="leftContent">
            <h1 className="title">Leo</h1>
            <div className="smallText">
            <p className="mainText">I am Leo. A design student at the University of Oslo.</p>
            </div>
            <a href="/work"><p className="link">View my work</p></a>
            </div>   
            <img className="homePicture" alt="Picture of me" src={leoImage} />
        </div>
    </div>
  );
};

export default Home;
