import React, {useRef, useEffect, useState} from "react";
import './home.css';
import video from '../../elements/video2.mp4';
import box1 from '../../elements/party.jpg';
import box2 from '../../elements/wattCastMain.png';
import box3 from '../../elements/Travel.jpeg';
import { useInView } from "react-intersection-observer";
import { motion as m } from "framer-motion";

import { Link } from "react-router-dom";

const Home = () => {
  const {ref: myRef, inView:myElement} = useInView();
  

  return (
    <m.div
      initial={{x:'100%'}}
      animate={{x:'0%'}}
      transition={{duration: 0.75, ease: 'easeOut'}}
      exit={{opacity: 1}}
      className='absolute top-0 left-0'
    >
    <div className="banner">
        <video src={video} autoPlay muted loop></video>
        <h2>LEO</h2>
    </div>
        <div className="bottomText">
            <div className="leoBox">
            <p className="leo">A design student at the University of Oslo.</p>
            </div>
            <p className="location">Oslo, Norway</p>
        </div>
        <div className="textBox">
          <div>
          <p ref={myRef} 
          className={`${'hidden'}  ${myElement ? 'show': 'hidden'}`} 
          >
          My passion for UX design lies in creating intuitive and user-centric interfaces that deliver a seamless and delightful experience to users.</p>
          </div>
        </div>
        <div className="workSection">
          <div className="mainWorkSection">
            <h1>Highlighted work</h1>
          <div className="box1">
            <Link to='/shfl'>
          <img src={box1}></img>
          </Link>
            <h2>SHFL.</h2>
            <p>UX/UI React</p>
          </div>
          <div className="box1">
            <Link to='/shfl'>
          <img src={box1}></img>
          </Link>
            <h2>Portfolio</h2>
            <p>UX/UI React</p>
          </div>
          <div className="row">
          <div className="box">
            <Link to="/WattCast">
            <img src={box2}></img>
            </Link>
            <h2>WattCast</h2>
            <p>IN2000 Software engineering project</p>
          </div>
          <div className="box">
            <Link to="/portefolio">
          <img src={box3}></img>
          </Link>
            <h2>GelaQuiz</h2>
            <p>IN1060 Design with users project</p>
          </div>
          </div>
          </div>
        </div>
    </m.div>
  );
};

export default Home;
