import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import RecordCarousel from './RecordCarousel';
import Record from './Record';

class Records extends Component {

  render() {
    const kind = this.props.title === 'Location' ? 'location' : 'catering';
    const cardProp = {
      metadata: {
        capacity: 2400,
        conferenceRooms: 8,
        distanceCenter: 0.8,
        distanceStation: 0.1
      }
    };
    const records = [
      <Record key="record-1" title="Kap Hanau am Fluß" kind={kind} card={cardProp} />,
      <Record key="record-2" title="Bla blub" kind={kind} card={cardProp} />,
      <Record key="record-3" title="asdqwe wersfs" kind={kind} card={cardProp} />,
      <Record key="record-4" title="Fluß Buss Nuss" kind={kind} card={cardProp} />
    ];
    return (
      <div className={`category ${this.props.title.toLowerCase()} grid-x small-up-2 medium-up-3 large-up-4`}>
        <h3>{this.props.title}</h3>
        <MediaQuery query="(min-device-width: 1224px)">
          <RecordCarousel records={records} />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div className="mobile-records">
            {records}
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Records;
