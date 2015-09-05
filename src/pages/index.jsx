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
  getInitialState() {
    return {posts: []};
  },
  render() {
    var listItems = this.state.posts.map(function(item) {
      return <li key={item.id}>{item.message}</li>;
    });
    return (
      <div className="facebookButton">
        <button type="button" onClick={this.handleFacebookClick}>Pull Facebook Data</button>
        <button type="button" onClick={this.handleStatusClick}>Log Statuses</button>
        <ul>{listItems}</ul>
      </div>
    );
  },
  handleFacebookClick(e) {
    FB.login(function(response){
      window.localStorage.setItem("accessToken", response.authResponse.accessToken);
      window.localStorage.setItem("userID", response.authResponse.userID);
    }, {scope: 'public_profile,user_status,user_posts,read_page_mailboxes'});
  },
  handleStatusClick(e) {
    var reactClass = this;
    var token = window.localStorage.getItem("accessToken");
    FB.api('/me/posts?limit=999',
      {accessToken: token},
      function(response) {
        reactClass.state.posts = response.data;
        reactClass.forceUpdate();
      }
    );
  }
});

module.exports = HomePage;
