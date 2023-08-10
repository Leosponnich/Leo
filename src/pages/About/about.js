import React from "react";
import './about.css';
import leoImage from '../../elements/leo2.png';
import { motion as m } from "framer-motion";
import Insta from '../../elements/instagram.png';
import linkedin from '../../elements/linkedin.png';
import email from '../../elements/Email.png';
import leo from '../../elements/AboutLeo.png';

import { Link } from "react-router-dom";

const About = () => {
  return (
    <m.div 
      initial={{y:'100%'}}
      animate={{y:'0%'}}
      transition={{duration: 0.75, ease: 'easeOut'}}
      exit={{opacity: 1}}
      className="main absolute top-0 left-0 w-full h-full bg-red-200"
    >
      <section className="top-bar">
        <div className="text">
          <h1>As a final-year Bachelor's student at UiO studying Computer Science, Design, Use, and Interactions, I possess a strong passion for crafting seamless user experiences and have a keen eye for design. </h1>
        </div>
        <img src={leo}/>
      </section>
   
      <section className="experience">
        <h1>About</h1>
        <p>Alongside my academic pursuits, I find joy in exploring new destinations while nurturing my physical well-being through regular exercise. My dedication to enhancing user journeys and my love for aesthetics drive my pursuit of excellence in the fields of technology and design.</p>
      </section>
      <section className="experience">
        <h1>Experience</h1>
        <div>
          <h1>Coding Instructor</h1>
          <h2>Learnist</h2>
          <p>Planned and conducted coding and programming sessions for groups of students aged 7-16.</p>
          <p>Designed and adapted teaching materials to suit students' learning needs and skill levels.</p>
        </div>
      </section>
      <section className="experience">
        <h1>Experience</h1>
        <div>
          <p>ting 1</p>
          <p>ting 2</p>
        </div>
      </section>
     
      
      <section className="contact">
          <div>
            <h1 className="contact-title">Let´s Talk!</h1>
            <p>undertitle</p>
            <div className="contact-row">
              <div>
                <img src={Insta}/>
                <p>Instagram</p>
              </div>
              <div>
                <img src={linkedin}/>
                <p>Linkedin</p>
              </div>
              <div className="mail-container">
                <img src={email}/>
                <p>
                <Link className="mail" onClick={() => window.location.href = 'mailto:leo.sponnich@gmail.com'}>E-mail</Link>
                </p>
              </div>
              
            </div>


          </div>

      </section>
    </m.div>
  );
};

export default About;
