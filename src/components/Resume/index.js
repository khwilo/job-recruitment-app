import React from 'react';

import { useParams } from 'react-router-dom';
import { fetchCandidate, fetchCandidateApplication } from '../../api';

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
        {/* since resume is a nested object, iterate through the values to display them on the screen */}
        {applications.map((submission) => {
          const { resume } = submission;
          return Object.keys(resume).map((field) => {
            if (field === 'workExperience') {
              return resume[field].map((work) => (
                <div>
                  {work.company}
                  {work.description}
                </div>
              ));
            }
            return field === 'skills'
              ? resume[field].map((skill) => <p>{skill}</p>)
              : null;
          });
        })}
      </section>
    </div>
  );
};

export default Resume;
