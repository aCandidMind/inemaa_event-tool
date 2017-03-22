/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import ReportCallout from './report';
import Lanes from './lanes';
import * as maps from './maps';

import 'react-foundation-components/lib/_typography.scss';

const App = () => {
  const mapFile = location.hash.replace('#', '');
  return (
    <div id="appContainer">
      <img id="map" role="presentation" src={maps[mapFile]} />
      <Lanes />
      <ReportCallout />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
