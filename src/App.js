import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './global.css';
import TimerPage from './pages/timerPage/TimerPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/countdown-timer' component={TimerPage} />
        <Redirect to='/countdown-timer' />
      </Switch>
    </Router>
  );
};

export default App;
