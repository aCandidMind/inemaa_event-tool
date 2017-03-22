import React, {Component, PropTypes} from 'react';

// Styling
import { Callout } from 'react-foundation-components/lib/callout';
import { MediaObjectSection, MediaObject } from 'react-foundation-components/lib/media-object';
import { Button } from 'react-foundation-components/lib/button';
import { Reveal } from 'react-foundation-components/lib/reveal';
import { CloseButton } from 'react-foundation-components/lib/close-button';
import reportImage from './report.png';


class ReportCallout extends Component {

  state = {
    showReport: false,
  };

  handleShowReport = () => this.setState({showReport: true});

  handleHideReport = () => this.setState({showReport: false});

  render() {
    const {
      showReport,
    } = this.state;

    return (
      <Callout color id="reportCallout">
        <MediaObject>
          <MediaObjectSection>
            <img role="presentation" src={reportImage} /><br />
            <Button onClick={this.handleShowReport}><i className="fi-print"></i>Auswahl drucken</Button>
            <Reveal onHide={this.handleHideReport} show={showReport}>
              <CloseButton onClick={this.handleHideReport} />
              <h1>Ihre Auswahl</h1>
              <ol>
                <li>Kap Hanau am Fluß</li>
                <li>Anderer Anbieter</li>
                <li>Noch ein Anbieter</li>
              </ol>
            </Reveal>
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
    );
  }

}

export default ReportCallout;
