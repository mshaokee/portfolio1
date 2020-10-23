import React, { Component } from 'react';
import './App.css';
//import for routing
import {
  BrowserRouter as Router,
  // Route,
  // Redirect
} from 'react-router-dom';

//MUI
import { Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//import pages and redirecting
import Home from '../Home/Home';
import Nav from '../Nav/Nav';

//styles
const styles = () => {
  return ({
    app: {
    }
  })
};//end styles

class App extends Component {

  componentDidMount() {
    console.log('App has been loaded.');
  }; //end

  render() {
    const classes = this.props;
    return (
      <div className={classes.app}>
        <Router>
          <Nav />
          <Home />
        </Router>
      </div>
    )
  }
};

export default withStyles(styles)(App);
