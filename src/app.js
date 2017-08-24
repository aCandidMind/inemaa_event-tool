/* eslint-disable import/no-unresolved */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Styling
import './main.scss';
import 'react-foundation-components/lib/_typography.scss';
import { Float, ClearFix } from 'react-foundation-components/lib/float';
import { Callout } from 'react-foundation-components/lib/callout';

import Lanes from './lanes';
import Score from './score'
import Filters from './filters'
import ReportCallout from './report';
import * as maps from './maps';

const scoreLookup = {
  location: {score: 0},
  catering: {score: 0},
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.onLaneChoice = this.onLaneChoice.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }


  onLaneChoice(score, type) {
    this.setScore(score, type);
  }

  handleCheckboxClick(name, value) {
    this.lane.handleCheckboxClick(name, value);
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
                <Lanes
                  publishLaneChoice={this.onLaneChoice}
                  ref={(lane) => this.lane = lane}
                />
              </div>
              <div id="sidebar">
                <Score score={this.state.score} />
                <Callout>
                  <h5>Sortierung</h5>
                  <form>
                    <select>
                      <option>Nachhaltigkeit</option>
                      <option>Name</option>
                    </select>
                  </form>
                </Callout>
                <Filters id="filters" handleCheckboxClick={this.handleCheckboxClick} />
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
