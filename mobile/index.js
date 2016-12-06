import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import getRouterRoutes from './getRouterRoutes';

render(
  <Router
    history={hashHistory}
    routes={getRouterRoutes()}
  />, document.getElementById('app'));
