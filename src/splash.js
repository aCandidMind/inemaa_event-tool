/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './splash.css';

import 'react-foundation-components/lib/_typography.scss';

const App = () => {
  return (
    <div id="splashContainer">
      <a href="http://localhost:3000/#mapSummer">
        <img id="map" role="presentation" src="http://localhost:3000/map_summer.jpg" />
      </a>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
