/* eslint-disable import/no-unresolved */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Styling
import { Float, ClearFix } from 'react-foundation-components/lib/float';
import 'react-foundation-components/lib/_typography.scss';

import Lanes from './lanes';
import Score from './score'
import ReportCallout from './report';
import * as maps from './maps';

const scoreLookup = {
  location: {score: 0},
  catering: {score: 0},
};

class App extends Component {

  state = {
    score: 0,
  };


  onLaneChoice(score, type) {
    this.setScore(score, type);
  }

  setScore(score, type) {
    console.log('Score#setScore type', type, 'score', score, "old score", this.state.score);
    if (type !== 'location') {
      // add to the old score
      this.setState({
        score: score + scoreLookup['location'].score,
      });
    } else {
      // don't add anything, instead simply set to value
      scoreLookup[type].score = score;
      this.setState({
        score: score,
      });
    }
  }

  render() {
    const mapFile = location.hash.replace('#', '');
    return (
      <div id="appContainer">
        <img id="map" role="presentation" src={maps[mapFile]}/>
        <ClearFix>
          <Float position="center" noWrap>
            <div id="mainApp">
              <div id="lanes">
                <Lanes publishLaneChoice={this.onLaneChoice.bind(this)}/>
              </div>
              <div id="sidebar">
                <Score score={this.state.score} />
              </div>
            </div>
          </Float>
        </ClearFix>
        <ReportCallout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
