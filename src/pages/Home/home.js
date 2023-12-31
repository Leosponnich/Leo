import React, {useRef, useEffect, useState} from "react";
import './home.css';
import video from '../../elements/video2.mp4';
import box1 from '../../elements/party.jpg';
import box2 from '../../elements/wattCastMain.png';
import box3 from '../../elements/Travel.jpeg';
import box4 from '../../elements/gelateam.png';
import portfolioTitle from '../../elements/portfolio-title.jpg'
import { useInView } from "react-intersection-observer";
import { motion as m } from "framer-motion";

import { Link } from "react-router-dom";

const Home = () => {
  const {ref: myRef, inView:myElement} = useInView();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <m.div
      initial={{y:'100%'}}
      animate={{y:'0%'}}
      transition={{duration: 0.75, ease: 'easeOut'}}
      exit={{opacity: 1}}
      className='absolute top-0 left-0'
      style={{
        backgroundImage: isMobile ? `url(${box1})` : `url(${video})`,
        backgroundSize: 'cover',
      }}
    >
    <div className="banner">
    {isMobile ? null : <video src={video} autoPlay muted loop></video>}
        <h2>LEO</h2>
    </div>
        <div className="bottomText">
            <div className="leoBox">
            <p className="leo">A design student at the University of Oslo.</p>
            </div>
            <p className="location">Oslo, Norway</p>
        </div>
        <div className="textBox">
          <div className="sliding-text">
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
              <p>Interactive party game using Spotify API and Firebase. UX/UI</p>
            </div>
            <div className="box1">
                <Link to='/listen'>
                <div className="listen-box background">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p>LISTEN</p>
                </div>
                </Link>
                <h2>Listen</h2>
                <p>Real-time Music Sharing Web Application with React, Firebase, Spotify API, Vercel and GitHub</p>
              </div>
            <div className="roww">
              <div className="box">
                <Link to='/work'>
                <img src={box3}/>
                </Link>
                <h2>Travel</h2>
                <p>Picturebook</p>
              </div>
              <div className="box">
                <Link to="https://www.uio.no/studier/emner/matnat/ifi/IN1060/v22/prosjekter-var-2022/gelateam/">
                <img src={box4}/>
                </Link>
                <h2>GelaQuiz</h2>
                <p>IN1060 Design with users project</p>
              </div>
            </div>
            <div className="roww">
              <div className="box">
                <Link to="/WattCast">
                <img src={box2}></img>
                </Link>
                <h2>WattCast</h2>
                <p>IN2000 Software engineering project</p>
              </div>
              <div className="box">
                <Link to="/portfolio">
                <img src={portfolioTitle}></img>
                </Link>
                <h2>This portfolio</h2>
                <p>Created using Figma, React, Vercel and GitHub</p>
              </div>
              </div>
          </div>
        </div>
    </m.div>
  );
};

export default Home;
