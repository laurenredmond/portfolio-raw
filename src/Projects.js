import React, { Component } from "react";
import guitar from './img/guitar.jpg';
import guitarSm from './img/guitar-sm.jpg';
import pandplogo from './img/pandp-logo-glitch.gif';
import portfoliologo from './img/portfolio-logo-glitch.gif';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
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
            <source media="(min-width: 800px)" srcset={guitar} />
            <img className="img-bg" id="guitar" src={guitarSm} onLoad={this.bgLoaded} alt="" />
          </picture>
          {this.state.bgLoaded && (
            <div className="overlay-head page-head">
              <h1 className="animated fadeInLeft">Projects</h1>
    				</div>
          )}
  		  </div>
        {this.state.bgLoaded && (
        <main role="main">
  		    <article className="container column-flex">
      			<div className="project col">
      			  <ScrollAnimation duration={2} animateIn="fadeIn">
                <h2>Pride &amp; Primal</h2>
                <a className="project-link" href="https://prideandprimal.com" target="_blank" rel="noopener noreferrer">
                  <h3>prideandprimal.com</h3>
                </a>
              </ScrollAnimation>
              <ScrollAnimation duration={1.8} animateIn="fadeIn">
                <img className="project-img" src={pandplogo} alt=""/>
              </ScrollAnimation>
      			</div>
      			<div className="col project-desc">
      				<ScrollAnimation animateIn="fadeIn">
      				  <p>
      					Pride &amp; Primal is a lifestyle blog. This project was
      					created with a theme in Wordpress. The pictures are
                edited with Adobe Photoshop and Adobe Lightroom. The
      					logo was designed using Adobe Illustrator.
      				  </p>
      				</ScrollAnimation>
      			</div>
          </article>
          <article className="container column-flex">
            <div className="project col">
              <ScrollAnimation duration={2} animateIn="fadeIn">
                <h2>Portfolio</h2>
                <a className="project-link" href="https://laurenredmond.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                  <h3>lredmond.com</h3>
                </a>
              </ScrollAnimation>
              <ScrollAnimation duration={1.8} animateIn="fadeIn">
                <img className="project-img" src={portfoliologo} alt="" />
              </ScrollAnimation>
            </div>
            <div className="col project-desc">
              <ScrollAnimation animateIn="fadeIn">
                <p>
                  My Portfolio site was created and designed using React and Node.js.
                  The logo was developed with Adobe Illustrator and all of the
                  original photos were edited with Adobe Photoshop and Adobe Lightroom.
                  The site is hosted on GitHub Pages.
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

export default Projects;
