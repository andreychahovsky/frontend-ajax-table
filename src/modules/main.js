'use strict';

var $ = require('jquery');
var addHeader = require('../modules/adding_header.js');
var addContent = require('../modules/adding_content.js');
var make = require('../modules/module_with_functions.js');

var allusersElem = $('.all-users');

// ##1. Список всех пользователей.
$.ajax({
	url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
	success: function(usersData){
		addHeader(allusersElem,'1. Список всех пользователей.');
		usersData.forEach(function(user){
			addContent(allusersElem,user);
		});
	}
});

// ##2. Список активных пользователей.
$.ajax({
	url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
	success: function(usersData){
		addHeader(allusersElem,'2. Список активных пользователей.');
		usersData.forEach(function(user){
			if (user.isActive === true) {
				addContent(allusersElem,user);
			}
		});
	}
});

// ##3. Список всех пользователей, отсортированных по возрасту.
$.ajax({
	url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
	success: function(usersData){
		addHeader(allusersElem,'3. Список всех пользователей, отсортированных по возрасту.');
		usersData.sort(make.compareAge);
		usersData.forEach(function(user){
			addContent(allusersElem,user);
		});
	}
});

// ##4. Список всех пользователей, отсортированных по имени.
$.ajax({
	url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
	success: function(usersData){
		addHeader(allusersElem,'4. Список всех пользователей, отсортированных по имени.');
		usersData.sort(make.compareName);
		usersData.forEach(function(user){
			addContent(allusersElem,user);
		});
	}
});

// ##5. Пользователи с фамилией не короче 6 символов.
$.ajax({
	url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
	success: function(usersData){
		addHeader(allusersElem,'5. Пользователи с фамилией не короче 6 символов.');
		usersData.forEach(function(user){
			if (user.name.last.length > 5) {
				addContent(allusersElem,user);
			}
		});
	}
});