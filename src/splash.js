/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import { FlexParent, FlexChild } from 'react-foundation-components/lib/flex';
import './splash.css';
import './logo.png';
import './splashFilters.jpg';

import 'react-foundation-components/lib/_typography.scss';

const App = () => {
  return (
    <FlexParent id="splashContainer" horizontalAlignment="middle" verticalAlignment="middle">
      <FlexChild>
        <a href="http://localhost:3000/#mapSummer">
          <img id="map" role="presentation" src="http://localhost:3000/splashFilters.jpg" />
        </a>
      </FlexChild>
    </FlexParent>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
