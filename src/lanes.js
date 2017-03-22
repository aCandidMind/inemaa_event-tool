import React, {Component, PropTypes} from 'react';

// Styling
import { FormField, FormFieldInput, FormFieldLabel } from 'react-foundation-components/lib/forms';
import { Label } from 'react-foundation-components/lib/label';
import './lanes.css';


// Board component to create lanes
import { Board } from 'react-trello';

const data = require("json!./data.json");

function getTitleMarkup(id, title) {
  return (
    <FormField id={id}>
      <FormFieldInput type="checkbox" />
      <FormFieldLabel>{title}</FormFieldLabel>
    </FormField>
  );
}

function getTagsMarkup(tags) {
  return (
    <div className="resultTags">
      {tags.map(tag => <Label color="primary">{tag}</Label>)}
    </div>
  );
}

function enrichData(data) {
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
        title: getTitleMarkup(id, item.title),
        description: getTagsMarkup(item.tags),
        label: [<strong>{item.footprint}</strong>, ' kg CO2/Gast'],
        metadata: {cssClassname: `searchresult ${item.color}`},
      };
      lane.cards.push(card);
    });
    enrichedData.lanes.push(lane);
  });
  return enrichedData;
}

class Lanes extends Component {
  render() {
    return <Board data={enrichData(data)} draggable={false} />;
  }
}

export default Lanes;