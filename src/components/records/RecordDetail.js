import React, {Component} from 'react';
import $ from 'jquery';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

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
      name,
      kind,
    } = this.props.cardDetail;
    const metadata = this.state.data;
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

    return (
      <section className="category record-detail grid-x">
        <header className="cell align-top">
          <h3>{capitalizeFirstLetter(kind)} „{name}“</h3>
          <span>{metadata.rating && metadata.rating + " Sterne"}</span>
          <button className="button clear">
            <span className="fa fa-close" />
          </button>
        </header>
        <article className="grid-x">
          <img className="cell small-8 record-image" src="http://placehold.it/600x288" />
          <div className="cell small-4 record-contact">
            <h4>KONTAKT</h4>
            <div>
              {metadata.contact_person_name && <div>{metadata.contact_person_name.split(';').map((name,i) => [name, <br key={i} />])}</div>}
              {metadata.contact_person_phone && <div>Tel. {metadata.contact_person_phone.split(';').map((name,i) => [name, <br key={i} />])}</div>}
            </div>
            <div>
              {metadata.contact_person_email && <div>{metadata.contact_person_email}</div>}
              {metadata.website && <a href={metadata.website}>{metadata.website}</a>}
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
            </div>
            <div className="cell small-4">
              <img src="http://placehold.it/352x311" />
            </div>
          </div>
          <footer className="cell grid-x align-middle align-justify">
            <ul className="cell shrink distances">
              <li><span className="fa fa-dot-circle-o" /> {metadata.distanceCenter}</li>
              <li><span className="fa fa-train" /> {metadata.distanceStation}</li>
            </ul>
            <button className="cell shrink clear button large">
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
