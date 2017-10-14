import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import RecordCarousel from './RecordCarousel';
import Record from './Record';

class Records extends Component {

  render() {
    const records = [
      <Record key="record-1" title="Kap Hanau am Fluß" />,
      <Record key="record-2" title="Bla blub" />,
      <Record key="record-3" title="asdqwe wersfs" />,
      <Record key="record-4" title="Fluß Buss Nuss" />
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
