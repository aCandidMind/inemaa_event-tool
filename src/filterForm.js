import React, {Component, PropTypes} from 'react';

class FilterForm extends Component {

  constructor(props) {
    super(props);
    this.values = {
      certificate: [
        'DGNP-Gold',
        'Green Globe',
        'GCB Green Member',
        'FSC-Papier',
      ],
      foodImpact: [
        'Gering',
        'Mittel',
        'Hoch'
      ],
      rating: [
        'Gering',
        'Mittel',
        'Hoch'
      ],
    };
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleCheckboxClick(e) {
    this.props.handleCheckboxClick(
      this.props.name,
      e.target.getAttribute('value')
    );
  }

  render() {
    const name = this.props.name;
    const values = this.values[name];
    return (
      <div>
        {
          values.map((value, i) => {
            const checkboxId = `${name}_${i}`;
            return (
              <div key={i}>
                <input
                  onClick={this.handleCheckboxClick}
                  type="checkbox"
                  value={value}
                  name={name}
                  id={checkboxId}
                />
                <label htmlFor={checkboxId}>{value}</label>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default FilterForm;
