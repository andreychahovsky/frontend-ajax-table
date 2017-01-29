'use strict';

var make = require('../modules/utils.js');
var urlUsers = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';

// ##1. List all users.
make.getUsers(urlUsers, make.showAllUsers);

// ##2. List active users.
make.getUsers(urlUsers, make.showActiveUsers);

// ##3. List all users sort by age.
make.getUsers(urlUsers, make.showSortByAgeUsers);

// ##4. List all users sort by full name.
make.getUsers(urlUsers, make.showSortByNameUsers);

// ##5. List all users whoes last name is more than 6 characters.
make.getUsers(urlUsers, make.showUsersLongNames);