import React from "react";
import './about.css';
import leoImage from '../../elements/leo2.png';
import { motion as m } from "framer-motion";
import leo from '../../elements/AboutLeo.png';

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
        <img src={leo} alt='picture of me'/>
      </section>
   
      <section className="experience">
        <h1>About</h1>
        <div className="width">
            <p>Alongside my academic pursuits, I find joy in exploring new destinations while nurturing my physical well-being through regular exercise. My dedication to enhancing user journeys and my love for aesthetics drive my pursuit of excellence in the fields of technology and design.</p>
        </div>
      </section>
      
      
      <section className="experience">
        <h1>Experience</h1>
        <div className="column width">
          <div className="job">
            <h1>Coding Instructor</h1>
            <div className="rows">
              <h2>Learnist</h2>
              <h2>April 2022 - june 2023, Oslo</h2>
            </div>
            <p>Planned and conducted coding and programming sessions for groups of students aged 7-16.</p>
            <p>Designed and adapted teaching materials to suit students' learning needs and skill levels.</p>
          </div>
          <div className="job">
            <h1>Employee</h1>
            <div className="rows">
              <h2>Vedøra</h2>
              <h2>December 2022 - present, Oslo</h2>
            </div>
            <p>Executed various tasks within the services offered by Vedøra, including firewood delivery, hedge planting, property maintenance, and handling of waste and estate clearances.</p>
            <p>Contributed to maintaining high quality and standards in the performed work, as well as providing excellent customer service.</p>
          </div>
          <div className="job">
            <h1>Employee</h1>
            <div className="rows">
              <h2>NDS</h2>
              <h2>March 2022 - December 2022, Oslo</h2>
            </div>
            <p>Managed daily tasks in the warehouse, including receiving goods, picking orders, and preparing for delivery.</p>
            <p>Worked efficiently and accurately in a fast-paced environment, maintaining focus and precision under pressure.</p>
          </div>
          <div className="job">
            <h1>Employee</h1>
            <div className="rows">
              <h2>Logent</h2>
              <h2>May 2021 - September 2021, Oslo</h2>
            </div>
            <p>Handled relocation projects for clients, ensuring that all moving operations were carried out on time and to the clients' satisfaction.</p>
            <p>Collaborated with colleagues and clients to ensure that all specific needs and preferences were taken into account in the planning and execution of relocation projects.</p>
          </div>
          <div className="job">
            <h1>Employee</h1>
            <div className="rows">
              <h2>VitusApotek</h2>
              <h2>Juli 2016 - June 2019, Oslo</h2>
            </div>
            <p>Assisted in managing and administering medical products and medications in accordance with pharmacy guidelines and regulations.</p>
            <p>Contributed to various pharmacy tasks, including order reception and medication packaging.</p>
          </div>
        </div>
      </section>
      <section className="fill">
        <section className="experience">
          <h1>Education</h1>
          <div className="column width">
            <div className="job">
              <h1>Computer Science - Design, Use and Interactions</h1>
              <h2>University of Oslo, Oslo, 2024</h2>
            </div>
            <div className="job">
              <h1>Guard of the Royal Guard</h1>
              <h2>His Majesty The king´s Guard, Oslo, 2020</h2>
            </div>
          </div>
        </section>
        <section className="experience">
          <h1>Certificate</h1>
          <div className="column width">
            <div className="job">
              <h1>Build an App in a Weekend</h1>
              <h2>KPMG, 2023</h2>
              <p>Gained experience with ServiceNow</p>
            </div>
          </div>
        </section>
        <section className="experience">
          <h1>Courses</h1>
          <div className="column width">
            <div className="job">
              <h1>IN2010 Algorithms and Data Structures</h1>
              <h2>University of Oslo, 2023, Problem-solving</h2>
              <p>Breaking down complex problems into smaller parts and designing algorithms to solve them.</p>
            </div>
          </div>
        </section>
      </section>
     
      
      
    </m.div>
  );
};

export default About;
