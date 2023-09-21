import React, {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import './listen.css';
import reactLogo from '../../elements/react.png'
import firebaseLogo from '../../elements/Firebase.png'
import vercelLogo from '../../elements/vercel.png'
import spotifyLogo from '../../elements/Spotify.png'
import login from '../../elements/login.png'
import lobby from '../../elements/lobby.png'
import floating from '../../elements/floating.png'

import TechnologyList, {ComponentWithDropdown, KeyFeatures} from "../../components/Uielements/Uielements";

const Listen = () =>{
    const {ref: myRef2, inView:myElement2} = useInView();

    const technologies = [
        { logo: reactLogo, name: 'React', description: 'A JavaScript library for building user interfaces.' },
        { logo: vercelLogo, name: 'Vercel', description: 'A cloud platform for static sites and serverless functions.' },
        { logo: spotifyLogo, name: 'Spotify', description: 'A music streaming service.' },
        { logo: firebaseLogo, name: 'Firebase', description: 'A mobile and web application development platform.' },
      ];

      const features = [
        {
            title: "Spotify Integration",
            description: "Users can seamlessly log in to the web app using their Spotify credentials, ensuring a secure and personalized experience. The integration with the Spotify API allows users to access their playlists, recently played tracks, and top artists, enhancing the overall music discovery process."
        },
        {
            title: "Lobby Interaction",
            description: "Upon logging in, users are placed in a shared lobby where they can interact with others who have joined. Users can see real-time updates on the songs that other participants are currently playing on their Spotify accounts."
        },
        {
            title: "Music Discovery",
            description: "The web app provides a unique opportunity for users to discover new music based on what their peers are listening to. Users can explore the Spotify tracks and artists being played by others and add them to their own Spotify library for later enjoyment."
        },
        {
            title: "Real-time Updates",
            description: "The project leverages Firebase's real-time database to ensure that all changes and updates to the lobby are reflected instantaneously. Users can experience a dynamic environment where the playlist evolves as participants change their music choices."
        }
    ];


      const componentsData = [
        {
          title: "Challenges Overcome:",
          undertitle: "In the development of this project, I encountered several significant challenges, each of which required creative solutions and meticulous problem-solving. Here are some key challenges and how they were addressed:",
          description: [
            {
              subtitle: "Challenge 1: Spotify API Integration",
              text: "Integrating the Spotify API securely was a top priority. To address this, I researched best practices for OAuth 2.0 authentication and implemented a robust authentication flow. This ensured that users could safely link their Spotify accounts to our web app.",
            },
            {
              subtitle: "Challenge 2: Real-Time Data Synchronization",
              text: "Achieving real-time updates in the lobby was crucial. To tackle this challenge, I implemented Firebase's real-time database and employed WebSocket technology. This allowed us to deliver instantaneous updates to the playlist, regardless of the number of users.",
            },
          ],
        },
        {
          title: "User Experience (UX):",
          undertitle: "Creating an exceptional user experience was a core focus throughout the project. Here's how we approached this:",
          description: [
            {
              subtitle: "User-Centered Design:",
              text: "I conducted user research to gain insights into our target audience's preferences and behavior. This guided my design decisions and feature prioritization.",
            },
            {
              subtitle: "Usability Testing:",
              text: "To refine the UX, we conducted usability testing sessions with real users. Their feedback was invaluable in identifying pain points and making necessary adjustments to the interface and user flow.",
            },
            {
              subtitle: "Visual Design:",
              text: "We placed a strong emphasis on visual design, ensuring a clean and visually appealing layout. We utilized color theory and typography best practices to enhance readability and aesthetics.",
            },
            {
              subtitle: "Accessibility:",
              text: "Accessibility considerations were integrated into the design and development process. This included ensuring that the application is usable by individuals with disabilities, including keyboard navigation and screen reader compatibility.",
            },
          ],
        },
        {
          title: "Code Quality:",
          undertitle: "Maintaining high-quality code was essential for the project's success. Here's how we ensured top-notch code quality:",
          description: [
            {
              subtitle: "Modularization:",
              text: "We structured the codebase into well-defined modules, promoting code reusability and ease of maintenance. This also allowed for clear separation of concerns",
            },
            {
              subtitle: "Coding Standards:",
              text: "Adherence to coding standards was a non-negotiable. We followed industry-standard conventions for naming, formatting, and documentation, making the codebase consistent and readable.",
            },
            {
              subtitle: "Testing:",
              text: "Thorough testing, including unit testing and integration testing, was performed to catch and rectify issues before deployment. This contributed to the overall reliability of the application.",
            },
          ],
        },
      ];
      
    return (
        <div>
            <div className="background">
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
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="listen-text">
                    <p>LISTEN</p>
                </div>
            </div>
            <section className="wattText listen-bg-color">
            <div className="Testcontainer ">
                <div className="column">
                    <div className="Testbox">
                    <p>Project</p>
                    <h2>Listen</h2>
                    </div>
                    <div className="Testbox">
                        <p>My role</p>
                        <h2>Developer</h2>
                    </div>
                </div>
            <div className="Testbox summary">                
                <p>SUMMARY</p>
                <h2>I created the Listen web-app using React, Spotify api and Firebase</h2>
                <div className="title-buttons">
                    <a href="https://github.com/Leosponnich/wattCast"> <div className="button">
                        <p>github</p>
                    </div></a>
                    <a href="https://listen-six.vercel.app"> <div className="button">
                        <p>Try Listen!</p>
                    </div></a>
                </div>
            </div>
            
            </div>
            </section>
            <section className="goal">
                <div>
                    <p ref={myRef2} 
          className={`${'hidden'}  ${myElement2 ? 'show': 'hidden'}`} >I am thrilled to present a web application project that I have developed using cutting-edge technologies. This project combines the power of React, Firebase, and the Spotify API to create a dynamic and interactive music sharing platform. In this project, users can log in with their Spotify accounts and join a virtual lobby where they can discover and enjoy the music that others are currently playing. This unique web app offers a real-time music sharing experience that connects music enthusiasts in a fun and engaging way.</p>
                </div>
            </section>
            <KeyFeatures heading="Key Features" features={features} />
            <img src={login} className='medium-img'/>
            <TechnologyList technologies={technologies}/>
            <div className="row">
            {componentsData.map((data, index) => (
                <ComponentWithDropdown
                key={index}
                title={data.title}
                undertitle={data.undertitle}
                description={data.description}
                />
            ))}
            </div>
            <img src={lobby} alt='Lobby' className='fullscreen-img'/>
            <div className="conclusion">
              <div>
                <h1>Conclusion:</h1>
                <p>In closing, this project has been a valuable learning experience. I've acquired skills in API integration, real-time web development, and user-centric design. It has reinforced the importance of code quality and collaboration in creating successful applications.</p>
                <p>This project serves as a stepping stone in my development journey, motivating me to seek innovative solutions and prioritize user satisfaction in future endeavors. Thank you for taking the time to explore this project in my portfolio. I look forward to new opportunities in web development and continued growth in this field.</p>
                <p>Check out Listen!</p> 
              </div>
              <div>
                <img src={floating}/>
              </div>
            </div>
        </div>
    )
}

export default Listen;