var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

/**
 * Main application.  Subviews included at <RouteHandler />
 *
 */
var App = React.createClass({
  render () {
    return (
      <div>
        <main id='site-body' role='main'>
          <RouteHandler />
        </main>
      </div>
    );
  }
});

App.displayName = 'App';

module.exports = App;
