/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import LanesContainer from './lanes';
import './lanes.css'

import 'react-foundation-components/lib/_typography.scss';
import { Button } from 'react-foundation-components/lib/button';
import { ButtonGroup } from 'react-foundation-components/lib/button-group';
import { ButtonGroup as FlexButtonGroup } from 'react-foundation-components/lib/button-group-flex';

const App = () => (
  <div>
    <h1>Welcome to CSS Modules Custom example!</h1>
    <LanesContainer />
    <div>
      <h3>Button <code>react-foundation-components/lib/button</code></h3>
      <Button>Click Me!</Button>
      <Button color="secondary">Purple is Secondary Color</Button>
    </div>
    <div>
      <h3>ButtonGroup <code>react-foundation-components/lib/button-group</code></h3>
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </ButtonGroup>
    </div>
    <div>
      <h3>
        Flexbox ButtonGroup <code>react-foundation-components/lib/button-group-flex</code>
      </h3>
      <p>
        Because CSS Modules creates class names that are scoped locally to the component,
        we can use same Flexbox based and Float based components at same time! CSS Modules FTW!
      </p>
      <FlexButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </FlexButtonGroup>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
