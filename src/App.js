import React from 'react';

import './App.css';
import Nav from './components/Nav';
import CandidatesList from './containers/Candidates';

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

      <CandidatesList candidates={candidates} />
    </div>
  );
}

export default App;
