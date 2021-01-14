import React from 'react';

import './App.css';
import Nav from './components/Nav';

function App() {
  const [candidates, setCandidates] = React.useState([]); // save candidates data here

  React.useEffect(() => {
    let isCurrent = true;

    // Fetch data from the API
    fetch(`http://localhost:4000/candidates`)
      .then((response) => response.json())
      .then((data) => {
        if (isCurrent) {
          setCandidates(data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <div>
      <Nav />

      {/* Iterate through the candidates data and display them on the screen */}
      {candidates.map((candidate) => {
        return (
          <div key={candidate.id}>
            <p>
              {candidate.name.first} {candidate.name.last}
            </p>
            <p>{candidate.yearsOfExperience}</p>
            <p>{candidate.jobTitle}</p>
            <p>{candidate.email}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
