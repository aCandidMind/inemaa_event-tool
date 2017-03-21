import React, {Component, PropTypes} from 'react';
import { Board } from 'react-trello';

const data = {
  lanes: [
    {
      id: 'location',
      title: 'Location',
      cards: [
        {
          id: '1',
          title: 'Kap Hanau am Fluß',
          description: 'DGNP-Gold, Green Meetings',
          label: [<strong>3</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: 'searchresult green'},
        },
        {
          id: '2',
          title: 'Hanau am Rhein, Berufsbildungswerk',
          description: 'Ökostrom, Solarenergie, FSC-Papier, ÖPNV',
          label: [<strong>6</strong>, ' kg CO2/Gast'],
          metadata: {cssClassname: 'searchresult yellow'},
        },
        {
          id: '3',
          title: 'Hanauer Schul- und Bildungswerk',
          description: 'Strommix, JWD',
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
    return <Board data={data} />;
  }
}

export default LanesContainer;
