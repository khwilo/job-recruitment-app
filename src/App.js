import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.css';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import CandidatesList from './containers/Candidates';
import * as candidateActions from './redux/actions/candidateActions';

function App({ actions, candidates }) {
  React.useEffect(() => {
    if (candidates.length === 0) {
      actions.loadCandidates().catch((err) => {
        alert('[FAILED TO LOAD CANDIDATES]: ', err);
      });
    }
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

function mapStateToProps(state) {
  return {
    candidates: state.candidates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCandidates: bindActionCreators(
        candidateActions.loadCandidates,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
