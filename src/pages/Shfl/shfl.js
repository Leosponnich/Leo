import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import './shfl.css';
import TitleImg from '../../elements/ShflHeader.jpg';
import mockup1 from '../../elements/wattCastMain.png';
import mockup2 from '../../elements/wattcast.png';
import design1 from '../../elements/userTesting.jpg';
import design2 from '../../elements/figmaWattcast.png';
import design3 from '../../elements/workshopWC.jpg';
import video from '../../elements/shflVideo.mp4';
import scrumban from '../../elements/scrumban.png';
import learned from '../../elements/learned.jpg';


const Shfl = () =>{
    const {ref: myRef, inView:myElement} = useInView();
    const {ref: myRef2, inView:myElement2} = useInView();
    const {ref: info, inView:myLearned} = useInView();

    return(
        <div>
            <section className="shflTitle">
                <img src={TitleImg}/>
            </section>
            <section className="shflText">
            <div class="Testcontainer">
                <div className="column">
                    <div className="Testbox">
                    <p>Client</p>
                    <h1>Metrologisk institutt</h1>
                    </div>
                    <div className="Testbox">
                        <p>My role</p>
                        <h1>UX Designer</h1>
                        <h1>UI Designer</h1>
                    </div>
                </div>
            <div className="Testbox summary">                
                <p>SUMMARY</p>
                <h1>I held the primary responsibility for the design aspect of the project.</h1>
                <div className="button">
                    <p>play SHFL</p>
                </div>
            </div>
            
            </div>
            </section>
            <section className="goal">
                <div>
                    <p ref={myRef2} 
          className={`${'hidden'}  ${myElement2 ? 'show': 'hidden'}`} >
                    SHFL
                </p>
                </div>

            </section>
            <section className="mockup1">
                <div>
                <video src={video} muted autoPlay loop/>
                </div>
            </section>
            <section className='keyChallenges'>
                <h1>Key Challenges</h1>
                <div className="key">
                <div className="column">
                    <div className="Testbox">
                    <h1>1. User Understanding and Empathy</h1>
                    <p>Understanding user needs and empathizing with their goals and pain points is essential for designing products that truly cater to their requirements.</p>
                    </div>
                    <div className="Testbox">
                        <h1>2. Consistency and Branding</h1>
                        <p>Maintaining consistency in design elements and aligning them with the brand's identity is crucial for a coherent and recognizable user experience.</p>                   
                        </div>
                    <div className="Testbox">
                        <h1>3. Mobile Responsiveness and Multi-platform Compatibility</h1>
                        <p>Designing for various devices, screen sizes, and operating systems demands adaptability and responsiveness. Ensuring seamless user experiences across desktop, tablets, smartphones, and other devices is a significant challenge.</p>
                    </div>
                </div>
                <div className="column">
                <div className="Testbox">
                    <h1>4. Accessibility and Inclusivity</h1>
                    <p>Creating designs that are accessible to users of all abilities is essential. Designers must consider factors such as color contrast, screen readers, keyboard navigation, and other assistive technologies to ensure inclusivity.</p>
                    </div>
                    <div className="Testbox">
                        <h1>5. Balancing Aesthetics with Functionality</h1>
                        <p>Designing visually appealing interfaces while ensuring ease of use and efficient task completion is a delicate balancing act. Striking the right balance between aesthetics and functionality is a constant challenge for designers.</p>
                    </div>
                    <div className="Testbox">
                        <h1>6. Usability Testing and Iteration</h1>
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
            <section className="technologies">
                <div className="techBox">
                    <h1>Android studio</h1>
                    <p>We used Andorid Studio and kotlin programming language to develop the core of "WattCast" and implement the predictive algorithms to calculate future electricity prices based on weather data.
</p>
                </div>
                <div className="techBox">
                    <h1>Git</h1>
                    <p>Git served as our primary version control system, allowing seamless collaboration, tracking changes, and ensuring a stable and structured development process.</p>
                </div>
                <div className="techBox">
                    <h1>Figma</h1>
                    <p>For user interface design, we utilized Figma, a powerful tool for collaboration and prototyping. This enabled a rapid iterative design process, resulting in an intuitive and user-friendly interface.
</p>                
                </div>
        
            </section>
            <section>
                <div className="scrum">
                    <h1>Technology and Methodology</h1>
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

export default Shfl;