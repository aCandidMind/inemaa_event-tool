import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
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
