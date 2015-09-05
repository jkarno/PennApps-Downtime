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
      <div className="facebookButton">
        <button type="button" onClick={this.handleFacebookClick}>Pull Facebook Data</button>
      </div>
    );
  },
  handleFacebookClick(e) {
    FB.api(
      "/me",
      function (response) {
        console.log(response);
      }
    );
  }
});

module.exports = HomePage;
