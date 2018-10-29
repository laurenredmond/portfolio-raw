import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import Typing from 'react-typing-animation';
import videoBg from './img/blk-video-bg.gif';
import videoBgSm from './img/blk-video-bg-sm.gif';
import coffee from './img/coffee.png';
import coffeeSm from './img/coffee-sm.png';
import coffeeCode from './img/coffee-code-bg.png';
import coffeeDesign from './img/coffee-design-bg.png';
import coffeePhotograph from './img/coffee-photograph-bg.png';

class Home extends Component {
  state = {
    bgLoaded: false,
    showImg1: false,
    showImg2: false,
    showImg3: false,
    typing2: false,
    typing3: false,
    showContact: false,
  };

  bgLoaded = () => {
    this.setState({ bgLoaded: true });
  };

  showImg1 = () => {
    this.setState({ showImg1: true });
    this.setState({ typing2: true});
  };

  showImg2 = () => {
    this.setState({ showImg2: true });
    this.setState({ typing3: true});
  };

  showImg3 = () => {
    this.setState({ showImg3: true });
    this.setState({ typing4: true});
  };

  showContact = () => {
    this.setState({ showContact: true});
  };

  render() {
    return (
      <div>
    		<div className="container video-background" id="blk-video-bg">
          <picture>
            <source media="(min-width: 415px)" srcset={videoBg} />
            <img className="video-bg" src={videoBgSm} onLoad={this.bgLoaded.bind(this)} alt="" />
          </picture>
          {this.state.bgLoaded && (
          <main className="overlay-head" role="main">
      			<article className="container">
      			  <div className="column-flex">
        				<div className="animated fadeIn col intro">
                  <h1>
          					<Typing hideCursor speed={100} startDelay={1500} onFinishedTyping={this.showImg1}>
          					  Hi,<Typing.Delay ms={800} /> my name is Lauren.<Typing.Delay ms={500} /><br />I like to <span className="font-change">code</span>,
                    </Typing>
                    {this.state.typing2 && (
                    <Typing hideCursor speed={100} startDelay={1700} onFinishedTyping={this.showImg2}>
                      <span className="font-change">design</span>,
                    </Typing>
                    )}
                    {this.state.typing3 && (
                    <Typing hideCursor speed={100} startDelay={1700} onFinishedTyping={this.showImg3}>
                      and <span className="font-change">photograph</span>.
                    </Typing>
                    )}
                    {this.state.typing4 && (
                    <Typing hideCursor speed={100} startDelay={1800} onFinishedTyping={this.showContact}>
                      <span className="hidden">.</span>
                    </Typing>
                    )}
                  </h1>

                  {this.state.showContact && (
        				  <div className="animated fadeInLeft contact-button container">
        						<Link to="/contact" className="animated fadeIn btn">
        						  Contact Me
        						</Link>
        				  </div>
                )}
          			</div>

      					<div className="col coffee">
                  <picture>
                    <source media="(min-width: 600px)" srcset={coffee} />
                    <img className="animated fadeIn video-bg" id="coffee-img" src={coffeeSm} alt="coffee" />
                  </picture>
                  {this.state.showImg1 && (
                    <img className="animate-flicker initial" id="coffee-code-bg" src={coffeeCode} alt="" />
                  )}
                  {this.state.showImg2 && (
                    <img className="animate-flicker initial" id="coffee-design-bg" src={coffeeDesign}alt="" />
                  )}
                  {this.state.showImg3 && (
                    <img className="animate-flicker initial" id="coffee-photograph-bg" src={coffeePhotograph} alt="" />
                  )}
      					</div>
      			  </div>
      			</article>
    		  </main>
          )}
    		</div>
      </div>
    );
  }
}

export default Home;
