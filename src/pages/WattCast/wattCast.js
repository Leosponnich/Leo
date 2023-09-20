import React, {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import './wattCast.css';
import TitleImg from '../../elements/wattCastTitle.jpg';
import mockup2 from '../../elements/wattcast.png';
import design1 from '../../elements/userTesting.jpg';
import design2 from '../../elements/figmaWattcast.png';
import design3 from '../../elements/workshopWC.jpg';
import video from '../../elements/wattCastVideo2.mov';
import scrumban from '../../elements/scrumban.png';
import learned from '../../elements/learned.jpg';
import TechnologyList, { Button, TechnologyBox } from "../../components/Uielements/Uielements";

import androidLogo from '../../elements/Android.png';
import gitLogo from '../../elements/GitHub.png';
import figmaLogo from '../../elements/Figma.png';


const WattCast = () =>{
    const {ref: myRef, inView:myElement} = useInView();
    const {ref: myRef2, inView:myElement2} = useInView();
    const {ref: info, inView:myLearned} = useInView();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    const technologies = [
        {logo: androidLogo, name: 'Android studio', description: 'Used android studio and Kotlin to devlop the app' },
        {logo: gitLogo, name: 'Github', description: 'version control, seamless collaboration and ensuring a stable development process'},
        {logo:figmaLogo , name: 'Figma', description: 'A powerful tool for collaboration and prototyping'}
    ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <div>
            <section className="wattTitle">
                <img src={TitleImg}/>
            </section>
            <section className="wattText">
            <div className="Testcontainer">
                <div className="column">
                    <div className="Testbox">
                    <p>Project</p>
                    <h2>WattCast</h2>
                    </div>
                    <div className="Testbox">
                        <p>My role</p>
                        <h2>UX Designer</h2>
                        <h2>UI Designer</h2>
                    </div>
                </div>
            <div className="Testbox summary">                
                <p>SUMMARY</p>
                <h2>I held the primary responsibility for the design aspect of the project.</h2>
                <div className="row">
                    <a href="https://github.com/Leosponnich/wattCast"> <div className="button">
                        <p>github</p>
                    </div></a>
                    <a href="https://www.figma.com/file/MJjT1oMm9SgKzokqedp5LG/IN2000-prosjekt?type=design&node-id=0%3A1&mode=design&t=4upON7is8hHNggZB-1"> <div className="button">
                        <p>Figma</p>
                    </div></a>
                </div>
            </div>
            
            </div>
            </section>
            <section className="goal">
                <div>
                    <p ref={myRef2} 
          className={`${'hidden'}  ${myElement2 ? 'show': 'hidden'}`} >The main goal of "WattCast" is to provide users with tools to make more informed decisions about their electricity consumption by predicting future electricity prices based on weather data. Through this application, we aimed to empower users to have better control over their energy costs and encourage more energy-efficient habits.</p>
                </div>

            </section>
            <section className="mockup1">
                <div>
                {isMobile ? <img src={design2}/>  : <video src={video} autoPlay muted></video>}
                </div>
            </section>
            <section className='keyChallenges'>
                <h1>Key Challenges</h1>
                <div className="key">
                <div className="column">
                    <div className="Testbox">
                    <h2>1. User Understanding and Empathy</h2>
                    <p>Understanding user needs and empathizing with their goals and pain points is essential for designing products that truly cater to their requirements.</p>
                    </div>
                    <div className="Testbox">
                        <h2>2. Consistency and Branding</h2>
                        <p>Maintaining consistency in design elements and aligning them with the brand's identity is crucial for a coherent and recognizable user experience.</p>                   
                        </div>
                    <div className="Testbox">
                        <h2>3. Mobile Responsiveness and Multi-platform Compatibility</h2>
                        <p>Designing for various devices, screen sizes, and operating systems demands adaptability and responsiveness. Ensuring seamless user experiences across desktop, tablets, smartphones, and other devices is a significant challenge.</p>
                    </div>
                </div>
                <div className="column">
                <div className="Testbox">
                    <h2>4. Accessibility and Inclusivity</h2>
                    <p>Creating designs that are accessible to users of all abilities is essential. Designers must consider factors such as color contrast, screen readers, keyboard navigation, and other assistive technologies to ensure inclusivity.</p>
                    </div>
                    <div className="Testbox">
                        <h2>5. Balancing Aesthetics with Functionality</h2>
                        <p>Designing visually appealing interfaces while ensuring ease of use and efficient task completion is a delicate balancing act. Striking the right balance between aesthetics and functionality is a constant challenge for designers.</p>
                    </div>
                    <div className="Testbox">
                        <h2>6. Usability Testing and Iteration</h2>
                        <p>Conducting usability testing and incorporating user feedback is essential for refining designs. Regular iterations based on user insights help identify and address usability issues and improve overall user satisfaction.</p>
                    </div>
                    </div>
                    </div>


            </section>
            <section className="mockup2">
                <div>
                <img src={mockup2}/>
                </div>
            </section>


            <section className="process">
                <h1>Design Process</h1>
                <div className="row">
                    <div className="designText">
                        <h2>1. User Needs Analysis</h2>
                        <p>We initiated the project by identifying user needs and pain points through user surveys and interviews. This helped us understand what users truly wanted from an electricity pricing calculator.</p>
                    </div>
                    <img src={design1} />
                </div>
                <div className="row">
                <img ref={myRef} 
          className={`${'hidden'}  ${myElement ? 'show': 'hidden'}`}  src={design2} />
                    <div className="designText">
                        <h2>2. User Interface Design</h2>
                        <p>Using Figma, I designed an intuitive and user-friendly interface for "WattCast." The focus was on creating a simple and engaging experience for users, with clear and informative visualizations of electricity price forecasts.</p>                    
                    </div>
                </div>
                <div className="row">
                    <div className="designText">
                        <h2>3. User Testing and Iteration</h2>
                        <p>To ensure an optimal user experience, we conducted several rounds of user testing. The feedback we received helped us improve the design and address any issues users encountered.</p>
                    </div>
                    <img src={design3} />
                </div>
            </section>

            <TechnologyList technologies={technologies}/>
            <section>
                <div className="scrum">
                    <h1>Methodology</h1>
                    <img src={scrumban}/>
                    <p>For the project, we employed Scrumban as a hybrid project management method, balancing the flexibility of Kanban with the structure of Scrum. This allowed for a smooth and efficient workflow for the team.
                    </p>
                </div>
            </section>
            <section className='learned'>
                <h1>Lessons Learned</h1>
                <div className="lessons">
                    <div className="column">
                        <p ref={info} className={`${'hidden'}  ${myLearned ? 'show': 'hidden'}`}>This project has provided me with valuable experiences in data collection, user testing, and user interface design.</p>
                        <p ref={info} className={`${'hidden'}   ${myLearned ? 'show': 'hidden'}` }> I have gained insights into the importance of teamwork </p>
                        <p ref={info} className={`${'hidden'}  ${myLearned ? 'show': 'hidden'}`}>The necessity of iterative processes in creating successful products.</p>
                    </div>
                    <img src={learned}/>
                </div>
            </section>
        </div>
    )
}

export default WattCast;