import React, {Component, PropTypes} from 'react';

// Styling
import { Float, ClearFix } from 'react-foundation-components/lib/float';

import './lanes.css';

// Board component to create lanes
import { Board } from 'react-trello';

const data = require("json!./data.json");
const firstLocation = data.location[0];
import CardHeader from './cardHeader';
import CardContent from './cardContent';

class Lanes extends Component {

  state = {
    cardId: firstLocation.id,
    cardMetadata: {associations: firstLocation.associations}
  };

  render() {
    console.log("render", this.state.cardId, this.state.cardMetadata.associations.catering.map((c) => c.id));
    return (
      <ClearFix id="lanes">
        <Float position="center" noWrap>
          <Board
            data={this.enrichData(data)}
            onCardClick={(cardId, cardMetadata) => this.handleCardClick(cardId, cardMetadata)}
            draggable={false} />
        </Float>
      </ClearFix>
    );
  }

  handleCardClick(cardId, cardMetadata) {
    console.log("handleCardClick", cardId);
    if (cardMetadata.type === 'location') {
      console.log(cardMetadata.associations.catering.map((c) => c.id));
      this.setState({cardId, cardMetadata});
    }
  }

  enrichData(data) {
    const enrichedData = {
      lanes: [
      ]
    };
    const associations = this.state.cardMetadata && this.state.cardMetadata.associations || [];
    Object.keys(data).forEach((key) => {
      const lane = {id: key, title: key.toUpperCase(), cards: []};
      data[key].forEach((item) => {
        if (key != "location" && !findAssociationById(associations, key, item.id)) {
          return;
        }

        const id = `${key}_${item.id}`;
        const card = {
          id: id,
          title: getCardTitleMarkup(id, item.title),
          description: getContentMarkup(key, item),
          label: getCardLabelMarkup(id, item),
          metadata: {
            associations: item.associations,
            type: key,
            cssClassname: `searchresult ${item.color}`
          },
        };
        lane.cards.push(card);
      });
      enrichedData.lanes.push(lane);
    });
    console.log("enrichedData", enrichedData);
    return enrichedData;
  }
}

function getCardTitleMarkup(id, title) {
  return <CardHeader id={id} title={title} />;
}

function getCardLabelMarkup(id, card) {
  const label = [<strong key={id + '_fp'}>{card.footprint}</strong>, ' kg CO2/Gast'];
  return <CardHeader id={id} className="cardLabel" label={label} />;
}

function getContentMarkup(kind, card) {
  return <CardContent kind={kind} card={card} />;
}

function findAssociationById(associations, key, id) {
  if (!associations[key] || !associations[key].length) {
    return null;
  }
  return associations[key].find(function (association) {
    return association.id === id;
  })
}
export default Lanes;
