import React, { Component } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import $ from 'jquery';
import Score from './components/Score';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Records from './components/records/Records';

class App extends Component {

  state = {
    data: {
      locations: [],
      caterings: [],
    },
  };

  componentDidMount() {
    // Load the env object.
    const env = runtimeEnv();

    $.getJSON(env.REACT_APP_API_HOST + '/api/v1/all').done((data) => {
      this.setState({data: data})
    });
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-medium reveal-for-large" id="filters" data-off-canvas>
          <Score score={273} />
          <Filters />
        </div>

        <div id="main" className="off-canvas-content" data-off-canvas-content>
          <Header />
          <Records title="Location" records={this.state.data.locations} />
          <Records title="Catering" records={this.state.data.caterings} />
        </div>
      </div>
    );
  }
}

export default App;
