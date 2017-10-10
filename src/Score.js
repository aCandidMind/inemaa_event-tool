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
        <div className="score-text grid-x align-center align-middle">
          <div className="small-10 grid-padding-x">
            <div className="cell">
              <h3>
                NACHHALTIGKEITSLEVEL
              </h3>
            </div>
            <div className="cell grid-x align-justify percent-row">
              <span className="cell small-3">
              {Math.round(scorePercent)}<span className="percent">%</span>
              </span>
              <span className="cell small-1">
                <i className="fa fa-info" />
              </span>
            </div>
          </div>
        </div>
        <div className="progress success score-line" role="progressbar" tabIndex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
          <div className="progress-meter" style={{width: scorePercent + "%"}}></div>
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
