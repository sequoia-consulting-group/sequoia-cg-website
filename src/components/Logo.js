import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return(
      <div className="logo-container">
        <img id="logo-tree" src="/images/TreeGreen-nobackground.png" alt="Logo Tree"/>
        <div className="logo-name">
          <img id="logo-sequoia" src="/images/SequoiaGold-nobackground.png" alt="Logo Sequoia"/>
          <img id="logo-cg" src="/images/ConsultingGroupGreen-nobackground.png" alt="Logo Consulting Group"/>
        </div>
      </div>
    )
  }
}

export default Logo;