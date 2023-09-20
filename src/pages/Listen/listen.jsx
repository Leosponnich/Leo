import React, {useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import './listen.css';
import reactLogo from '../../elements/react.png'
import firebaseLogo from '../../elements/Firebase.png'
import vercelLogo from '../../elements/vercel.png'
import spotifyLogo from '../../elements/Spotify.png'

import TechnologyList, {ComponentWithDropdown} from "../../components/Uielements/Uielements";

const Listen = () =>{
    const {ref: myRef2, inView:myElement2} = useInView();

    const technologies = [
        { logo: reactLogo, name: 'React', description: 'A JavaScript library for building user interfaces.' },
        { logo: vercelLogo, name: 'Vercel', description: 'A cloud platform for static sites and serverless functions.' },
        { logo: spotifyLogo, name: 'Spotify', description: 'A music streaming service.' },
        { logo: firebaseLogo, name: 'Firebase', description: 'A mobile and web application development platform.' },
      ];


      const componentsData = [
        {
          title: "Component 1",
          undertitle: "Undertitle 1",
          description: [
            {
              subtitle: "Subsection 1",
              text: "Description for Subsection 1.",
            },
            {
              subtitle: "Subsection 2",
              text: "Description for Subsection 2.",
            },
          ],
        },
        {
          title: "Component 2",
          undertitle: "Undertitle 2",
          description: [
            {
              subtitle: "Subsection A",
              text: "Description for Subsection A.",
            },
            {
              subtitle: "Subsection B",
              text: "Description for Subsection B.",
            },
          ],
        },
        {
          title: "Component 3",
          undertitle: "Undertitle 3",
          description: [
            {
              subtitle: "Section X",
              text: "Description for Section X.",
            },
            {
              subtitle: "Section Y",
              text: "Description for Section Y.",
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
                <div className="row">
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

            <section className='keyChallenges spacer'>
                <h1>Key Features</h1>
                <div className="key">
                <div className="column">
                    <div className="Testbox">
                    <h2>1. Spotify Integration:</h2>
                    <p>Users can seamlessly log in to the web app using their Spotify credentials, ensuring a secure and personalized experience.</p>
                    <br/>
                    <p>The integration with the Spotify API allows users to access their playlists, recently played tracks, and top artists, enhancing the overall music discovery process.</p>
                    </div>
                    <div className="Testbox">
                        <h2>2. Lobby Interaction:</h2>
                        <p>Upon logging in, users are placed in a shared lobby where they can interact with others who have joined.</p>
                        <br/>
                        <p>Users can see real-time updates on the songs that other participants are currently playing on their Spotify accounts.</p>
                        </div>
                    
                </div>
                <div className="column">
                    <div className="Testbox">
                        <h2>3. Music Discovery:</h2>
                        <p>The web app provides a unique opportunity for users to discover new music based on what their peers are listening to.</p>
                        <br/>
                        <p>Users can explore the Spotify tracks and artists being played by others and add them to their own Spotify library for later enjoyment. NOT IMPLEMENTED</p>
                    </div>
                    <div className="Testbox">
                        <h2>4. Real-time Updates:</h2>
                        <p>The project leverages Firebase's real-time database to ensure that all changes and updates to the lobby are reflected instantaneously.</p>
                        <br/>
                        <p>Users can experience a dynamic environment where the playlist evolves as participants change their music choices.</p>
                    </div>
                </div>
                </div>
            </section>
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
                    

            <section className="UX">
                <h1>User Experience</h1>
                <p>User experience was a paramount consideration throughout the development of this project. To ensure a seamless and enjoyable interaction for users, extensive efforts were made to create an intuitive and visually appealing interface. This involved user research to understand the target audience's preferences and habits.</p>
                <p>Usability testing was conducted to refine the design and flow of the application. Feedback from users was invaluable in making adjustments that improved the overall UX. User-friendly navigation, clear calls to action, and a visually engaging design were all priorities in the project's development.</p>
                <p>The result is a web application that not only provides a novel music-sharing experience but does so with a strong focus on user satisfaction and ease of use.</p>
            </section>
        </div>
    )
}

export default Listen;