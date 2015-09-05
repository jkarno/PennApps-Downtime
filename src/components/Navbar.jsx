/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render() {
    return (
      <div className="navbar-top">
        <div className="navbar-title">
          <Link className="navbar-brand row" to="/">
            <span>SocialMind</span>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
