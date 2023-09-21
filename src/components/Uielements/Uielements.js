import React, { useState } from 'react';


export function GenericTitle(props) {
    const titleClass = `wattTitle ${props.titleColor}`;
    const textClass = `wattText ${props.textColor}`;
    return (
        <div className="genericComponent">
            <section className={titleClass}>
                <img src={props.titleImg} alt="Title Image" />
            </section>
            <section className={textClass}>
                <div className="Testcontainer">
                    <div className="column">
                        <div className="Testbox">
                            <p>{props.projectLabel}</p>
                            <h2>{props.projectName}</h2>
                        </div>
                        <div className="Testbox">
                            <p>{props.roleLabel}</p>
                            {props.roles.map((role, index) => (
                                <h2 key={index}>{role}</h2>
                            ))}
                        </div>
                    </div>
                    <div className="Testbox summary">
                        <p>{props.summaryLabel}</p>
                        <h2>{props.summary}</h2>
                        <div className="title-buttons">
                            <a href={props.githubLink}>
                                <div className="button">
                                    <p>{props.githubButtonText}</p>
                                </div>
                            </a>
                            <a href={props.figmaLink}>
                                <div className="button">
                                    <p>{props.figmaButtonText}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}




export function KeyFeatures({ heading, features }) {
    // Split the features into two columns
    const midIndex = Math.ceil(features.length / 2);
    const firstColumn = features.slice(0, midIndex);
    const secondColumn = features.slice(midIndex);

    return (
        <section className='keyChallenges spacer'>
            <h1>{heading}</h1>
            <div className="key">
                <div className="column">
                    {firstColumn.map((feature, index) => (
                        <div className="Testbox" key={index}>
                            <h2>{`${index + 1}. ${feature.title}`}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {secondColumn.map((feature, index) => (
                        <div className="Testbox" key={index}>
                            <h2>{`${index + midIndex + 1}. ${feature.title}`}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}








export const Button = ({ text, link }) => (
    <a href={link}>
      <div className="button">
        <p>{text}</p>
      </div>
    </a>
  );
  

  
export const TitleSection = ({ title, TitleImg, bgColor }) => {
    const titleStyle = {
      "--bg-color": bgColor || "#f0f0f0", // Set the background color dynamically
    };
  
    return (
      <section className="title" style={titleStyle}>
        <img src={TitleImg}/>
        <h1>{title}</h1>
        {/* Add other content for the title section here */}
      </section>
    );
  };  


function TechnologyList({ technologies }) {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTechClick = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <section className="tech-container">
      <h1>Technologies</h1>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <div
            className={`tech ${selectedTech === tech ? 'active' : ''}`}
            key={index}
            onClick={() => handleTechClick(tech)}
          >
            {selectedTech === tech ? (
              <div className="tech-description">
                <h2>{tech.name}</h2>
                <p>{tech.description}</p>
              </div>
            ) : (
              <>
                <img src={tech.logo} alt={tech.name} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologyList;

  

  
export function ComponentWithDropdown({ title, undertitle, description }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="component">
        <div className="title" onClick={toggleDropdown}>
          <h1>{title}</h1>
        <h2>{undertitle}</h2>
        </div>
        {isOpen && (
          <div className="dropdown">
            {description.map((section, index) => (
              <div key={index}>
                <h4>{section.subtitle}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

