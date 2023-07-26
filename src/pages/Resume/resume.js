import React from "react";
import './resume.css';
import video from '../../elements/video2.mp4';

const Resume = () => {
  return (
    <div>
    <div className="banner">
        <video src={video} autoPlay muted loop></video>
        <h2>LEO</h2>
    </div>
        <div className="bottomText">
            <div className="leoBox">
            <p className="leo">I am Leo. A design student at the University of Oslo.</p>
            </div>
            <p className="location">Oslo, Norway</p>
        </div>
    </div>
  );
};

export default Resume;
