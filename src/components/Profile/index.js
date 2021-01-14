import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchCandidate, fetchCandidateApplication } from '../../api';
import './profile.css';

const Profile = () => {
  const [candidate, setCandidate] = React.useState({});
  const [applications, setApplications] = React.useState([]);
  const { id: candidateId } = useParams();

  React.useEffect(() => {
    fetchCandidate(candidateId).then((data) => {
      setCandidate(data);
    });

    fetchCandidateApplication(candidateId).then((data) => {
      setApplications(data);
    });
  }, []);

  return (
    <div className='profile wrapper'>
      <section className='section section--profile'>
        <img src='/images/account_circle.svg' alt='user avatar' />
        <p>
          <span className='text-bold'>Name:</span> {candidate.name}
        </p>
        <p>
          <span className='text-bold'>Job Title:</span> {candidate.jobTitle}
        </p>
        <p>
          <span className='text-bold'>Years of experience:</span>{' '}
          {candidate.yearsOfExperience}
        </p>
      </section>
      <div className='profile__footer'>
        {applications.length === 0 ? (
          <div className='d-flex warning'>
            <img src='/images/warning.svg' alt='user avatar' />
            <p className='text-bold ml-text'>
              {candidate.name} has no application yet!
            </p>
          </div>
        ) : (
          <div className='d-flex'>
            <img src='/images/check.svg' alt='check icon' />
            <p className='ml-text text-bold'>
              {candidate.name} has job applications available
            </p>
          </div>
        )}
        {applications.map((application, index) => (
          <div key={index}>
            {Object.keys(application.resume).length === 0 &&
            application.resume.constructor === Object ? (
              <div className='d-flex'>
                <img src='/images/cancel.svg' alt='check icon' />
                <p className='ml-text text-bold'>No resume attached</p>
              </div>
            ) : (
              <div className='d-flex'>
                <img src='/images/attachment.svg' alt='check icon' />
                <p className='ml-text'>
                  <Link className='viewCV-text' to={`/resume/${candidate.id}`}>
                    View CV
                  </Link>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
