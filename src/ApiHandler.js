var request = require('request');
var _ = require('underscore');

module.exports = {
	getThreads: function(accessToken, userId) {
		request({url: 'http://www.graph.facebook.com/v2.4/' + userId + '/inbox', qs: {access_token: accessToken}}, function(err, resp, body) {
			if (!error) {
				var threads = JSON.parse(body);
				_.each(threads, function(thread) {
					_.each(thread.comments, function(message) {
						console.log(message.message);
					});
				});
			}
		});
	},

	getGroups: function(accessToken, userId) {
		request({url: 'http://www.graph.facebook.com/v2.4/' + userId + '/groups', qs: {access_token: accessToken}}, function(err, resp, body) {
			if (!error) {
				var groups = JSON.parse(body);
				_.each(body.data, function(group) {
					getGroupPosts(accessToken, userId, group.id);
				});
			}
		});		
	},

	getGroupPosts: function(accessToken, userId, groupId) {
		request({url: 'http://www.graph.facebook.com/v2.4/' + groupId + '/feed', qs: {access_token: accessToken}}, function(err, resp, body) {
			if (!error) {
				var posts = JSON.parse(body);
				_.each(body, function(post) {
					console.log(post.message);
				});
			}
		});				
	},

	loadToMongo: function(dbName, data) {
		request({
			method: 'PUT',
			url: 'https://api.mongolab.com/api/1/databases/groupmehack/collections/' + dbName, 
			qs:  {apiKey: 'SM1eOEebZMzrZfmSb7u3LKXv7ZU0YUbY'},
			multipart: {
				data: [
					{
						'content-type': 'application/json',
						body: data
					}
				]
			}
		}, function(err, resp, body) {
			console.log(body);
		});
	}
};