/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'SocialMind - Social Awareness of Your Social Media',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div className="body">
        
      </div>
    );
  }
});

module.exports = HomePage;
