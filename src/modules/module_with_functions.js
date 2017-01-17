'use strict';

module.exports = {
	compareAge: function(userA, userB) {
  	return userA.age - userB.age;
	},
	compareName: function (userA, userB) {
		var fullNameA = userA.name.first + userA.name.last,
			fullNameB = userB.name.first + userB.name.last;
		if (fullNameA < fullNameB) {
			return false;
		}
		else {
			return true;
		}
	}
}