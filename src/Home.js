import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './components/header/Header';


class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header noWishlist={true} />
        <div className="grid-y align-center align-middle">
          <h1>Events einfach <em>nachhaltig</em> geplant</h1>
          <form action="/app">
            <div className="cell grid-x">
              <label>
                Wo?
                <input type="text" defaultValue="Frankfurt" />
              </label>
              <label>
                Wieviele?
                <input type="text" defaultValue="10" />
              </label>
              <label>
                Was?
                <input type="text" defaultValue="Kongress" />
              </label>
            </div>
            <button className="cell button success hollow" type="submit">
              SENDEN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
