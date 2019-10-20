import React, { Component } from 'react'
// import posed from 'react-pose'
// import SplitText from 'react-pose-text'
import './SiteMap.css'

class SiteMap extends Component {
  render() {
    return (
      <div className="site-map-container">
        <div className="site-list-container">
          <ul className="site-list">
            <li className="site-list-item"><a href="/home">Home</a></li>
            <div className="between-list-item"/>
            <li className="site-list-item"><a href="/company">Company</a></li>
            <div className="between-list-item"/>
            <li className="site-list-item"><a href="/services">Services</a></li>
            <div className="between-list-item"/>
            <li className="site-list-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="sequoia-logo-container">
          <img className="sequoia-logo" src="/images/WhiteLogo-nobackground.png" alt="Logo Sequoia"/>
        </div>
        <div className="icons8-container">
          <p className="icons8">Icons by <a className="icons8-link" target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></p>
        </div>
      </div>
    )
  }
}

export default SiteMap;