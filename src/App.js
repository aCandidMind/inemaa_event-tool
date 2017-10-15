import React, { Component } from 'react';
import Score from './components/Score';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Records from './components/records/Records';

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
          <Records title="Location"/>
          <Records title="Catering"/>
        </div>
      </div>
    );
  }
}

export default App;
