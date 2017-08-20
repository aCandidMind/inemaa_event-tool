import React, {Component, PropTypes} from 'react';
import 'rc-progress/assets/index.css';
import { Line as LineProgress } from 'rc-progress';


class Score extends Component {

  state = {
    meterWidth: 0,
  };

  optimum = 400;

  render() {
    const styleInducedMeterFillOffset = 3;
    const scorePercent = scoreToPercent(this.props.score - styleInducedMeterFillOffset, this.optimum);
    console.log("Score#render state.score", this.props.score, 'in percent', scorePercent);
    return (
      <div id="meter">
        <LineProgress percent={scorePercent}
                      strokeWidth="1" strokeColor="#00FF00"
                      trailWidth="1" />
        Nachhaltigkeitslevel {Math.round(scorePercent)}%
      </div>
    );
  }

  updateMeterWidth() {
    this.setState({meterWidth: window.innerWidth});
    console.log("updateMeterWidth", window.innerWidth, window.innerWidth);
  }

  componentWillMount() {
    this.updateMeterWidth();
    window.addEventListener('resize', this.updateMeterWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMeterWidth);
  }

}

function scoreToPercent(score, optimum) {
  return score / optimum * 100;
}

export default Score;
