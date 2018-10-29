import React, { Component } from "react";
import recordPlayerLg from './img/record-player-lg.gif';
import recordPlayerMd from './img/record-player-md.gif';
import recordPlayerSm from './img/record-player-sm.gif';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component {
  state = {
    bgLoaded: false,
  };

  bgLoaded = () => {
    this.setState({ bgLoaded: true });
  };

  render() {
    return (
      <div>
    		<div className="container video-background">
          <picture>
            <source media="(min-width: 800px)" srcset={recordPlayerLg} />
            <source media="(min-width: 400px)" srcset={recordPlayerMd} />
            <img className="video-bg" id="record-player" src={recordPlayerSm} onLoad={this.bgLoaded.bind(this)} alt="" />
          </picture>
          {this.state.bgLoaded && (
            <div className="overlay-head page-head">
              <h1 className="animated fadeInLeft">Skills</h1>
    			  </div>
          )}
    		</div>
        {this.state.bgLoaded && (
    		<main role="main">
    		  <article className="container column-flex">

      				<div className="skill col">
                <ScrollAnimation duration={1.5} animateIn="fadeInLeft">
        				  <h2>Code</h2>
        				  <p>
        					HTML <span className="skill-font">!--</span> JavaScript
        					<span className="skill-font">!--</span> React
        				  </p>
                </ScrollAnimation>
      				</div>

      				<div className="skill col">
                <ScrollAnimation duration={3} animateIn="fadeIn">
        				  <h2>Design</h2>
        				  <p>
        					CSS <span className="skill-font">!--</span> Adobe Illustrator
        				  </p>
                </ScrollAnimation>
      				</div>

      				<div className="skill col">
                <ScrollAnimation duration={1.5} animateIn="fadeInRight">
        				  <h2>Photography</h2>
        				  <p>
        					Adobe Photoshop <span className="skill-font">!--</span> Adobe
        					Lightroom
        				  </p>
                </ScrollAnimation>
      				</div>

    		  </article>
    		</main>
      )}
      </div>
    );
  }
}

export default Skills;
