/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import { FlexParent, FlexChild } from 'react-foundation-components/lib/flex';
import './splash.css';
import './logo.png';
import './splashFilters.jpg';

import 'react-foundation-components/lib/_typography.scss';

export default () => {
  return (
    <FlexParent id="splashContainer" horizontalAlignment="middle" verticalAlignment="middle">
      <FlexChild>
        <a href="index.html#mapSummer">
          <img id="map" role="presentation" src="splashFilters.jpg" />
        </a>
      </FlexChild>
    </FlexParent>
  );
};
