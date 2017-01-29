'use strict';

module.exports =	{
	header: function(table,h2) {
		table.append(`
			<tr>
				<th colspan='11'>`+ h2 +`</th>
			</tr>
			<tr>
				<th>Фото</th>
				<th>Полное имя</th>
				<th>Активный</th>
				<th>Описание</th>
				<th>Баланс</th>
				<th>Возраст</th>
				<th>Дата регистрации</th>
				<th>Компанния</th>
				<th>Емейл</th>
				<th>Номер телефона</th>
				<th>Адрес</th>
			</tr>
		`);
	},

	content: function(table,unit) {
		table.append(`
			<tr>
				<td><img src="${unit.picture}" alt="${unit.name.first} ${unit.name.last}" /></td>
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
};