import React, { Component } from 'react';

import '../css/Footer.css';


class TheFooter extends Component {
	render() {
    return (
      <footer className = "myBlue">
        <div className = 'fdiv'>
		      <a href = "https://github.com/digitaldulphin" ><a href="#" className="fa fa-github"></a></a>
		    </div >	
		    <div className = 'fdiv'>			 			    
			    Somewhere in Canada	&#127809; 
		    </div>
		    <div className = 'fdiv'>
			    <a href ='#'> Contact Me! </a> 
			    <br /><br />			    
		    </div>
      </footer>
    );
  }
}

export default TheFooter;
