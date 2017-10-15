import React, {Component} from 'react';

class Record extends Component {

  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleDetailClicked = this.handleDetailClicked.bind(this);
  }

  render() {
    const className = "cell card-cell grid-y" + (this.props.card.selected ? ' selected' : '');

    const {
      distanceCenter,
      distanceStation,
    } = this.props.card.metadata;
    const id = this.props.id;

    return (
      <div className={className} onClick={() => this.handleSelected(id)}>
        <h3>{this.props.title}</h3>
        <div className="rating">5 Stars</div>
        <ul className="tags menu">
          <li>#Strommix</li>
          <li>#JWD</li>
          <li>#Fleisch</li>
        </ul>
        <div className="data-and-buttons cell auto grid-x">
          {this.getExtraMetaData()}
          <div className="cell grid-x align-bottom">
            <div className="cell shrink">
              <ul className="distances">
                <li><span className="fa fa-dot-circle-o" /> {distanceCenter}</li>
                <li><span className="fa fa-train" /> {distanceStation}</li>
              </ul>
            </div>
            <div className="cell auto result-buttons grid-x align-right">
              <button className="clear secondary button button-small cell auto">
                <span className="fa fa-paperclip" />
                Merken
              </button>
              <button className="clear secondary button button-small cell auto" onClick={() => this.handleDetailClicked(id)}>
                <span className="fa fa-info" />
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleSelected(id) {
    this.props.handleCardSelected(id);
  }

  handleDetailClicked(id) {
    this.props.handleDetailClick(id);
  }

  getExtraMetaData() {
    const {
      capacity,
      conferenceRooms,
    } = this.props.card.metadata;
    let result = null;
    if (this.props.kind === 'location') {
      result = (
        <div className="cell extra-metadata">
          <div>Kapazität: {capacity}</div>
          <div>Konferenzräume: {conferenceRooms}</div>
        </div>
      );
    }
    return result;
  }
}

export default Record;
