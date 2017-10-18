import React, {Component} from 'react';
import $ from 'jquery';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

class RecordDetail extends Component {

  state = {
    data: {},
  };

  componentDidMount() {
    // Load the env object.
    const env = runtimeEnv();
    const {
      id,
      kind,
    } = this.props.cardDetail;
    $.getJSON(`${env.REACT_APP_API_HOST}/api/v1/${kind}s/${id}`).done((data) => {
      this.setState({data: data[kind]})
    });
  }

  render() {
    const {
      name,
      kind,
    } = this.props.cardDetail;
    const metadata = {...this.props.cardDetail.card.metadata, ...this.state.data};

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
              {metadata.contact_person_name && <div>{metadata.contact_person_name.split(';').map(name => [name, <br />])}</div>}
              {metadata.contact_person_phone && <div>Tel. {metadata.contact_person_phone.split(';').map(name => [name, <br />])}</div>}
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
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
                  <li>LOREM IPSUM DOLOR</li>
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
