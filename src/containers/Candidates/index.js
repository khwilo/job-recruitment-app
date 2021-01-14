import './candidates.css';
import Candidate from '../../components/Candidate';

const Candidates = ({ candidates }) => (
  <div className='wrapper'>
    <div className='candidates-container flow'>
      {/* Iterate through the candidates data and display them on the screen */}
      {candidates.map((candidate) => {
        const { id, name } = candidate;
        const fullName = `${name.first} ${name.last}`;

        return (
          <div key={id}>
            <Candidate id={id} name={fullName} />
          </div>
        );
      })}
    </div>
  </div>
);

export default Candidates;
