/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import ReportCallout from './report';
import Lanes from './lanes';

import 'react-foundation-components/lib/_typography.scss';

const App = () => (
  <div>
    <ReportCallout />
    <Lanes />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
