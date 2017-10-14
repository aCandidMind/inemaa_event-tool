import React, {Component} from 'react';

class Record extends Component {

  state = {
    classNameSuffix: '',
  };

  render() {
    const className = "cell" + this.state.classNameSuffix;
    return (
      <div className={className} onClick={this.toggleSelected.bind(this)}>
        <h3>{this.props.title}</h3>
        <div className="rating">5 Stars</div>
        <ul className="tags menu simple">
          <li>#Strommix</li>
          <li>#JWD</li>
          <li>#Fleisch</li>
        </ul>
      </div>
    )
  }

  toggleSelected() {
      const classNameSuffix = (this.state.classNameSuffix === '') ? " selected" : '';
      this.setState({classNameSuffix: classNameSuffix});
  }
}

export default Record;
