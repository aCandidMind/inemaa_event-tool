import React, {Component} from 'react';

class RecordDetail extends Component {
  render() {
    return (
      <div className="category record-detail grid-x">
        <header className="cell auto grid-x align-top">
          <h3>{this.props.cardDetail.title}</h3>
          <span>5 Sterne</span>
          <button className="button clear self-align-right">
            <span className="fa fa-close" />
          </button>
        </header>
      </div>
    );
  }
}

export default RecordDetail;
