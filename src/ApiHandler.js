var request = require('request');

module.exports = {
	getMessages: function (accessToken, userId) {
		request('http://www.graph.facebook.com/' + userId + '/inbox', function(err, resp, body) {

		});
	}
};