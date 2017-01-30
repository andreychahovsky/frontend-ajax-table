'use strict';

var $ = require('jquery');
var add = require('../modules/adding_html.js');
var allusersElem = $('.all-users');

function compareAge (userA, userB) {
 	return userA.age - userB.age;
}

function compareName (userA, userB) {
	var fullNameA = userA.name.first + userA.name.last,
		fullNameB = userB.name.first + userB.name.last;
	if (fullNameA < fullNameB) {
		return -1;
	}
	else {
		return 1;
	}
}

module.exports = {
	showAllUsers: function (usersData) {
		add.header(allusersElem,'1. Список всех пользователей.');
		usersData.forEach(function(user){
			add.content(allusersElem,user);
		});
	},

	showActiveUsers: function (usersData) {
		add.header(allusersElem,'2. Список активных пользователей.');
		usersData.forEach(function (user) {
			if (user.isActive) {
				add.content(allusersElem, user);
			}
		});
	},

	showSortByAgeUsers: function (usersData) {
		add.header(allusersElem,'3. Список всех пользователей, отсортированных по возрасту.');
		usersData.sort(compareAge);
		usersData.forEach(function(user){
			add.content(allusersElem,user);
		});
	},

	showSortByNameUsers: function (usersData) {
		add.header(allusersElem,'4. Список всех пользователей, отсортированных по имени.');
		usersData.sort(compareName);
		usersData.forEach(function(user){
			add.content(allusersElem,user);
		});
	},

	showUsersLongNames: function (usersData) {
		add.header(allusersElem,'5. Пользователи с фамилией не короче 6 символов.');
		usersData.forEach(function(user){
			if (user.name.last.length > 5) {
				add.content(allusersElem,user);
			}
		});
	}
};