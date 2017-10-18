import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Record from './Record';
import RecordCarousel from './RecordCarousel';
import RecordDetail from './RecordDetail';

class Records extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardDetail: null,
      records: [],
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleCardSelected = this.handleCardSelected.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const kind = newProps.title === 'Location' ? 'location' : 'catering';
    const records = newProps.records.map(record => {
      const cardProps = {
        selected: false,
        metadata: {
          distanceCenter: 0.8,
          distanceStation: 0.1,
        }
      };
      cardProps.metadata = Object.assign({}, cardProps.metadata, {...record});
      return {
        id: record.id,
        namespaced_id: kind + record.id,
        name: record.name,
        kind: kind,
        card: cardProps,
      };
    });
    this.setState({records: records});
  }

  render() {
    // assign handler functions as props and merge the other ones
    const records = this.state.records.map((record) =>
      <Record
        key={`record-${record.namespaced_id}`}
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
      if (record.namespaced_id === clickedId) {
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
      newRecord.card.selected = record.namespaced_id === selectedId;
      records.push(newRecord);
    });
    this.setState({records: records});
  }
}

export default Records;
