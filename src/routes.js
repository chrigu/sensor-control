import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import MeasurementPage from './containers/Measurement';
import SensorsPage from './containers/Sensors';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="measurements" component={MeasurementPage} />
    <Route path="sensors" component={SensorsPage} />
  </Route>
);