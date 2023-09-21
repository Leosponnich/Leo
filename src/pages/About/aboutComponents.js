import React from "react";

// ExperienceSection.js
export const ExperienceSection = ({ data }) => (
    <section className="experience">
      <h1>Experience</h1>
      <div className="column width">
        {data.map((item, index) => (
          <div className="job" key={index}>
            <h1>{item.jobTitle}</h1>
            <div className="rows">
              <h2>{item.company}</h2>
              <h2>{item.date}</h2>
            </div>
            {item.description.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );


// EducationSection.js
export const EducationSection = ({ data }) => (
  <section className="experience">
    <h1>Education</h1>
    <div className="column width">
      {data.map((item, index) => (
        <div className="job" key={index}>
          <h1>{item.degree}</h1>
            <h2>{item.date}</h2>
        </div>
      ))}
    </div>
  </section>
);

// CertificatesSection.js
export const CertificatesSection = ({ data }) => (
  <section className="experience">
    <h1>Certificates</h1>
    <div className="column width">
      {data.map((item, index) => (
        <div className="job" key={index}>
          <h1>{item.certificate}</h1>
            <h2>{item.date}</h2>
            <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);


// SkillsSection.js
export const SkillsSection = ({ data }) => (
  <section className="experience">
    <h1>Courses</h1>
    <div className="column width">
        {data.map((item, index) => (
          <div className="job" key={index}>
          <h1>{item.certificate}</h1>
            <h2>{item.date}</h2>
            <p>{item.description}</p>
        </div>
        ))}
    </div>
  </section>
);



