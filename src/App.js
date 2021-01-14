import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
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
      <Router>
        <Nav />

        <Switch>
          <Route exact path='/'>
            <CandidatesList candidates={candidates} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
