import React, {Component} from 'react';
import { getItemsFromSemicolonField, displayAsDistance } from '../../utils';

class Record extends Component {

  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleDetailClicked = this.handleDetailClicked.bind(this);
  }

  render() {
    const {
      id,
      selected,
      opened,
      saved,
    } = this.props;
    const {
      distanceCenter,
      distanceStation,
      rating,
    } = this.props.card.metadata;
    const containerClassName = "cell card-cell grid-y" + (selected ? ' selected' : '');
    const saveBtnClassName = "clear secondary button button-small cell auto" + (saved ? ' active' : '');
    const detailBtnClassName = "clear secondary button button-small cell auto" + (opened ? ' active' : '');

    const tags = getItemsFromSemicolonField(this.props.card.metadata.tags, 3);

    return (
      <div className={containerClassName} onClick={() => this.handleSelected(id)}>
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
              <button className={saveBtnClassName}
                      onClick={() => this.props.handleSaveClick(id)}>
                <span className="fa fa-paperclip" />
                {saved ?  'Gemerkt' : 'Merken'}
              </button>
              <button className={detailBtnClassName}
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
    let result = null;
    if (this.props.kind === 'location') {
      const {
        capacity,
        rooms,
      } = this.props.card.metadata;
      const translations = window.translations.location;
      result = (
        <div className="cell extra-metadata">
          {capacity && <div>{translations.capacity} {capacity} Personen</div>}
          {rooms && <div>{translations.rooms} {rooms}</div>}
        </div>
      );
    } else if (this.props.kind === 'catering') {
      const {
        short_description,
      } = this.props.card.metadata;
      result = (
        <div className="cell extra-metadata">
          {short_description && <div>{short_description}</div>}
        </div>
      );
    }
    return result;
  }
}

export default Record;
