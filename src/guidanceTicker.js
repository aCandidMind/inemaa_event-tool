import React, {Component, PropTypes} from 'react';
import {TransitionMotion, spring} from 'react-motion';

class GuidanceTicker extends Component {

  state = {
    idx: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        idx: (++this.state.idx) % this.props.data.length
      });
    }, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const item = this.props.data[this.state.idx];
    return (
      <TransitionMotion
        willEnter={() => ({
          opacity: 0,
          y: 15,
        })}
        willLeave={() => ({
          opacity: spring(0),
          y: spring(-15),
        })}
        styles={[{
          key: item.id,
          data: item,
          style: {
            opacity: spring(1),
            y: spring(0),
          },
        }]}>
        {(configs) =>
          <div className="tickerContainer">
            {configs.map((config) =>
              <div className="tickerItem"
                key={config.key}
                style={{
                  opacity: config.style.opacity,
                  transform: `translateY(${config.style.y}px)`,
                }}>
                {config.data.text}
                <a href="#" className="guidanceLink">mehr Infos...</a>
              </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
}

export default GuidanceTicker;
