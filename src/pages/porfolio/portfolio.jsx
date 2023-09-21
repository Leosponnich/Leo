import React from "react";
import TechnologyList, { GenericTitle, KeyFeatures } from "../../components/Uielements/Uielements";
import { useInView } from "react-intersection-observer";
import figmaLogo from '../../elements/Figma.png';
import vercelLogo from '../../elements/vercel.png';
import reactLogo from '../../elements/react.png';
import gitLogo from '../../elements/GitHub.png'
import portfolioTitle from '../../elements/portfolio-title.jpg'
import './portfolio.css';

const Portfolio = () => {
    const {ref: myRef2, inView:myElement2} = useInView();

    
    
    


    const technologies = [
        {logo:figmaLogo , name: 'Figma', description: 'A powerful tool for collaboration and prototyping'},
        {logo: reactLogo, name: 'React', description: 'A JavaScript library for building user interfaces.' },
        {logo: gitLogo, name: 'Github', description: 'version control, seamless collaboration and ensuring a stable development process'},
        {logo: vercelLogo, name: 'Vercel', description: 'A cloud platform for static sites and serverless functions.' },
    ]


return(
    <div>
        <GenericTitle
        titleImg={portfolioTitle}
        titleColor='red'
        textColor='red'
        projectLabel="Project"
        projectName="Personal Portfolio"
        roleLabel="My role"
        roles={['UX/UI Designer', 'Developer']}
        summaryLabel="SUMMARY"
        summary="Design and Development Process: Creating My Portfolio"
        githubLink="https://github.com/Leosponnich/leo"
        githubButtonText="github"
        figmaLink=""
        figmaButtonText="Figma"
        />
        <div className="progress">
            <h1>IN PROGRESS....</h1>
        </div>
        <div className="text-img">
            <h1>Project Initiation and Planning:</h1>
            <p>Objective Definition: The journey of creating my portfolio began with a clear understanding of my goals. I aimed to showcase my web development and UX/UI skills, connect with potential collaborators, and present my work to a broader audience.</p>
            <p>Content Planning: I carefully outlined the content I wanted to include on my portfolio. This included project showcases, an "About Me" section, contact information, and links to my social profiles.</p>

        </div>

        


        

        <TechnologyList technologies={technologies}/>
        <div>
        2. Design Phase:

Wireframing: To plan the layout and structure, I started with wireframes. These initial sketches helped me visualize how different elements would be arranged on the website.
Figma Design: Leveraging Figma, I translated my wireframes into a visually appealing design. I focused on creating a cohesive and aesthetically pleasing user interface while ensuring it aligned with my personal brand.
Visual Elements: Typography, color schemes, imagery, and overall aesthetics were meticulously chosen to provide a consistent and visually pleasing user experience.
        </div>
        <div>
        3. Development Phase:

Technology Stack Selection: I selected the development tools and technologies that would best suit my portfolio. React was chosen for its flexibility and interactivity. GitHub was used for version control, and Vercel for hosting.
Component Creation: I adopted a modular approach by creating reusable components. This made it easier to maintain and update the website as I expanded my portfolio.
Responsive Design: Ensuring a responsive design was a priority. I implemented media queries and fluid layouts to make the portfolio accessible and visually appealing on various devices and screen sizes.
Interactivity: Interactive elements, such as smooth transitions, hover effects, and intuitive navigation, were incorporated to engage visitors and provide a dynamic user experience.
Content Integration: I populated the portfolio with content, including concise project descriptions, images, and links to the projects themselves. Maintaining up-to-date information was essential.
Testing: Rigorous testing was performed across different browsers and devices to identify and resolve compatibility issues. This ensured a consistent experience for all visitors.
        </div>
        <div>
        4. Deployment and Hosting:

Vercel Deployment: The portfolio was deployed on Vercel. Domain settings were configured, and automatic deployments were set up from my GitHub repository for seamless updates.
        </div>
        <div>
        5. Version Control:

GitHub Repository: I maintained a GitHub repository for my portfolio project. This allowed me to track changes, collaborate with others if needed, and ensure version control.
6. Optimization:

Performance Optimization: To optimize performance, I compressed images, minimized code, and implemented lazy loading to reduce load times. This provided a fast and responsive experience.
SEO Optimization: On-page SEO techniques, such as meta tags, alt attributes for images, and the use of semantic HTML, were employed to improve the portfolio's visibility on search engines.
7. Feedback and Iteration:

User Testing: I shared my portfolio with friends, colleagues, and online communities to gather feedback. Their insights were invaluable for improving usability and design.
Iterative Improvement: Based on user feedback, I made iterative improvements to the portfolio. This involved refining the design, addressing bugs, and adding new features to enhance the user experience.
8. Launch and Promotion:

Official Launch: Once I was satisfied with the portfolio, I officially launched it. I shared it on various platforms, including social media, professional networks, and with potential employers or collaborators.
9. Maintenance:

Regular Updates: I committed to keeping the portfolio up to date by adding new projects and accomplishments. Regular checks were performed to ensure that all links were functional and information remained current.
10. Future Enhancements:

Ongoing Improvement: Looking ahead, I considered future enhancements. Possibilities included adding a blog, expanding the project showcase, or integrating new technologies to showcase evolving skills.

        </div>

    </div>
)

}


export default Portfolio