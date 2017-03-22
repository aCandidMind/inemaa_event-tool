import React, {Component, PropTypes} from 'react';

// Styling
import { FormField, FormFieldInput, FormFieldLabel } from 'react-foundation-components/lib/forms';
import { Reveal } from 'react-foundation-components/lib/reveal';
import { CloseButton } from 'react-foundation-components/lib/close-button';
import { Callout } from 'react-foundation-components/lib/callout';


class CardHeader extends Component {

  state = {
    showDetail: false,
  };

  handleShowDetail = () => this.setState({showDetail: true});

  handleHideDetail = () => this.setState({showDetail: false});

  render() {
    return this.props.label ?
      this.getLabelMarkup() :
      this.getTitleMarkup();
  }

  getTitleMarkup() {
    const {
      id,
      title,
    } = this.props;

    return (
      <FormField id={id}>
        <FormFieldInput type="checkbox" />
        <FormFieldLabel onClick={this.handleShowDetail}>
          {title}
        </FormFieldLabel>
      </FormField>
    );
  }

  getLabelMarkup() {
    const {
      id,
      label,
    } = this.props;

    const {
      showDetail,
    } = this.state;

    return (
      <FormField id={id}>
        <FormFieldLabel onClick={this.handleShowDetail}>
          <i className="fi-info"></i>
          {label}
          <Reveal onHide={this.handleHideDetail} show={showDetail}>
            <CloseButton onClick={this.handleHideDetail} />
            <h4>Masterplan 100% Klimaschutz Frankfurt</h4>
            <p>
            Frankfurt am Main ist ein gefragter Standort für Tagungen und Kongresse. Täglich finden rund 200<br /> Veranstaltungen statt mit mehr als 50 TeilnehmerInnen statt. 2015 waren knapp 4,5<br /> Millionen Tagungsgäste in der Stadt. Damit tagten im Durchschnitt täglich mehr als <br /> 12.100 Menschen in Frankfurt am Main, was in insgesamt über 1,7 Millionen Übernachtungen und <br /> damit rund 4.660 Übernachtungen pro Tag resultierte. <br />
            </p>
            <p>
            Auch aufgrund des hohen Eventaufkommens ist Frankfurt am Main mit einer maximalen <br /> CO2-Belastung konfrontiert durch:
            </p>

            <ul>
              <li>Anreisen</li>
              <li>Stombedarf</li>
              <li>Müllaufkommen</li>
              <li>Abreisen</li>
            </ul>

            <br />

            Um weitere Zerstörung der Umwelt zu verhindern und die Klimaerwärmung auf <br /> maximal 2° Celsius zu begrenzen, darf der CO2-Verbrauch einer Person innerhalb eines Kalenderjahres<br /> 2 Tonnen CO2 nicht überschreiten.<br />
            <br />
            Das vom Erdklima tolerierbare Tagespensum CO2 einer Person liegt bei 5,5 kg CO2 pro Tag.<br />
            <br />
            2008 wurden in Frankfurt am Main 7,95 Mio. Tonnen CO2 freigesetzt – inklusive Verkehr. <br /> Die Stadt Frankfurt am Main strebt im Rahmen des „Masterplans 100 % Klimaschutz“ in <br /> den Sektoren Strom, Wärme und Verkehr den Energieverbrauch um rund 50 Prozent zu reduzieren, <br /> die verbleibenden 50 Prozent der Endenergie im Jahr 2050 sollen aus städtischen <br /> und regionalen erneuerbaren Energien erzeugt werden.<br />

            <Callout color="success">
              Eventrechner: <br />
              <br />
              Beispiel: Eine Tages-Veranstaltung mit 300 Personen, darf maximal 1.650 kg \&#40;1,65 t&#41; CO2 emittieren.<br />
              <br />
              Formel: x &#40;300&#41; Personen&#41; * 5,5 kg &#40;CO2&#41; = z &#40;Tagespensum CO2&#41;
            </Callout>
          </Reveal>
        </FormFieldLabel>
      </FormField>
    );
  }
}

CardHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
};

export default CardHeader;
