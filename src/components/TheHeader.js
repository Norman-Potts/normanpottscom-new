import React, { Component } from 'react';
import NormanJPG from '../images/Norman.jpg';
import '../css/Header.css';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
 
} from 'react-router-dom';


class TheHeader extends Component {
    render() {
    return (
      <header className = "myBlue">             
          <h4>          
            <img src = {NormanJPG} className = "small_myImg"  alt='Me' ></img>		   
            normanpotts.com
          </h4>                             
          <nav> 
            <NavLink className ='homelink'   exact={true} to ='/' > Front Page </NavLink>
            <NavLink  to = '/SocialMedias' > Social Medias </NavLink>
            <NavLink  to = '/Blog' > Blog </NavLink>            
            <NavLink  to = '/Shop'   > Shop </NavLink>    
            <NavLink  to = '/WhatImUpToo'   > What Im Up Too </NavLink>                
          </nav>    
      </header>
    );
    }
}

export default TheHeader;

