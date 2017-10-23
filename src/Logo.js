import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import logoSmall from './images/logo_small.png';
import logoMedium from './images/logo_medium.png';
import logoLarge from './images/logo_large.png';

const sizes = {
  small: logoSmall,
  medium: logoMedium,
  large: logoLarge,
};

class Logo extends Component {
  render() {
    const LogoLink = function (props) {
      return (
        <Link to="/" className="logo">
          {props.children}
        </Link>
      );
    };
    const logoProps = {alt: "inemaa Logo", style: this.props.style};
    console.log("logoProps", logoProps);

    // return explicit size
    if (this.props.size) {
      const image = sizes[this.props.size];
      if (!image) {
        throw new Error("No such size");
      }
      return <LogoLink><img src={image} {...logoProps} /></LogoLink>;
    }

    // or media query chosen
    return (
      <LogoLink>
        <MediaQuery query="(max-width: 640px)">
          <img src={logoSmall} {...logoProps} />
        </MediaQuery>
        <MediaQuery query="(max-width: 1024px)">
          <img src={logoMedium} {...logoProps} />
        </MediaQuery>
        <MediaQuery query="(min-width: 1025px)">
          <img src={logoLarge} {...logoProps} />
        </MediaQuery>
      </LogoLink>
    );
  }
}

export default Logo;
