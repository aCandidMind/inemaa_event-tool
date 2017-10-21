import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import WishListButton from './WishListButton.js';

class Header extends Component {
  render() {
    const Logo = function () {
      return (
        <Link to="/">
          <img alt="inemaa Logo" data-interchange={"[logo_small.png, small], [logo_medium.png, medium], [logo_large.png, large]"} />
        </Link>
      );
    };
    const navClassname = this.props.noWishlist ? "top-bar-right" : "top-bar-center";
    return (
      <div id="header" className="grid-x align-justify align-middle">
        <div className="cell" >
          {/* mobile nav bar */}
          <div className="title-bar topbar-center-logo-mobile hide-for-medium" data-responsive-toggle="topbar-center-logo">
            {
              this.props.noLogo !== true &&
                <div className="title-bar-left">
                  <div className="title-bar-title"><Logo /></div>
                </div>
            }
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
            <div className={navClassname}>
              <ul className="menu vertical medium-horizontal hide-for-small">
                <li><Link to="#">Anbieter werden</Link></li>
                <li><Link to="/ueber_uns">Über uns</Link></li>
                <li><Link to="#">Hilfe</Link></li>
              </ul>
            </div>
            {
              this.props.handleWishListClick && this.props.noWishlist !== true &&
                <div className="top-bar-right">
                  <WishListButton handleWishListClick={this.props.handleWishListClick}
                                count={this.props.wishlistCount} />
                </div>
            }
          </div>
          {/* /medium and larger nav bar */}
        </div>
      </div>
    );
  }
}

export default Header;
