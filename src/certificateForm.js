import React, {Component, PropTypes} from 'react';

class CertificateForm extends Component {

  state = {
    activeIds: '1',
  };

  handleCheckboxClick(e) {
    console.log("e", e);
    this.props.handleCheckboxClick(e.value)
  }

  render() {
    const certificates = [
      'DGNP-Gold',
      'Green Globe',
      'GCB Green Member'
    ];
    return (
      <div className="form">
        {
          certificates.map((cert, i) => {
            return (
              <div key={i}>
                <input onClick={this.handleCheckboxClick} type="checkbox" id={`checkbox${i}`}  />
                <label htmlFor={`checkbox${i}`}>{cert}</label>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default CertificateForm;
