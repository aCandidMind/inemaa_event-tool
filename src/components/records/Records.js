import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Record from './Record';
import RecordCarousel from './RecordCarousel';
import RecordDetail from './RecordDetail';

function getKind(props) {
  return props.title.toLowerCase();
}

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
    const kind = getKind(newProps);
    const records = newProps.records.map(record => {
      const cardProps = {
        selected: record.id === newProps.selectedId,
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
        handleSaveClick={this.props.handleSaveClick}
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
              handleSaveClick={this.props.handleSaveClick} />
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

  handleSaveClick() {
    if (this.state.cardDetail) {
      const {
        id,
        kind
      } = this.state.cardDetail;
      this.props.handleSaveClick(kind, id);
    } else {
      throw new Error('no currently selected card in state');
    }
  }

  handleCloseClick() {
    this.setState({cardDetail: null});
  }

  handleCardSelected(selectedId) {
    this.props.handleSelect(getKind(this.props), selectedId);
  }
}

export default Records;
