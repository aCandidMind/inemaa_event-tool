import React, {Component, PropTypes} from 'react';

// Styling
import { Callout } from 'react-foundation-components/lib/callout';
import { MediaObjectSection, MediaObject } from 'react-foundation-components/lib/media-object';
import { Button } from 'react-foundation-components/lib/button';
import { FormField, FormFieldInput, FormFieldLabel } from 'react-foundation-components/lib/forms';
import { Label } from 'react-foundation-components/lib/label';
import './lanes.css';
import reportImage from './report.png';

// Board component to create lanes
import { Board } from 'react-trello';

function getTitleMarkup(id, title) {
  return (
    <FormField id={id}>
      <FormFieldInput type="checkbox" />
      <FormFieldLabel>{title}</FormFieldLabel>
    </FormField>
  );
}

function getTagsMarkup(...tags) {
  return (
    <div className="resultTags">
      {tags.map(tag => <Label color="primary">{tag}</Label>)}
    </div>
  );
}

const data = {
  lanes: [
    {
      id: 'location',
      title: 'Location',
      cards: [
        {
          id: '1',
          title: getTitleMarkup('1', 'Kap Hanau am Fluß'),
          description: getTagsMarkup('DGNP-Gold', 'Green Meetings'),
          label: [<strong>3</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: 'searchresult green'},
        },
        {
          id: '2',
          title: getTitleMarkup('2', 'Hanau am Rhein, Berufsbildungswerk'),
          description: getTagsMarkup('Ökostrom', 'Solarenergie', 'FSC-Papier', 'ÖPNV'),
          label: [<strong>6</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: 'searchresult yellow'},
        },
        {
          id: '3',
          title: getTitleMarkup('3', 'Hanauer Schul- und Bildungswerk'),
          description: getTagsMarkup('Strommix', 'JWD'),
          label: [<strong>20</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: 'searchresult red'},
        },
      ]
    },
    {
      id: 'merchandiser',
      title: 'Merchandiser',
      cards: []
    }
  ]
};

class LanesContainer extends Component {
  render () {
    return (
      <div>
        <Callout color id="reportCallout">
          <MediaObject>
            <MediaObjectSection>
              <img role="presentation" src={reportImage} /><br />
              <Button><i className="fi-print"></i>Auswahl drucken</Button>
            </MediaObjectSection>
            <MediaObjectSection>
              <h6>Auswahl zusammenstellen und Drucken</h6>
              <p>
                Wählen sie unten aus den jeweiligen Bereichen so viele
                Anbieter, wie sie wollen und lassen sie sich dann einen
                ausdruckbaren Report anzeigen.
              </p>
            </MediaObjectSection>
          </MediaObject>
        </Callout>
        <Board data={data} draggable={false} />
      </div>
    );
  }
}

export default LanesContainer;
