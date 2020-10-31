const hashedPassword = "$2a$14$qHqCbXUImiBOgXlFNX47wuA7uFWNGNAZutYLvOeye9eotewGlfYV6"

exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 1, username: "janedoe", password: hashedPassword, department_id: 1 },
		{ id: 2, username: "johndoe", password: hashedPassword, department_id: 2 },
		{ id: 3, username: "William", password: hashedPassword, department_id: 2 },
		{ id: 4, username: "Mary", password: hashedPassword, department_id: 1 },
	])
}
