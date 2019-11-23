import React, { Component } from 'react';
import TheFooter from './components/TheFooter.js';
import TheHeader from './components/TheHeader.js';
import TheMain from './components/TheMain.js';
import caller from './caller.js';
import {
  BrowserRouter as Router, Route, Link, Redirect, Switch,
} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    var main = <TheMain />;
    
    return (
      <div >        
        <Router>
        <TheHeader />
        {main}
        </Router>            
        <TheFooter />
      </div>
    );
  }
}



export default App;
