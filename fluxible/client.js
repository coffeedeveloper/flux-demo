import React from 'react';
import debug from 'debug';
import { navigateAction } from 'fluxible-router';

const _debug = debug('fluxible-demo');

import app from './app';

import Application from './components/Application';

debug.enable('*');

window.React = React;

_debug('create context');
const context = app.createContext();

context.executeAction(navigateAction, {url: location.pathname}, function (err) {
  console.log(err);
});
