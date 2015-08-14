'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./component/app');
var config = require('./config');

console.log.apply(console, config.consoleMessage);
if (config.environment === 'staging') {
  console.log('STAGING');
}

var routes = (
  <Route handler={App} path='/'>
  </Route>
);
