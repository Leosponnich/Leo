import React, { useState } from 'react';


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
          {title}
        </div>
        <div className="undertitle">{undertitle}</div>
        {isOpen && (
          <div className="dropdown">
            <h3>{title}</h3>
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

