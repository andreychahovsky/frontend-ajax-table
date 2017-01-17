'use strict';

module.exports =	function(table,h2) {
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
}