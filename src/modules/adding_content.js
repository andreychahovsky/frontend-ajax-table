'use strict';

module.exports =	function(table,unit) {
	table.append(`
		<tr>
			<td><img src="${unit.picture}" /></td>
			<td>${unit.name.first} ${unit.name.last}</td>
			<td>${unit.isActive}</td>
			<td>${unit.about}</td>
			<td>${unit.balance}</td>
			<td>${unit.age}</td>
			<td>${unit.registered}</td>
			<td>${unit.company}</td>
			<td><a href="mailto:${unit.email}"> ${unit.email}</a></td>
			<td><a href="tel:${unit.phone}"> ${unit.phone}</a></td>
			<td>${unit.address}</td>
		</tr>
	`);
}