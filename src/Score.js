import React, {Component} from 'react';

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
        <div className="row">
          <div className="columns">
            NACHHALTIGKEITSLEVEL
          </div>
        </div>
        <div className="row percent-row align-justify">
          <div className="small-4 columns">
          {Math.round(scorePercent)}<span className="percent">%</span>
          </div>
          <div className="small-2 columns">
            <i className="fa fa-info" />
          </div>
        </div>
        <div className="progress success score-line" role="progressbar" tabIndex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
          <div className="progress-meter" style={{width: "50%"}}></div>
        </div>
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
