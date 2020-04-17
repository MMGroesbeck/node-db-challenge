
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.text("name", 128).unique().notNullable();
        tbl.text("description", 255);
        tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", (tbl) => {
        tbl.increments("id");
        tbl.text("description", 255).notNullable();
        tbl.text("notes", 255);
        tbl.boolean("completed").defaultTo(false);
        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
    .createTable("resources", (tbl) => {
        tbl.increments("id");
        tbl.text("name", 128).unique().notNullable();
        tbl.text("description", 255);
    })
    .createTable("projects_resources", (tbl) => {
        tbl.increments("id");
        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        tbl
            .integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
