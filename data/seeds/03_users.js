
exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 1, username: "janedoe", password: "abc123", department_id: 1 },
    { id: 2, username: "johndoe", password: "123abc", department_id: 2 },
	])
}
