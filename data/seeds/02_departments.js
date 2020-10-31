
exports.seed = async function(knex) {
	await knex("departments").insert([
		{ id: 1, name: "IT" },
		{ id: 2, name: "HR" },
	])
}

