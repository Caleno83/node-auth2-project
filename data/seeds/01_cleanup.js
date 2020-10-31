
exports.seed = async function(knex) {
  await knex("departments").truncate()
  await knex("users").truncate()
}