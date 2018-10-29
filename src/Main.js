import React, { Component } from "react";
import {
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import logo from './img/logo-pink.png';
import $ from 'jquery';

class Main extends Component {
  constructor() {
    super();
    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    if(window.innerWidth < 800) {
      $('nav ul').slideToggle();

      if ($('#nav-toggle').hasClass('active')) {
        $('#nav-toggle').removeClass('active');
      } else {
        $('#nav-toggle').addClass('active');
      }
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <header className="animated fadeInRight">
        			<section>
        			  <div className="container nav-container">

        					<div className="logo">
        					  <Link to="/">
        						  <img className="logo-img" src={logo} alt="logo"/>
        					  </Link>
        					</div>

        					<nav>
        					  <div className="nav-mobile"><Link id="nav-toggle" onClick={this.navToggle} to="#!"><span /></Link></div>
        					  <ul className="nav-list nav-animate" onClick={this.navToggle}>
          						<li><NavLink to="/">Home</NavLink></li>
          						<li><NavLink to="/skills">Skills</NavLink></li>
          						<li><NavLink to="/projects">Projects</NavLink></li>
          						<li><NavLink to="/contact">Contact</NavLink></li>
        					  </ul>
        					</nav>

        			  </div>
        			</section>
      		  </header>

          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/skills" component={Skills}/>
    	      <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
