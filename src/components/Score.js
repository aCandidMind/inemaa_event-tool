import React, {Component} from 'react';

function sum(obj) {
  let sum = 0;
  for (let el in obj) {
    if (obj.hasOwnProperty(el)) {
      sum += parseInt(obj[el], 10);
    }
  }
  return sum;
}

class Score extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meterWidth: 0,
    };
    // assuming we are feed with the maximums
    this.optimum = sum(this.props.scores);
  }


  render() {
    const scoreSum = sum(this.props.scores);
    const scorePercent = scoreToPercent(scoreSum, this.optimum);
    console.log("Score#render state.score", scoreSum, 'in percent', scorePercent);
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
              <button className="cell small-1 button hollow">
                <i className="fa fa-info" />
              </button>
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
