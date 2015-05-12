import React from 'react';
import debug from 'debug';
import { navigateAction } from 'fluxible-router';
import app from './app';


const _debug = debug('fluxible-demo');
debug.enable('*');

window.React = React;

_debug('create context');
var context = app.createContext();

const url = location.pathname;

_debug(`executeAction: ${url}`);
context.executeAction(navigateAction, {url: url}, function (err) {
  window.context = context;
  const mountNode = document.getElementById('app');
  React.render(context.createElement(), mountNode, () => {
    _debug('react rendered');
  });
});
