import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Record from './Record';
import RecordCarousel from './RecordCarousel';
import RecordDetail from './RecordDetail';

class Records extends Component {

  constructor(props) {
    super(props);
    const kind = props.title === 'Location' ? 'location' : 'catering';
    const cardProps = {
      selected: false,
      metadata: {
        capacity: 2400,
        conferenceRooms: 8,
        distanceCenter: 0.8,
        distanceStation: 0.1,
        description: "Your response to that issue seemed to appease the user, but I am a bit concerned by the blog post, and confused about how to go forward without the Mixin. How would the ES6 syntax look, exactly? What would I add to this to make it work properly?",
      }
    };
    this.state = {
      cardDetail: null,
      records: [
        {title: "Kap Hanau am Fluß", id: kind + '1', kind: kind, card: cardProps},
        {title: "Schloß Blau", id: kind + '2', kind: kind, card: cardProps},
        {title: "asdqwe wersfs", id: kind + '3', kind: kind, card: cardProps},
        {title: "Fluß Buss Nuss", id: kind + '4', kind: kind, card: cardProps},
      ]
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleCardSelected = this.handleCardSelected.bind(this);
  }

  render() {
    // assign handler functions as props and merge the other ones
    const records = this.state.records.map((record) =>
      <Record
        key={`record-${record.id}`}
        handleDetailClick={this.handleDetailClick}
        handleCardSelected={this.handleCardSelected}
        {...record}
      />
    );
    return (
      <div>
        <div ref="category" className={`category ${this.props.title.toLowerCase()} grid-x`}>
          <h3>{this.props.title}</h3>
          <MediaQuery query="(min-width: 1224px)">
            <RecordCarousel records={records} />
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <div className="mobile-records">
              {records}
            </div>
          </MediaQuery>
        </div>
        {
          this.state.cardDetail && <RecordDetail cardDetail={this.state.cardDetail} />
        }
      </div>
    )
  }

  handleDetailClick(clickedId) {
    let cardDetail = null;
    this.state.records.forEach(record => {
      if (record.id === clickedId) {
        cardDetail = record;
      }
    });
    if (cardDetail) {
      this.setState({cardDetail: cardDetail});
    } else {
      throw new Error('no such card id ' + clickedId);
    }
  }

  handleCardSelected(selectedId) {
    const records = [];
    this.state.records.forEach(record => {
      // deep clone record, only works with primitive data types and without recursive elements
      const newRecord = JSON.parse(JSON.stringify(record));
      newRecord.card.selected = record.id === selectedId;
      records.push(newRecord);
    });
    this.setState({records: records});
  }
}

export default Records;
