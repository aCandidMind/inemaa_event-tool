import React, {Component} from 'react';
import $ from 'jquery';
import { getItemsFromSemicolonField, displayAsDistance, capitalizeFirstLetter } from '../../utils';

class RecordDetail extends Component {

  state = {
    data: {},
    loading: true,
  };

  fetchData(props) {
    const {
      id,
      kind,
    } = props.cardDetail;
    $.getJSON(`${window.apiHost}/api/v1/${kind}s/${id}`).done((data) => {
      this.setState({data: data[kind], loading: false});
    });
    this.setState({loading: true});
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  render() {
    if (this.state.loading) {
      return (
        <section className="category record-detail grid-x">
          Lädt ...
        </section>
      );
    }

    const {
      id,
      name,
      kind,
    } = this.props.cardDetail;
    const metadata = this.state.data;
    const pictures = (metadata.pictures || []) && metadata.pictures.split(';').map(p => p.trim());
    if (pictures.length == 0) {
      pictures.push("http://placehold.it/400x288?text=Platzhalterbild");
    }
    const occasions = getItemsFromSemicolonField(metadata.occasions);
    const keyFacts = [];
    const translations = window.translations[kind];
    const nonBooleanFields = ['capacity', 'rooms', 'area', 'main_kitchen'];
    nonBooleanFields.forEach(field => {
      if (metadata[field] !== '' && metadata[field]) {
        keyFacts.push(translations[field] + metadata[field]);
      }
    });
    Object.keys(metadata).forEach(key => {
      // all fields that have a boolean true value are key facts
      if (metadata[key] === true) {
        const text = kind === 'catering' ? key : window.translations[kind][key];
        keyFacts.push(text);
      }
    });

    let websiteURL = metadata.website;
    let websiteText = null;
    if (websiteURL) {
      const linkForParsing = document.createElement('a');
      if (!websiteURL.match(/https?:\/\//)) {
        websiteURL = 'http://' + websiteURL;
      }
      linkForParsing.href = websiteURL;
      websiteText = 'Direktlink ' + linkForParsing.hostname;
    }

    let map = metadata.map && metadata.map.match(/src="(.+?)"/);
    map = map && map[1];

    return (
      <section className="category record-detail grid-x">
        <header className="cell align-top">
          <h3>{capitalizeFirstLetter(kind)} „{name}“</h3>
          <span>{metadata.rating && metadata.rating + " Sterne"}</span>
          <button className="button clear" onClick={this.props.handleCloseClick}>
            <span className="fa fa-close" />
          </button>
        </header>
        <article className="grid-x">
          <div className="cell small-8 record-image">
            {pictures.map((pic, i) => <img alt="Bild des Angebots" src={pic} />)}
          </div>
          <div className="cell small-4 record-contact">
            <h4>KONTAKT</h4>
            <div>
              {metadata.contact_person_name && <div>{getItemsFromSemicolonField(metadata.contact_person_name).map((name,i) => [name, <br key={i} />])}</div>}
              {metadata.contact_person_phone && <div>Tel. {getItemsFromSemicolonField(metadata.contact_person_phone).map((name,i) => [name, <br key={i} />])}</div>}
            </div>
            <div>
              {metadata.contact_person_email && <div>{metadata.contact_person_email}</div>}
              {websiteURL && <a href={websiteURL}>{websiteText}</a>}
            </div>
          </div>
          <div className="grid-x record-body">
            <div className="cell small-8">
              <h3>{name}</h3>
              <p>{metadata.description || 'Lorem ipsum dolor sit amet'}</p>
              <section>
                <h4>KEY FACTS</h4>
                <ul className="grid-x small-up-2 key-facts">
                  {keyFacts.map((fact, i) => <li key={i}>{fact}</li>)}
                </ul>
              </section>
              <section>
                <h4>ANLÄSSE</h4>
                <ul className="grid-x small-up-2 occasions">
                  {occasions.map((occasion, i) => <li key={i}>{occasion}</li>)}
                </ul>
              </section>
            </div>
            <div className="record-address cell small-4">
              <div>
                {metadata.address}
              </div>
              <div>
                {metadata.zip} {metadata.city}
              </div>
              {map && <iframe src={map} title="Karte die Adresse anzeigt" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  />}
            </div>
          </div>
          <footer className="cell grid-x align-middle align-justify">
            <ul className="cell shrink distances">
              <li><span className="fa fa-dot-circle-o" /> {displayAsDistance(metadata.distanceCenter)}</li>
              <li><span className="fa fa-train" /> {displayAsDistance(metadata.distanceStation)}</li>
            </ul>
            <button className="cell shrink clear button large"
                    onClick={() => this.props.handleSaveClick(kind, id)}>
              <span className="fa fa-paperclip" />
              Merken
            </button>
          </footer>
        </article>
      </section>
    );
  }
}

export default RecordDetail;
