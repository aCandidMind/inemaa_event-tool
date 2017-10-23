import React, {Component} from 'react';
import Header from './components/header/Header';
import Logo from './Logo';
import energiereferat from './images/energiereferat.png';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header noLogo={true} noWishlist={true} backgroundColor='#F2F2F2' />
        <div className="grid-y align-center align-middle">
          <h1>Events einfach <em>nachhaltig</em> geplant.</h1>
          <form action="/app">
            <div className="grid-x grid-margin-x">
              <div className="cell small-4">
                <label htmlFor="place">Wo?</label>
                <input id="place" type="text" defaultValue="Frankfurt" title="Derzeit nur Frankfurt" disabled="disabled"  />
              </div>
              <div className="cell small-4">
                <label htmlFor="occasion">Was?</label>
                <input id="occasion" type="text" placeholder="Anlass" />
              </div>
              <div className="cell small-4">
                <label htmlFor="capacity">Wieviele?</label>
                <input id="capacity" type="number" placeholder="Anzahl Personen" />
              </div>
            </div>
            <div className="grid-x align-center">
              <button className="cell small-3 button success hollow" type="submit">
                SENDEN
              </button>
            </div>
          </form>
          <div className="entities grid-y align-center">
            <div className="cell small-7">
              <div>Ein Suchportal von</div>
              <Logo size="large" style={{padding: '0.5rem 0 0'}} />
            </div>
            <div className="cell small-7">
              <div>Gefördet von</div>
              <a href="http://www.energiereferat.stadt-frankfurt.de/" target="_blank" rel="noopener noreferrer">
                <img src={energiereferat} alt="Logo des Energiereferats der Stadt Frankfurt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
