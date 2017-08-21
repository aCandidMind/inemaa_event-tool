import React, {Component, PropTypes} from 'react';
import Collapse, { Panel } from 'rc-collapse';

import { Callout } from 'react-foundation-components/lib/callout';
import 'rc-collapse/assets/index.css';

import CertificateForm from './certificateForm';


class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
    };
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <Callout id={this.props.id}>
        <h5>Filter</h5>
        <Collapse
          accordion={true}
          onChange={this.onChange.bind(this)}
          activeKey={this.state.activeKey}
        >
          {this.getItems()}
        </Collapse>
      </Callout>
    );
  }

  getItems() {
    const items = [
      {
        header: 'Zertifikate',
        body: <CertificateForm handleCheckboxClick={this.props.handleCheckboxClick} />
      },
      {
        header: 'Food-Impact',
        body: <CertificateForm />
      },
      {
        header: 'Bewertung',
        body: <CertificateForm />
      },
    ];
    return items.map((item) =>
      <Panel header={item.header} key={item.header}>
        {item.body}
      </Panel>
    );
  }

  onChange(activeKey) {
    this.setState({
      activeKey,
    });
  }
}

export default Filters;
