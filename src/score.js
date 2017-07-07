import React, {Component, PropTypes} from 'react';
import 'rc-progress/assets/index.css';
import { Line as LineProgress } from 'rc-progress';

import * as imgs from './imgs';

class Score extends Component {

  render() {
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
        <LineProgress percent="30"
                      strokeWidth="3" strokeColor="#00FF00"
                      trailWidth="3.5" />
      </div>
    );
  }

}

export default Score;
