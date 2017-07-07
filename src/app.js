/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-progress/assets/index.css';
import { Line as LineProgress } from 'rc-progress';

import ReportCallout from './report';
import Lanes from './lanes';
import * as maps from './maps';
import * as imgs from './imgs';

import 'react-foundation-components/lib/_typography.scss';

const App = () => {
  const mapFile = location.hash.replace('#', '');
  return (
    <div id="appContainer">
      <img id="map" role="presentation" src={maps[mapFile]} />
      <div id="meter">
        <img id="reference_needle" className="needle" src={imgs['pinBlue']} />
        <img id="optimum_needle" className="needle" src={imgs['pinGreen']} />
        <LineProgress percent="30"
                      strokeWidth="3" strokeColor="#00FF00"
                      trailWidth="3.5" />
      </div>
      <Lanes />
      <ReportCallout />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
