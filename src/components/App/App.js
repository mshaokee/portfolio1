import React, { Component } from 'react';
//import for routing
import {
  BrowserRouter as Router,
  // Route,
  // Redirect
} from 'react-router-dom';

//import pages and redirecting
import Home from '../Home/Home';
import Nav from '../Nav/Nav';

class App extends Component {

  componentDidMount() {
    console.log('App has been loaded.');
  }; //end

  render() {
    return (
      <Router>
        <Nav />
        <Home />
      </Router>
    )
  }
};

export default App;
