import React, {Component, PropTypes} from 'react';

// Styling
import { Float, ClearFix } from 'react-foundation-components/lib/float';

import './lanes.css';

// Board component to create lanes
import { Board } from 'react-trello';

const data = require("json!./data.json");
import CardHeader from './cardHeader';
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

  getCardTitleMarkup(id, title) {
    return <CardHeader id={id} title={title} />;
  }

  getCardLabelMarkup(id, card) {
    const label = [<strong>{card.footprint}</strong>, ' kg CO2/Gast'];
    return <CardHeader id={id} className="cardLabel" label={label} />;
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
          title: this.getCardTitleMarkup(id, item.title),
          description: this.getContentMarkup(key, item),
          label: this.getCardLabelMarkup(id, item),
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
