import React, { Component } from 'react'
import Logo from '../../components/Logo'
import Menu from '../Menu/Menu'
import './TitleBar.css'

class TitleBar extends Component {
  render() {
    const { active } = this.props
    return (
      <div className="titlebar">
        <Logo />
        <Menu active={active}/>
      </div>
    )
  }
}

export default TitleBar;