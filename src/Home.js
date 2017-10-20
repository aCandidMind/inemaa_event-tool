import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './components/header/Header';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header noLogo={true} />
        <a href="/app">App</a>
      </div>
    );
  }
}

export default Home;
