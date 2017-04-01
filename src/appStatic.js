import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import template from './appTemplate.ejs';

if (typeof global.document !== 'undefined') {
  const rootEl = global.document.getElementById('app');
  console.log('appRender');
  ReactDOM.render(
    <App />,
    rootEl,
  );
}

export default (data) => {
  const assets = Object.keys(data.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/^(?!splash).*\.css$/));
  const js = assets.filter(value => value.match(/^(?!splash).*\.js$/));
  console.log('appTemplate');
  console.log(assets);
  return {
    'index.html': template({ css, js, ...data}),
  };
}
