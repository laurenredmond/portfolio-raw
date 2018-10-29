import React, { Component } from "react";
import contactImg from './img/contact-img.jpg';
import contactImgSm from './img/contact-img-sm.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
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
            <source media="(min-width: 800px)" srcset={contactImg} />
            <img className="img-bg" id="contact-img" src={contactImgSm} onLoad={this.bgLoaded} alt="" />
          </picture>
          {this.state.bgLoaded && (
            <div className="contact-head overlay-head page-head">
              <h1 className="animated fadeInLeft">Contact</h1>
    			  </div>
          )}
    		</div>
        {this.state.bgLoaded && (
        <main role="main">
    		  <article className="container column-flex">
      				<div className="col">
                <ScrollAnimation duration={1} animateIn="fadeInLeft">
                  <form action="https://formcarry.com/s/TbVBtLv3WAB" method="POST">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" placeholder="Your name.." type="text" />
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" placeholder="Your E-mail.." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message.." style={{ height: 200 }} defaultValue={""} />
                    <input type="hidden" name="_gotcha"/>
                    <button type="submit" value="send" className="submit-btn">Submit</button>
                  </form>
                </ScrollAnimation>
      				</div>
      				<div className="contact-info col">
                <ScrollAnimation duration={1} animateIn="fadeInRight">
        				  <h2>Listen</h2>
        				  <iframe title="Lauren's Fall Spotify Playlist" src="https://open.spotify.com/embed/user/laurenredmond/playlist/2sTFq6NIbATvVDZRUlyEyF" width="80%" height={250} frameBorder={0} />
                </ScrollAnimation>
              </div>
    		  </article>
    		</main>
        )}
      </div>
    );
  }
}

export default Contact;
