'use strict';

var make = require('../modules/utils.js');
var get = require('../modules/get_request.js');
var urlUsers = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';

// ##1. List all users.
get.users(urlUsers)
	.then(make.showAllUsers);

// ##2. List active users.
get.users(urlUsers)
	.then(make.showActiveUsers);

// ##3. List all users sort by age.
get.users(urlUsers)
	.then(make.showSortByAgeUsers);

// ##4. List all users sort by full name.
get.users(urlUsers)
	.then(make.showSortByNameUsers);

// ##5. List all users whoes last name is more than 6 characters.
get.users(urlUsers)
	.then(make.showUsersLongNames);