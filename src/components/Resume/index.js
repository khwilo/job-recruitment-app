import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchCandidate, fetchCandidateApplication } from '../../api';
import './resume.css';

const Resume = () => {
  const { id: candidateId } = useParams();
  const [candidate, setCandidate] = React.useState({});
  const [applications, setApplications] = React.useState([]);
  const [comment, setComment] = React.useState('');

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComment('');

    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recruiterId: '1',
        candidateId: candidate.id,
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <div className='wrapper'>
      <section className='section section--resume'>
        <h1>{candidate.name}</h1>
        <h2 className='section--resume__experience-title'>Work Experience</h2>
        {/* since resume is a nested object, iterate through the values to display them on the screen */}
        {applications.map((submission) => {
          const { resume } = submission;
          return Object.keys(resume).map((field, fieldIndex) => {
            if (field === 'workExperience') {
              return resume[field].map((work, workIndex) => (
                <div key={workIndex} className='work'>
                  <h4>{work.company}:</h4>
                  <p className='work__description'>{work.description}</p>
                </div>
              ));
            }
            return field === 'skills' ? (
              <div key={fieldIndex}>
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

      <div className='comments-section'>
        <form className='comments-section__form'>
          <div className='form__group'>
            <textarea
              rows='5'
              cols='20'
              className='form__group'
              onChange={(event) => {
                setComment(event.target.value);
              }}
            ></textarea>
          </div>
          <button
            type='submit'
            className='submit-btn'
            onClick={(event) => handleFormSubmit(event)}
          >
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resume;
