import React, { Component } from 'react';
import '../../css/Pages/FrontPage.css';
import NormanJPG from '../../images/Norman.jpg';



class FrontPage extends Component {
  render() {    
    return (
        <div id = 'FrontPage'>    
            <div id = "MyName">
                <h1> Norman Potts </h1>
                <img src = {NormanJPG} id = "MyImage" alt='Me' ></img>				
            </div>	
            <h2> This is my website.  <span role="img"> &#128578; </span> </h2>						
            <p>
                <span role="img"> &#9889; </span> <span role="img"> &#9889; </span> <span role="img"> &#9889; </span> 
            </p>
            <div id='MissionStatementDiv'>
                <h3> Misson Statement </h3>
                <p>
                    Keep it real.<br />												
                    Stay chill. <br />
                </p>
            </div>
        </div>
    );
  }
}



export default FrontPage;