import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Record from './Record';
import RecordCarousel from './RecordCarousel';
import RecordDetail from './RecordDetail';
import { withoutItem } from '../../utils';

function getKind(props) {
  return props.title.toLowerCase();
}

class Records extends Component {

  constructor(props) {
    super(props);
    this.state = {
      records: [],
      cardDetail: null,
      selectedId: null,
      savedRecords: [],
    };
    this.handleDetailClick = this.handleDetailClick.bind(this);
    this.handleCardSelected = this.handleCardSelected.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // on data updates
    const kind = getKind(newProps);
    const records = newProps.records.map(record => {
      const cardProps = {
        metadata: {
          distanceCenter: 0.0,
          distanceStation: 0.0,
        }
      };
      cardProps.metadata = Object.assign({}, cardProps.metadata, {...record});
      return {
        id: record.id,
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
        key={`record-${record.id}`}
        handleDetailClick={this.handleDetailClick}
        handleCardSelected={this.handleCardSelected}
        handleSaveClick={this.handleSaveClick}
        opened={this.state.cardDetail && record.id === this.state.cardDetail.id}
        selected={record.id === this.state.selectedId}
        saved={this.state.savedRecords.indexOf(record.id) !== -1}
        {...record}
      />
    );
    return (
      <div>
        <div ref="category" className={`category ${getKind(this.props)} grid-x`}>
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
          this.state.cardDetail &&
            <RecordDetail
              cardDetail={this.state.cardDetail}
              handleCloseClick={this.handleCloseClick.bind(this)}
              handleSaveClick={this.handleSaveClick} />
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

  handleSaveClick(id) {
    let savedRecords = this.state.savedRecords;
    const index = savedRecords.indexOf(id);
    let increment = null;
    if (index > -1) {
      savedRecords = withoutItem(savedRecords, index);
      increment = -1;
    } else {
      savedRecords.push(id);
      increment = 1;
    }

    this.setState({savedRecords: savedRecords});
    this.props.handleSaveClick(increment);
  }

  handleCloseClick() {
    this.setState({cardDetail: null});
  }

  handleCardSelected(selectedId) {
    this.setState({selectedId: selectedId});
    this.props.handleSelect(getKind(this.props), selectedId);
  }
}

export default Records;
