import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import RecordCarousel from './RecordCarousel';

class Records extends Component {

  render() {
    return [
      <MediaQuery query="(min-device-width: 1224px)">
        <RecordCarousel />
      </MediaQuery>,
      <MediaQuery query="(max-device-width: 1224px)">
        <div>
          <div className="cell">
            <h3>Kap Hanau am Fluß</h3>
            <div className="rating">5 Stars</div>
            <ul className="tags menu simple">
              <li>#Strommix</li>
              <li>#JWD</li>
              <li>#Fleisch</li>
            </ul>
          </div>
          <div className="cell">
            <img src="http://placehold.it/400x288?text=2" />
          </div>
          <div className="cell">
            <img src="http://placehold.it/400x288?text=3" />
          </div>
          <div className="cell">
            <img src="http://placehold.it/400x288?text=4" />
          </div>
        </div>
      </MediaQuery>
    ]
  }
}

export default Records;
