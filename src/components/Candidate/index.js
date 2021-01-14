import './candidate.css';

const Candidate = ({ id, name }) => (
  <section className='section section--candidate'>
    <img src='/images/account_circle.svg' alt='user avatar' />
    <p className='section--candidate__name'>{name}</p>
    <div className='view-profile'>
      <a className='view-profile__link' href={`/profile/${id}`}>
        View Profile
      </a>
    </div>
  </section>
);

export default Candidate;
