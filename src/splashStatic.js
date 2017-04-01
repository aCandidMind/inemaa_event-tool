import React from 'react';
import ReactDOM from 'react-dom';
import App from './splash.js'
import template from './splashTemplate.ejs'

if (typeof global.document !== 'undefined') {
  const rootEl = global.document.getElementById('app');
  console.log('splashRender');
  ReactDOM.render(
    <App />,
    rootEl,
  );
}

export default (data) => {
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/splash.*\.css$/));
  const js = assets.filter(value => value.match(/splash.*\.js$/));
  console.log('splashTemplate');
  console.log(assets);
  return {
    'splash.html': template({ css, js, ...data}),
  };
}
