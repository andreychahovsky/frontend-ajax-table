'use strict';

var $ = require('jquery');

module.exports = {
	users: function (url) {
		return new Promise (function (fulfilled, rejected) {
			$.ajax({
				url: url,
				success: function (response) {
					fulfilled (response);
				},
				error: function () {
					rejected ();
				}
			});
		});
	}
};