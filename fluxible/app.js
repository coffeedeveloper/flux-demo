import React from 'react';
import Fluxible from 'fluxible';
import RouteStore from './stores/RouteStore';
import ApplicationStore from './stores/ApplicationStore';
import Application from './components/Application';

let app = new Fluxible({
  component: Application,
  stores: [
    RouteStore,
    ApplicationStore
  ]
});

export default app;
