import React, { Component } from 'react'

class MenuButton extends Component {
  
  render() {
    const { menuItem, active } = this.props
    const route = menuItem.toLowerCase()
    console.log(route === active)
    return(
      <div className={`menu-button ${route === active ? "active" : ""}`}>
        <a href={`/${route}`}>{menuItem}</a>
      </div>
    )
  }
}

export default MenuButton;