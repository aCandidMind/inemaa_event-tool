/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import LanesContainer from './lanes';

import 'react-foundation-components/lib/_typography.scss';

const App = () => (
  <div>
    <LanesContainer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
