import React, {Component} from 'react';

class Record extends Component {

  render() {
    return (
      <div className="cell">
        <h3>{this.props.title}</h3>
        <div className="rating">5 Stars</div>
        <ul className="tags menu simple">
          <li>#Strommix</li>
          <li>#JWD</li>
          <li>#Fleisch</li>
        </ul>
      </div>
    )
  }
}

export default Record;
