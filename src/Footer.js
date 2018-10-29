import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
  		  <footer className="animated fadeIn home-footer container">
          <div className="social">
    				<ul>
    				  <li className="social-icon">
    						<a href="https://instagram.com/laurenredmondo" target="_blank" rel="noopener noreferrer">
    						  <i className="fab fa-instagram" />
    						</a>
    				  </li>
    				  <li className="social-icon">
    						<a href="https://open.spotify.com/user/laurenredmond?si=e5HMvXn3TtaIua0nwY4WCQ" target="_blank" rel="noopener noreferrer">
    						  <i className="fab fa-spotify" />
    						</a>
    				  </li>
    				</ul>
  			  </div>
  			  <p><small>Copyright Lauren Redmond 2018</small></p>
  			</footer>
      </div>
    );
  }
}

export default Footer;
