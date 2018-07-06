import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import PlanPage from './pages/PlanPage/PlanPage';
import ErrPage from './pages/ErrPage/ErrPage';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/plan' component={PlanPage} />
            <Route component={ErrPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;