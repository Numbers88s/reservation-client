// modules
import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// local
import ReservationList from './components/ReservationList';
import Reservation from './components/Reservation';
import Grid from './components/Grid';
import './App.css';


const App: React.FC = () => (
  <div className="App">
    <Router>
      <Grid>
        <Route exact path="/" component={ ReservationList } />
        <Route exact path="/:id" component={ Reservation } />
      </Grid>
  </Router>
  </div>
);

export default App;
