import React, { Component } from 'react';
import Score from './Score.js';
import Filters from './Filters.js';
import Header from './components/header/Header';
import 'font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-medium reveal-for-large" id="filters" data-off-canvas>
          <Score score={273} />
          <Filters />
        </div>

        <div id="main" className="off-canvas-content" data-off-canvas-content>
          <Header />

          <div className="grid-x small-up-2 medium-up-3 large-up-4">
            <div className="cell">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
            <div className="cell">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
            <div className="cell">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
            <div className="cell">
              <img className="thumbnail" src="http://placehold.it/400x288" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;