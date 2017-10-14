import React, {Component} from 'react';

class Record extends Component {

  state = {
    classNameSuffix: '',
  };

  render() {
    const className = "cell card-cell grid-y" + this.state.classNameSuffix;

    const {
      distanceCenter,
      distanceStation,
    } = this.props.card.metadata;

    return (
      <div className={className} onClick={this.toggleSelected.bind(this)}>
        <h3>{this.props.title}</h3>
        <div className="rating">5 Stars</div>
        <ul className="tags menu simple">
          <li>#Strommix</li>
          <li>#JWD</li>
          <li>#Fleisch</li>
        </ul>
        <div className="data-and-buttons cell auto grid-x">
          {this.getExtraMetaData()}
          <div className="cell grid-x align-bottom">
            <div className="cell small-5">
              <ul className="distances">
                <li><span className="fa fa-dot-circle-o" /> {distanceCenter}</li>
                <li><span className="fa fa-train" /> {distanceStation}</li>
              </ul>
            </div>
            <div className="cell small-7 result-buttons grid-x align-right">
              <button className="clear secondary button button-small cell auto">
                <span className="fa fa-paperclip" />
                Merken
              </button>
              <button className="clear secondary button button-small cell auto">
                <span className="fa fa-info" />
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    )
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

  toggleSelected() {
      const classNameSuffix = (this.state.classNameSuffix === '') ? " selected" : '';
      this.setState({classNameSuffix: classNameSuffix});
  }
}

export default Record;
