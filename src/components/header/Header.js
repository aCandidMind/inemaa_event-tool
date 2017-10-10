import React, { Component } from 'react'
import Logo from './Logo.js';
import WishListButton from './WishListButton.js';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div id="header" className="grid-x align-justify align-middle">
        <div className="cell" >
          {/* mobile nav bar */}
          <div className="title-bar topbar-center-logo-mobile hide-for-medium" data-responsive-toggle="topbar-center-logo">
            <div className="title-bar-left">
              <div className="title-bar-title"><Logo /></div>
            </div>
            <div className="title-bar-center">
              <WishListButton />
            </div>
            <div className="title-bar-right">
              <button className="menu-icon dark" type="button" data-toggle="topbar-center-logo" />
            </div>
          </div>
          {/* /mobile nav bar */}

          {/* medium and larger nav bar */}
          <div className="top-bar topbar-center-logo hide-for-small" id="topbar-center-logo">
            <div className="top-bar-left">
              <Logo />
            </div>
            <div className="top-bar-center">
              <ul className="menu vertical medium-horizontal hide-for-small">
                <li><a href="#">Login</a></li>
                <li><a href="#">MySustainEvent</a></li>
                <li><a href="#">Über uns</a></li>
                <li><a href="#">Hilfe</a></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <WishListButton />
            </div>
          </div>
          {/* /medium and larger nav bar */}
        </div>
      </div>
    );
  }
}

export default Header;
