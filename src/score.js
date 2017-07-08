import React, {Component, PropTypes} from 'react';
import 'rc-progress/assets/index.css';
import { Line as LineProgress } from 'rc-progress';

import * as imgs from './imgs';

class Score extends Component {

  state = {
    optimum: 200,
    score: 0,
  };

  render() {
    console.log("Score#render state.score (percent)", this.state.score);
    return (
      <div id="meter">
        <div id="reference_needle" className="needle">
          <span>R</span>
          <img src={imgs['pinBlue']} />
        </div>
        <div id="optimum_needle" className="needle">
          <span>O</span>
          <img src={imgs['pinGreen']} />
        </div>
        <LineProgress percent={this.state.score}
                      strokeWidth="3" strokeColor="#00FF00"
                      trailWidth="4" />
      </div>
    );
  }

  setScore(score) {
    console.log("Score#setScore score", score, "old score (percent)", this.state.score);
    const scoreAsPercent = score / this.state.optimum * 100;
    this.setState({score: scoreAsPercent})
  }

}

export default Score;
