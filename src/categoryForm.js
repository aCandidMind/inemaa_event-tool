import React, {Component, PropTypes} from 'react';
import { Callout } from 'react-foundation-components/lib/callout';

class CategoryForm extends Component {

  constructor(props) {
    super(props);
    this.values = {
      location: 'Location',
      catering: 'Catering',
      mobility: 'Mobilität',
      accommodation: 'Unterkunft',
    };
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleCheckboxClick(e) {
    this.props.handleCheckboxClick(
      e.target.getAttribute('value')
    );
  }

  render() {
    const keys = Object.keys(this.values);
    return (
      <Callout>
        <h5>Kategorien</h5>
        <form className="row">
          {
            keys.map((key, i) => {
              const value = this.values[key];
              const checkboxId = `lane_${i}`;
              return (
                <div className="small-6" key={checkboxId}>
                  <input
                    onClick={this.handleCheckboxClick}
                    type="checkbox"
                    value={value}
                    name={key}
                    id={checkboxId}
                  />
                  <label htmlFor={checkboxId}>{value}</label>
                </div>
              );
            })
          }
        </form>
      </Callout>
    );
  }
}

export default CategoryForm;
