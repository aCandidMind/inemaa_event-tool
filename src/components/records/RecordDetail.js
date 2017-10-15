import React, {Component} from 'react';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

class RecordDetail extends Component {

  render() {
    const {
      title,
      kind,
    } = this.props.cardDetail;

    const {
      distanceCenter,
      distanceStation,
      description,
    } = this.props.cardDetail.card.metadata;


    return (
      <section className="category record-detail grid-x">
        <header className="cell align-top">
          <h3>{capitalizeFirstLetter(kind)} „{title}“</h3>
          <span>5 Sterne</span>
          <button className="button clear">
            <span className="fa fa-close" />
          </button>
        </header>
        <article className="grid-x">
          <img className="cell small-8 record-image" src="http://placehold.it/600x288" />
          <div className="cell small-4 record-contact">
            <h4>KONTAKT</h4>
            <p>
              Claudia Maier<br/>
              Stefan Mustermann
              <div>Tel: 069 2015 546 44</div>
            </p>
            <p>
              <div>info@schlossblau.de</div>
              <a href="www.schlossblau.de">www.schlossblau.de</a>
            </p>
          </div>
          <div className="grid-x record-body">
            <div className="cell small-8">
              <h3>{title}</h3>
              <p>{description}</p>
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
              <li><span className="fa fa-dot-circle-o" /> {distanceCenter}</li>
              <li><span className="fa fa-train" /> {distanceStation}</li>
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
