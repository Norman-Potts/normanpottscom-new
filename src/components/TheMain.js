import React, { Component } from 'react';

import FrontPage from './Pages/FrontPage.js';
import SocialMediasPage from './Pages/SocialMediasPage.js';
import Blog from './Pages/Blog.js';
import Shop from './Pages/Shop.js';
import WhatImUpToo from './Pages/WhatImUpToo.js';




import '../css/Main.css';



import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch,
} from 'react-router-dom';

class TheMain extends Component {
  render() {  
    
    
    return (
      <main className = "myContainerTOP myGreen">
          <Switch>
          <Route exact path='/' render={(props) => <FrontPage {...props}   />}/>                      
          <Route exact path='/SocialMedias' render={(props) => <SocialMediasPage {...props}   />}/>                      
          <Route exact path='/Blog' render={(props) => <Blog {...props}   />}/>                      
          <Route exact path='/Shop' render={(props) => <Shop {...props}   />}/>      
          <Route exact path='/WhatImUpToo' render={(props) => <WhatImUpToo {...props}   />}/>                                      
          <Route render={() => (
             <Redirect to='/' />
          )} />
        </Switch>                 
      </main>
    );
  }
}

export default TheMain;

