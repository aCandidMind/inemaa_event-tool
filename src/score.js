import React, {Component, PropTypes} from 'react';
import 'rc-progress/assets/index.css';
import { Line as LineProgress } from 'rc-progress';

import * as imgs from './imgs';

class Score extends Component {

  render() {
    return (
      <div id="meter">
        <img id="reference_needle" className="needle" src={imgs['pinBlue']} />
        <img id="optimum_needle" className="needle" src={imgs['pinGreen']} />
        <LineProgress percent="30"
                      strokeWidth="3" strokeColor="#00FF00"
                      trailWidth="3.5" />
      </div>
    );
  }

}

export default Score;
