import React, { Component } from 'react'
import MenuButton from '../../components/MenuButton'
import './Menu.css'

class Menu extends Component {
  render() {
    const { active } = this.props
    return (
      <div className="menu fullscreen">
        <MenuButton menuItem="Home" active={active}/>
        {/* <MenuButton menuItem="Company" active={active}/>
        <MenuButton menuItem="Services" active={active}/> */}
        <MenuButton menuItem="Contact" active={active}/>
      </div>
    )
  }
}

export default Menu;