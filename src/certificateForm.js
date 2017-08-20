import React, {Component, PropTypes} from 'react';

class CertificateForm extends Component {

  render() {
    const certificates = [
      'Green Globe',
      'GCB Green Member'
    ];
    return (
      <div className="form">
        {
          certificates.map((cert, i) => {
            return (
              <div key={i}>
                <input id={`checkbox${i}`} type="checkbox" />
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
