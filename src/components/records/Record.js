import React, {Component} from 'react';
import { getItemsFromSemicolonField, displayAsDistance } from '../../utils';

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
      rating,
    } = this.props.card.metadata;
    const id = this.props.id;

    const tags = getItemsFromSemicolonField(this.props.card.metadata.tags, 6);

    return (
      <div className={className} onClick={() => this.handleSelected(id)}>
        <h3>{this.props.name}</h3>
        <div className="rating">{rating && rating + " Sterne"}</div>
        <ul className="tags menu">
          {tags.map((tag,i) => <li key={i}>#{tag}</li>)}
        </ul>
        <div className="data-and-buttons cell auto grid-x">
          {this.getExtraMetaData()}
          <div className="cell grid-x align-bottom">
            <div className="cell shrink">
              <ul className="distances">
                <li><span className="fa fa-dot-circle-o" /> {displayAsDistance(distanceCenter)}</li>
                <li><span className="fa fa-train" /> {displayAsDistance(distanceStation)}</li>
              </ul>
            </div>
            <div className="cell auto result-buttons grid-x align-right">
              <button className="clear secondary button button-small cell auto"
                      onClick={() => this.props.handleSaveClick(this.props.kind, this.props.id)}>
                <span className="fa fa-paperclip" />
                Merken
              </button>
              <button className="clear secondary button button-small cell auto"
                      onClick={() => this.handleDetailClicked(id)}>
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
      rooms,
    } = this.props.card.metadata;
    let result = null;
    if (this.props.kind === 'location') {
      const translations = window.translations.location;
      result = (
        <div className="cell extra-metadata">
          {capacity && <div>{translations.capacity} {capacity} Personen</div>}
          {rooms && <div>{translations.rooms} {rooms}</div>}
        </div>
      );
    }
    return result;
  }
}

export default Record;
