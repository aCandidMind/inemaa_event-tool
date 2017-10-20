import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import Home from './Home';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';



const supportsHistory = 'pushState' in window.history;
ReactDOM.render(
  <Router forceRefresh={!supportsHistory}>
    <div id="router-root">
      <Route exact path="/" component={Home}/>
      <Route path="/app" component={App}/>
      <Route path="/ueber_uns" component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const script = document.createElement("script");
script.src = process.env.PUBLIC_URL + "/foundation.min.js";
script.async = true;
script.onload = function () {
    $(document).foundation();
};
document.body.appendChild(script);
