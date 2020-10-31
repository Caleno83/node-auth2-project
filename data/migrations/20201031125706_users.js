
exports.up = async function(knex) {

    await knex.schema.createTable("users", (table) => {
		table.increments("id")
		table.text("username", 128).notNull().unique()
		table.text("password", 128).notNull()
        table
            .integer("department_id")
            .notNull()
            .defaultTo(1)
			.references("id")
			.inTable("departments")
			.onDelete("RESTRICT")
			.onUpdate("CASCADE")
    })

    await knex.schema.createTable("departments", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
	})
    
   
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
    await knex.schema.dropTableIfExists("departments")

}
