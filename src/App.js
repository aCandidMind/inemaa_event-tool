import React, { Component } from 'react';
import $ from 'jquery';
import Score from './Score.js';
import Filters from './Filters.js';
import Logo from './Logo.js';
import WishListButton from './WishListButton.js';
import 'font-awesome/css/font-awesome.css';
import './App.css';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    //script.src = "http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js";
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js";
    script.async = true;
    script.onload = function () {
        $(document).foundation();
    };
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-medium reveal-for-large" id="filters" data-off-canvas>
          <Score score={66} />
          <Filters />
        </div>

        <div className="off-canvas-content" data-off-canvas-content>
          <div id="header" className="row align-middle">
            <div className="columns" >
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

          <div className="row small-up-2 medium-up-3 large-up-4">
            <div className="column">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
            <div className="column">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
            <div className="column">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
