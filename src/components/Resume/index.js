import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchCandidate, fetchCandidateApplication } from '../../api';
import './resume.css';

const Resume = () => {
  const { id: candidateId } = useParams();
  const [candidate, setCandidate] = React.useState({});
  const [applications, setApplications] = React.useState([]);

  const getCandidates = () => {
    fetchCandidate(candidateId).then((data) => {
      setCandidate(data);
    });
  };

  const getCandidateApplications = () => {
    fetchCandidateApplication(candidateId).then((data) => {
      setApplications(data);
    });
  };

  React.useEffect(() => {
    getCandidateApplications();
    getCandidates();
  }, []);

  return (
    <div className='wrapper'>
      <section className='section section--resume'>
        <h1>{candidate.name}</h1>
        <h2 className='section--resume__experience-title'>Work Experience</h2>
        {/* since resume is a nested object, iterate through the values to display them on the screen */}
        {applications.map((submission) => {
          const { resume } = submission;
          return Object.keys(resume).map((field) => {
            if (field === 'workExperience') {
              return resume[field].map((work, workIndex) => (
                <div key={workIndex} className='work'>
                  <h4>{work.company}:</h4>
                  <p className='work__description'>{work.description}</p>
                </div>
              ));
            }
            return field === 'skills' ? (
              <div>
                <h3 className='section--resume__skills-title'>Skills</h3>
                <div className='skills'>
                  {resume[field].map((skill, skillIndex) => (
                    <p className='skill-name' key={skillIndex}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ) : null;
          });
        })}
      </section>
    </div>
  );
};

export default Resume;
