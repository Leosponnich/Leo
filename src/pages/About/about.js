import React from "react";
import './about.css';
import { motion as m } from "framer-motion";
import leo from '../../elements/AboutLeo.png';
import { CertificatesSection, EducationSection, ExperienceSection, SkillsSection } from "./aboutComponents";

const About = () => {

  const experienceData = [
    {
      jobTitle:'UX/UI Designer',
      company: 'Nabostylisten',
      date: 'September 2023 - present, Oslo',
      description:[
        'I have embarked on my role as a UX/UI Designer at Nabostylisten, contributing to the creation of visually appealing and user-friendly digital experiences.'
      ]

    },
    {
      jobTitle:'Coding Instructor',
      company:'Learnist',
      date:'April 2022 - june 2022, Oslo',
      description:[
        'Planned and conducted coding and programming sessions for groups of students aged 7-16.', 
        'Designed and adapted teaching materials to suit students learning needs and skill levels.',
      ],
    },
    {
      jobTitle:'Employee',
      company:'Vedøra',
      date:'December 2022 - present, Oslo',
      description:[
        'Executed various tasks within the services offered by Vedøra, including firewood delivery, hedge planting, property maintenance, and handling of waste and estate clearances.',
        'Contributed to maintaining high quality and standards in the performed work, as well as providing excellent customer service.'
      ],
    },
    {
      jobTitle:'Employee',
      company:'NDS',
      date:'March 2022 - December 2022, Oslo',
      description:[
        'Managed daily tasks in the warehouse, including receiving goods, picking orders, and preparing for delivery.',
        'Worked efficiently and accurately in a fast-paced environment, maintaining focus and precision under pressure.'
      ],
    },
    {
      jobTitle:'Employee',
      company:'Logent',
      date:'May 2021 - September 2021, Oslo',
      description:[
        'Handled relocation projects for clients, ensuring that all moving operations were carried out on time and to the clients satisfaction.',
        'Collaborated with colleagues and clients to ensure that all specific needs and preferences were taken into account in the planning and execution of relocation projects.'
      ],
    },
    {
      jobTitle:'Employee',
      company:'VitusApotek',
      date:'Juli 2016 - June 2019, Oslo',
      description:[
        'Assisted in managing and administering medical products and medications in accordance with pharmacy guidelines and regulations.',
        'Contributed to various pharmacy tasks, including order reception and medication packaging.'

      ],
    },
  ];

  const educationData = [
    {
      degree:'Computer Science - Design, Use and Interactions',
      date: 'University of Oslo, Oslo, 2021-2024'
    },
    {
      degree:'Guard of the Royal Guard',
      date:'His Majesty The king´s Guard, Oslo, 2020'
    }
  ];

  const certificatesData = [
    {
      certificate:'Build an App in a Weekend',
      date:'KPMG, 2023',
      description:'Gained experience with ServiceNow'
    },
  ];

  const skillsData = [
    {
      certificate:'IN2010 Algorithms and Data Structures',
      date:'University of Oslo, 2023',
      description:'Breaking down complex problems into smaller parts and designing algorithms to solve them.'

    }
  ];
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
      <section className="fill">

        <ExperienceSection data={experienceData}/>
        <EducationSection data={educationData}/>
        <CertificatesSection data={certificatesData}/>
        <SkillsSection data={skillsData}/>
        
      </section> 
    </m.div>
  );
};

export default About;
