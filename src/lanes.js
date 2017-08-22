import React, {Component, PropTypes} from 'react';

import './lanes.css';

// Board component to create lanes
import { Board } from 'react-trello';

const data = require("json!./data.json");
const firstLocation = data.location[0];
import GuidanceTicker from './guidanceTicker';
import CardHeader from './cardHeader';
import CardContent from './cardContent';

class Lanes extends Component {

  state = {
    cardId: firstLocation.id,
    cardMetadata: {associations: firstLocation.associations, score: firstLocation.score},
    data: this.enrichData(data, firstLocation.associations),
  };

  render() {
    console.log("render", this.state.cardId, this.state.cardMetadata.associations.catering.map((c) => c.id));
    return (
      <Board
        data={this.state.data}
        onCardClick={(cardId, cardMetadata) => this.handleCardClick(cardId, cardMetadata)}
        eventBusHandle={(handle) => this.boardEventBus = handle}
        draggable={false} />
    );
  }

  componentDidMount() {
    this.props.publishLaneChoice(this.state.cardMetadata.score, 'location');
    this.board = document.getElementById('lanes');
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.boardEventBus) {
      console.log('REFRESH_BOARD', nextState.data.lanes[1].cards.map((c) => c.id));
      this.boardEventBus.publish({type: 'REFRESH_BOARD', data: nextState.data});
    }
  }

  handleCardClick(cardId, cardMetadata) {
    console.log("handleCardClick", cardId);
    this.addClassToCards(cardId, cardMetadata, 'selected');

    if (cardMetadata.type === 'location') {
      const associations = cardMetadata && cardMetadata.associations || [];
      console.log("setState will be called with these ids", associations.catering.map((c) => c.id));
      this.setState({cardId, cardMetadata, data: this.enrichData(data, associations)});
    }
    this.props.publishLaneChoice(cardMetadata.score, cardMetadata.type);
  }

  addClassToCards(cardId, cardMetadata, className) {
    // add CSS class & remove it from previous card
    const cards = this.board.getElementsByTagName('article');
    let clickedCard = null;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const dataId = card.getAttribute('data-id');
      const isInArray = cardId && cardId.length && cardId.indexOf(dataId) !== -1;
      if (dataId === cardId || isInArray) {
        clickedCard = card;
        clickedCard.classList.add(className);
      } else {
        // for other cards of the chosen type remove the selected class
        if (dataId.split('_')[0] === cardMetadata.type) {
          card.classList.remove(className);
        }
      }
    }
  }

  handleCheckboxClick(name, value) {
    const checkboxes = document.getElementsByName(name);
    function areAllCheckboxesUnchecked() {
      for(let i = 0; i < checkboxes.length; i++) {
         if (checkboxes.item(i).checked) {
           return false;
         }
      }
      return true;
    }

    const certDGNP = checkboxes[0].checked;
    const certFSC = checkboxes[3].checked;
    if (certDGNP || certFSC) {
      const visible = [];
      if (certDGNP) {
        visible.push('location_1');
      }
      if (certFSC) {
        visible.push('location_2');
      }
      this.addClassToCards(visible, {type: 'location'}, 'visible');
      this.addClassToCards(null, {type: 'catering'}, 'visible');
    } else if (areAllCheckboxesUnchecked()) {
      const cards = this.board.getElementsByTagName('article');
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.classList.add('visible');
      }
    } else {
      this.addClassToCards(null, {type: 'location'}, 'visible');
      this.addClassToCards(null, {type: 'catering'}, 'visible');
    }
  }

  enrichData(data, associations) {
    const enrichedData = {
      lanes: [
      ]
    };
    const guidances = {
      location: <GuidanceTicker data={[
        { id: 'a', text: 'Location mit Green Globe Zertifkat auswählen' },
        { id: 'b', text: 'Möglichst nah am Bahnhof' },
        { id: 'c', text: 'GCB Green Member ist ein exzellentes Siegel' },
      ]} />,
      catering: <GuidanceTicker data={[
        { id: 'a', text: 'Catering bei Location ist ideal' },
        { id: 'b', text: 'Rohkost spart Strom' },
        { id: 'c', text: 'Regionale Kost hat einen besseren CO² Fußabdruck' },
        { id: 'd', text: 'Ein, zwei Gänge reichen' },
      ]} />,
    };
    console.log("associations", associations);
    Object.keys(data).forEach((key) => {
      const lane = {id: key, title: key.toUpperCase(), cards: [], laneIntro: guidances[key]};
      data[key].forEach((item) => {
        if (key != "location" && !findAssociationById(associations, key, item.id)) {
          return;
        }

        const id = `${key}_${item.id}`;
        const card = {
          id: id,
          title: getCardTitleMarkup(id, item.title, item.color),
          description: getContentMarkup(key, item),
          label: getCardLabelMarkup(id, item),
          metadata: {
            associations: item.associations,
            type: key,
            score: item.score,
            cssClassname: "searchresult visible"
          },
        };
        // merge above metadata with those from the data request
        card.metadata = {...card.metadata, ...item.metadata};
        lane.cards.push(card);
      });
      enrichedData.lanes.push(lane);
    });
    console.log("enrichedData", enrichedData);
    return enrichedData;
  }
}

Lanes.propTypes = {
  publishLaneChoice: PropTypes.func.isRequired,
};

function getCardTitleMarkup(id, title, color) {
  return <CardHeader id={id} title={title} color={color} />;
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
