import React, { Component, Fragment } from 'react'
// import posed from 'react-pose'
// import SplitText from 'react-pose-text'
// import LearnMore from '../../components/LearnMore'
import { Link, Element } from 'react-scroll'
import Particles from 'react-particles-js'
import './WelcomeScreen.css'
import './LearnMore.css'

class WelcomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <div id="click-container" className="welcome-screen">
          <div className="particles-container">
            <Particles
              style={{"z-index": "0", "position": "absolute", "left": "0"}}
              params={{
                "particles": {
                    "number": {
                        "value": 300,
                        "density": {
                          "enable": true,
                          "value_area": 1500
                        }
                    },
                    // "color": {
                    //   "value": "#fffe34"
                    // },
                    // "shape": {
                    //   "type": "image",
                    //   "image": {
                    //     "src": "images/eco-24px.svg"
                    //   }
                    // },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "opacity": {
                      "value": "0.8",
                    },
                    "line_linked": {
                      "enable": false,
                      "opacity": "0.8"
                    },
                    "move": {
                      "direction": "bottom",
                      "out_mode": "out",
                      "speed": 2
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                },
                
              }}
            />
          </div>
          <img className="welcome-logo" src="/images/WhiteGoldBorderLogo-small.png" alt="Logo Sequoia"/>
          <h2 className="company-intro intro-1">
            Proposal Development,
          </h2>
          <h2 className="company-intro intro-2">
            Strategic Advice and
          </h2>
          <h2 className="company-intro intro-3">
            Government Contracting Services
          </h2>
          <div className="more-info">
          <Link activeClass="active" className="" to="learn" offset={-64} spy={true} smooth={true} duration={500}>
            <button className="learn-more">Learn More</button>            
          </Link>
          <Link activeClass="active" className="" to="learn" offset={-64} spy={true} smooth={true} duration={500}>
            <i className="arrow down"></i>
          </Link>
          </div>
        </div>

        <Element name="learn" className="learn-more-container">
          <div className="learn-title-container">
            <h2 className="learn-title">About Us</h2>
            <div className="learn-title-underline"></div>
          </div>
          {/* <div className="learn-profile-container"> */}
            <div className="learn-profile-card">
              <img className="learn-profile-photo" src="/images/Heidi-Agostini-small.jpg" alt="Heidi Agostini"/>
              <h2 className="learn-profile-name">Heidi Agostini, Ph.D., PMP</h2>
              <h2 className="learn-profile-title">President</h2>
              <p contentEditable={true} className="learn-profile-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Massa tincidunt dui ut ornare.</p>
            </div>

            {/* <div className="learn-profile-card">
              <img className="learn-profile-photo" src="/images/blank-profile.jpg" alt="Trevor Agostini-Broadt"/>
              <h2 className="learn-profile-name"></h2>
              <h3 className="learn-profile-title">President</h3>
              <p className="learn-profile-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Massa tincidunt dui ut ornare.</p>
            </div> */}
          {/* </div> */}

          <div className="learn-title-container">
            <h2 className="learn-title">Why Sequoia Consulting?</h2>
            <div className="learn-title-underline"></div>
          </div>

          <div className="learn-paragraph-container">
            <p contentEditable={true} className="learn-about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="learn-about-photo-container">
              <img className="learn-about-photo" src="/images/ConferenceStock-small.jpg" alt="stock conference"/>
            </div>
          </div>

          <div className="learn-list-container">
            <ul className="learn-list">
              
              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="conference icon"/>
                <li contentEditable={true} className="learn-list-item">Duis at consectetur lorem donec massa sapien faucibus et molestie</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="schedule icon"/>
                <li contentEditable={true} className="learn-list-item">Id porta nibh venenatis cras sed felis eget velit aliquet</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="collaboration icon"/>
                <li contentEditable={true} className="learn-list-item">Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="todo-list icon"/>
                <li contentEditable={true} className="learn-list-item">Gravida arcu ac tortor dignissim convallis aenean et tortor at</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="account icon"/>
                <li contentEditable={true} className="learn-list-item">Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="goal icon"/>
                <li contentEditable={true} className="learn-list-item">Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt</li>
              </div>
            </ul>
          </div>
        </Element>
      </Fragment>
    )
  }
}

export default WelcomeScreen;