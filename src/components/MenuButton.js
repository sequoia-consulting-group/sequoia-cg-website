import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuButton extends Component {
  
  render() {
    const { menuItem, active } = this.props
    const route = menuItem.toLowerCase()
    return(
      <div className={`menu-button ${route === active ? "active" : ""}`}>
        <Link to={`/${route}`}>{menuItem}</Link>
      </div>
    )
  }
}

export default MenuButton;