import React, { Component } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import $ from 'jquery';
import Score from './components/Score';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Records from './components/records/Records';

class App extends Component {

  state = {
    data: {
      location: [],
      catering: [],
    },
    selectedId: {
      location: null,
      catering: null,
    },
    scores: {
      // 100 because doing nothing is the most sustainable
      location: 100,
      catering: 100,
    },
    saved: {
      location: [],
      catering: [],
      total_count: 0,
    }
  };

  handleSelect(kind, id) {
    // update the selectedId for the state
    const selectedId = this.state.selectedId;
    selectedId[kind] = id;

    // and update the score for this kind
    const scores = this.state.scores;
    this.state.data[kind].forEach(record => {
      if (record.id === id) {
        scores[kind] = record.score;
      }
    });
    this.setState({scores: scores, selectedId: selectedId});
  }

  handleSaveClick(kind, id) {
    const saved = this.state.saved;
    if (saved[kind].indexOf(id) === -1) {
      saved[kind].push(id);
      saved.total_count += 1;
      this.setState({saved: saved});
    }
  }

  handleWishListClick() {
    alert('locations: ' + this.state.saved.location.join(','));
    alert('caterings: ' + this.state.saved.catering.join(','));
  }

  componentDidMount() {
    // Load the env object.
    const env = runtimeEnv();
    window.apiHost = env.REACT_APP_API_HOST;

    $.getJSON(window.apiHost + '/api/v1/all').done((data) => {
      const dataState = {
        location: data.locations,
        catering: data.caterings,
      };
      this.setState({data: dataState})
    });

    window.translations = {
      location: {
        "accommodation": "Unterkunft vorhanden",
        "air_conditioner": "Klimaanlage",
        "area": "Fläche: ",
        "rooms": "Räume: ",
        "canvas": "Leinwand/Mulitmediawand",
        "capacity": "Kapazität: ",
        "central_location": "Zentral / ÖPNV-Anbindung",
        "flexible_catering": "Flexibles Catering",
        "heater": "Heizung",
        "internet_access": "Internet Zugang",
        "kitchen": "Küche vorhanden",
        "outdoor_use": "Außenbereich",
        "parking": "Parkplätze",
        "projector": "Beamer/Projektor",
        "provided_dishes": "Geschirr mietbar",
        "provided_furniture": "Mobiliar mietbar",
        "service_staff": "Service Personal buchbar",
        "sound_system": "Sound System",
        "stage": "Bühne ",
        "truck_access": "LKW Zufahrt möglich",
        "wifi": "WLAN",
      },
      catering: {
        "main_kitchen": "Hauptküche: ",
      },
      accomodation: {
        //TODO: once accomodation fields are defined, translate them here
      }
    };
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas position-left reveal-for-medium reveal-for-large" id="filters" data-off-canvas>
          <Score scores={this.state.scores} />
          <Filters />
        </div>

        <div id="main" className="off-canvas-content" data-off-canvas-content>
          <Header handleWishListClick={this.handleWishListClick.bind(this)}
                  wishlistCount={this.state.saved.total_count} />
          <Records title="Location"
                   records={this.state.data.location}
                   selectedId={this.state.selectedId.location}
                   handleSelect={this.handleSelect.bind(this)}
                   handleSaveClick={this.handleSaveClick.bind(this)} />
          <Records title="Catering"
                   records={this.state.data.catering}
                   selectedId={this.state.selectedId.catering}
                   handleSelect={this.handleSelect.bind(this)}
                   handleSaveClick={this.handleSaveClick.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
