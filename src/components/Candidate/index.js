import './candidate.css';

import { Link } from 'react-router-dom';

const Candidate = ({ id, name }) => (
  <section className='section section--candidate'>
    <img src='/images/account_circle.svg' alt='user avatar' />
    <p className='section--candidate__name'>{name}</p>
    <div className='view-profile'>
      <Link className='view-profile__link' to={`/profile/${id}`}>
        View Profile
      </Link>
    </div>
  </section>
);

export default Candidate;
