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
        <div className="welcome-screen">
          <img className="welcome-logo" src="/images/WhiteLogo-nobackground.png" alt="Logo Sequoia"/>
          <h2 className="company-intro">
            Professional Biomedical Consulting
          </h2>
          <div className="more-info">
          <Link activeClass="active" className="" to="learn" offset={-32} spy={true} smooth={true} duration={500} >
            <button className="learn-more">Learn More</button>            
          </Link>
          <i className="arrow down"></i>
          </div>
        </div>

        <Element name="learn" className="learn-more-container">
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
                <img className="learn-list-icon" src="/images/icons8-conference.png" alt="conference icon"/>
                <li className="learn-list-item">Duis at consectetur lorem donec massa sapien faucibus et molestie</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/icons8-schedule.png" alt="schedule icon"/>
                <li className="learn-list-item">Id porta nibh venenatis cras sed felis eget velit aliquet</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/icons8-collaboration.png" alt="collaboration icon"/>
                <li className="learn-list-item">Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/icons8-todo-list.png" alt="todo-list icon"/>
                <li className="learn-list-item">Gravida arcu ac tortor dignissim convallis aenean et tortor at</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/icons8-account.png" alt="account icon"/>
                <li className="learn-list-item">Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros</li>
              </div>

              <div className="learn-list-item-container">
                <img className="learn-list-icon" src="/images/icons8-goal.png" alt="goal icon"/>
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