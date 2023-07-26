import React from "react";
import './about.css';
import leoImage from '../../elements/leo2.png';

const About = () => {
  return (
    <div className="main">
        <div className="spacer"></div>
        <div className="aboutMainContent">
            <div className="aboutLeftContent">
            <p className="bigText">As a final-year Bachelor's student at UiO studying Computer Science, Design, Use, and Interactions, I possess a strong passion for crafting seamless user experiences and have a keen eye for design. </p>
            <div className="smallTextBox">
            <p className="aboutMainText">Alongside my academic pursuits, I find joy in exploring new destinations while nurturing my physical well-being through regular exercise. My dedication to enhancing user journeys and my love for aesthetics drive my pursuit of excellence in the fields of technology and design.</p>
            </div>
            <div className="brownBox">
                <p className="brownBoxText">For inquiries or collaboration opportunities, feel free to contact me.
Let's connect and explore exciting possibilities together!</p>
            </div>
            </div>   
            <img className="picture" alt="Picture of me" src={leoImage} />
        </div>
    </div>
  );
};

export default About;
