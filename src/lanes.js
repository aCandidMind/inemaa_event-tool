import React, {Component, PropTypes} from 'react';

// Styling
import { FormField, FormFieldInput, FormFieldLabel } from 'react-foundation-components/lib/forms';
import { Float, ClearFix } from 'react-foundation-components/lib/float';

import './lanes.css';

// Board component to create lanes
import { Board } from 'react-trello';

const data = require("json!./data.json");
import CardContent from './cardContent';

class Lanes extends Component {

  render() {
    return (
      <ClearFix id="lanes">
        <Float position="center" noWrap>
          <Board data={this.enrichData(data)} draggable={false} />
        </Float>
      </ClearFix>
    );
  }

  getTitleMarkup(id, title) {
    return (
      <FormField id={id}>
        <FormFieldInput type="checkbox" />
        <FormFieldLabel>{title}</FormFieldLabel>
      </FormField>
    );
  }

  getContentMarkup(kind, card) {
    return <CardContent kind={kind} card={card} />;
  }

  enrichData(data) {
    const enrichedData = {
      lanes: [
      ]
    };
    Object.keys(data).forEach((key) => {
      const lane = {id: key, title: key.toUpperCase(), cards: []};
      data[key].forEach((item, i) => {
        const id = `${key}_${i}`;
        const card = {
          id: id,
          title: this.getTitleMarkup(id, item.title),
          description: this.getContentMarkup(key, item),
          label: [<strong>{item.footprint}</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: `searchresult ${item.color}`},
        };
        lane.cards.push(card);
      });
      enrichedData.lanes.push(lane);
    });
    return enrichedData;
  }
}

export default Lanes;
