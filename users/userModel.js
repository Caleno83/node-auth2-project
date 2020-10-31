const db = require("../data/config")

async function add(user) {
	const [id] = await db("users").insert(user)
	return findById(id)
}

// function find() {
//     return db("users").select("id", "username").orderBy("id")
// }

function find() {
	return db("users as u")
		.innerJoin("departments as d", "d.id", "u.department_id")
		.select("u.id", "u.username", "d.name as department")
}

function findBy(filter) {
	return db("users as u")
		.select("id", "username", "password")
		.where(filter)
}


function findById(id) {
	return db("users")
		.select("id", "username")
		.where({ id })
		.first()
}

function findByUsername(username) {
	return db("users as u")
		.innerJoin("departments as d", "d.id", "u.department_id")
		.where("u.username", username)
		.first("u.id", "u.username", "u.password", "d.name as department")
}

module.exports = {
    add,
    find,
    findBy,
	findById,
	findByUsername

}