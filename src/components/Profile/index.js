import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchCandidate } from '../../api';
import './profile.css';

const Profile = () => {
  const [candidate, setCandidate] = React.useState({});
  const { id: candidateId } = useParams();

  React.useEffect(() => {
    fetchCandidate(candidateId).then((data) => {
      setCandidate(data);
    });
  }, [candidateId]);

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
    </div>
  );
};

export default Profile;
