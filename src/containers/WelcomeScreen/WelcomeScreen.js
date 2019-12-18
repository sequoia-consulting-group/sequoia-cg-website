import React, { Component, Fragment } from 'react'
// import posed from 'react-pose'
// import SplitText from 'react-pose-text'
// import LearnMore from '../../components/LearnMore'
import { Link, Element } from 'react-scroll'
import './WelcomeScreen.css'
import './LearnMore.css'

class WelcomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <div id="click-container" className="welcome-screen">
          <img className="welcome-logo" src="/images/WhiteGoldBorderLogo-nobackground.png" alt="Logo Sequoia"/>
          <h2 className="company-intro">
            Proposal Development, Strategic Advice and Government Contracting Services
          </h2>
          <div className="more-info">
          <Link activeClass="active" className="" to="learn" offset={-64} spy={true} smooth={true} duration={500} >
            <button className="learn-more">Learn More</button>            
          </Link>
          <Link activeClass="active" className="" to="learn" offset={-64} spy={true} smooth={true} duration={500} >
            <i className="arrow down"></i>
          </Link>
          </div>
        </div>

        <Element name="learn" className="learn-more-container">
          <div className="learn-title-container">
            <h2 className="learn-title">About Us</h2>
            <div className="learn-title-underline"></div>
          </div>
          <div className="learn-profile-container">
            <div className="learn-profile-card">
              <img className="learn-profile-photo" src="/images/blank-profile.jpg" alt="Heidi Agostini-Broadt"/>
              <h2 className="learn-profile-name">Heidi Agostini, Ph.D., PMP</h2>
              <h2 className="learn-profile-title">President</h2>
              <p className="learn-profile-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Massa tincidunt dui ut ornare.</p>
            </div>

            {/* <div className="learn-profile-card">
              <img className="learn-profile-photo" src="/images/blank-profile.jpg" alt="Trevor Agostini-Broadt"/>
              <h2 className="learn-profile-name"></h2>
              <h3 className="learn-profile-title">President</h3>
              <p className="learn-profile-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Massa tincidunt dui ut ornare.</p>
            </div> */}
          </div>

          <div className="learn-title-container">
            <h2 className="learn-title">Why Sequoia Consulting?</h2>
            <div className="learn-title-underline"></div>
          </div>

          <div className="learn-paragraph-container">
            <p className="learn-about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img className="learn-about-photo" src="/images/ConferenceStock.jpg" alt="stock conference"/>
          </div>

          <div className="learn-list-container">
            <ul className="learn-list">
              
              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="conference icon"/>
                <li className="learn-list-item">Duis at consectetur lorem donec massa sapien faucibus et molestie</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="schedule icon"/>
                <li className="learn-list-item">Id porta nibh venenatis cras sed felis eget velit aliquet</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="collaboration icon"/>
                <li className="learn-list-item">Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="todo-list icon"/>
                <li className="learn-list-item">Gravida arcu ac tortor dignissim convallis aenean et tortor at</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="account icon"/>
                <li className="learn-list-item">Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/eco-24px.svg" alt="goal icon"/>
                <li className="learn-list-item">Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt</li>
              </div>
            </ul>
          </div>
        </Element>
      </Fragment>
    )
  }
}

export default WelcomeScreen;