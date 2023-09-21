import { useInView } from "react-intersection-observer";
import './shfl.css';
import TitleImg from '../../elements/ShflHeader.jpg';
import mockup2 from '../../elements/shflmany.png';
import design1 from '../../elements/en.jpg';
import design2 from '../../elements/to.png';
import design3 from '../../elements/tre.jpg';
import design4 from '../../elements/fire.jpg';
import video from '../../elements/SHFLwalk.mov';
import startpage from '../../elements/shflstartpage2.png';
import learned from '../../elements/learned.jpg';
import React, {useEffect, useState} from "react";

import gitLogo from '../../elements/GitHub.png';
import figmaLogo from '../../elements/Figma.png';
import firebaseLogo from '../../elements/Firebase.png'
import reactLogo from '../../elements/react.png'
import nodeLoge from '../../elements/NodeJS.png'
import TechnologyList from "../../components/Uielements/Uielements";

const Shfl = () =>{
    const {ref: myRef, inView:myElement} = useInView();
    const {ref: myRef2, inView:myElement2} = useInView();
    const {ref: info, inView:myLearned} = useInView();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    const technologies = [
        {logo: nodeLoge, name: 'Node/Express', description: 'For backend services and real-time data synchronization.' },
        {logo: firebaseLogo, name: 'Node/Express', description: 'For database' },
        {logo: gitLogo, name: 'Github', description: 'version control, seamless collaboration and ensuring a stable development process'},
        {logo:figmaLogo , name: 'Figma', description: 'A powerful tool for collaboration and prototyping'},
        { logo: reactLogo, name: 'React', description: 'A JavaScript library for building user interfaces.' },

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
        <div className="black-page">
            <section className="shflTitle">
                <img src={TitleImg}/>
            </section>
            <section className="shflText">
            <div className="Testcontainer">
                <div className="column">
                    <div className="Testbox">
                    <p>Project</p>
                    <h2>SHFL.</h2>
                    </div>
                    <div className="Testbox">
                        <p>My role</p>
                        <h2>UX/UI Designer</h2>
                    </div>
                </div>
            <div className="Testbox summary">                
                <p>SUMMARY</p>
                <h2>I held the primary responsibility for the design aspect of the project.</h2>
                <div className="title-buttons">
                    {/*<a href=""> <div className="button">
                        <p>Play SHFL!</p>
    </div></a>*/}
                    <a href="https://www.figma.com/file/uynZ5MJCfwwhqKcmGexrDk/SHFL?type=design&node-id=0%3A1&mode=design&t=YEEo3m0OYsg0n3vs-1"> <div className="button">
                        <p>Figma</p>
                    </div></a>
                </div>
            </div>
            </div>
            </section>
            <section className="shfl-goal-box">
                <div className="shfl-goal">
                    <p ref={myRef2} 
          className={`${'hidden'}  ${myElement2 ? 'show': 'hidden'}`} >The main goal of <span className="shfl">SHFL</span> was to create an engaging and entertaining social experience that blended music, guessing, and camaraderie. This unique project aimed to bring friends together in a fun and interactive way, encouraging laughter, competition, and shared memories during gatherings and game nights.</p>
                </div>

            </section>
            <section className="mockup">
                <div>
                {isMobile ? <img src={startpage}/>  : <video src={video} autoPlay muted loop></video>}
                </div>
            </section>
            <section className='shfl-keyChallenges'>
                <div className="keyChallenges">
                <h1>Key Challenges</h1>
                <div className="shfl-key">
                <div className="column">
                    <div className="Testbox">
                        <h2>1. User-Centric Experience:</h2>
                        <p>Designing an intuitive and user-friendly interface that allowed players to focus on the game mechanics without getting overwhelmed by controls.</p>
                    </div>
                    <div className="Testbox">
                        <h2>2. Real-Time Voting:</h2>
                        <p>Implementing a seamless real-time voting system that enabled players to make quick and accurate guesses while the song was still playing.</p>                   
                        </div>
                    <div className="Testbox">
                        <h2>3. Balancing Game Elements:</h2>
                        <p>Striking the right balance between the musical, guessing, and drinking aspects of the game to ensure a dynamic and enjoyable gameplay experience.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="Testbox">
                        <h2>4. Mobile Accessibility:</h2>
                        <p>Crafting a responsive design that worked effectively across various devices, particularly mobile phones, to facilitate gameplay anytime and anywhere.</p>
                    </div>
                    <div className="Testbox">
                        <h2>5. Visual Communication:</h2>
                        <p>Creating visual elements that effectively conveyed the game's rules, voting options, and song information to ensure clarity for all players.</p>
                    </div>
                    <div className="Testbox">
                        <h2>6. Data Integration with Spotify:</h2>
                        <p>Integrating the Spotify API to gather and incorporate each player's most played songs into the game's playlist, requiring seamless synchronization.</p>
                    </div>
                    </div>
                    </div>
                    </div>

            </section>
            <section className="mockup2">
                <div>
                <img src={mockup2}/>
                </div>
            </section>

            <section className="shfl-process">
                <div className="process">
                <h1>Design Process</h1>
                <p>The design process of "SHFL" consisted of several iterative stages that aimed to optimize user experience and gameplay. It involved:</p>
                <div className="roww">
                    <div className="designText">
                        <h2>1. Conceptualization</h2>
                        <p>Brainstorming the concept of a music-based drinking game with guessing elements, defining the rules, and outlining the core gameplay flow.</p>
                    </div>
                    <img src={design1} />
                </div>
                <div className="roww">
                <img ref={myRef} 
          className={`${'hidden'}  ${myElement ? 'show': 'hidden'}`}  src={design2} />
                    <div className="designText">
                        <h2>2. User-Centric Design:</h2>
                        <p>Developing wireframes and mockups using Figma to design an intuitive and engaging user interface that catered to the target audience's preferences.</p>                    
                    </div>
                </div>
                <div className="roww">
                    <div className="designText">
                        <h2>3. Prototyping and Testing:</h2>
                        <p>Creating interactive prototypes to test the usability and functionality of the game's features through rigorous playtesting with friends.</p>
                    </div>
                    <img src={design3} />
                </div>
                <div className="roww">
                <img src={design4} />
                    <div className="designText">
                        <h2>4. Refinement</h2>
                        <p>Gathering feedback from playtesting sessions and making iterative improvements to the design, user interface, and overall game mechanics.</p>
                    </div>
                    </div>
                </div>
            </section>

            <TechnologyList technologies={technologies} className='shfl-tech'/>
            
            <section className="shfl-tech">
                <div className="scrum">
                    <h1>Methodology</h1>
                    <p>Employed an agile development approach, enabling iterative progress and the integration of rapid feedback from players during testing phases.</p>
                </div>
            </section>
            <section className='shfl-learned'>
                <div className="learned">
                <h1>Lessons Learned</h1>
                <div className="lessons">
                    <div className="column">
                        <p ref={info} className={`${'hidden'}  ${myLearned ? 'show': 'hidden'}`}>Engaging in the <span className="shfl">SHFL</span> project provided valuable insights into designing captivating user experiences that adeptly blend diverse game elements. It underscored the significance of clear communication, collaboration, and user-centered design. Moreover, the project reinforced the importance of iterative development and rigorous playtesting in shaping a successful and gratifying gaming experience.</p>
                    </div>
                    <img src={learned}/>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Shfl;