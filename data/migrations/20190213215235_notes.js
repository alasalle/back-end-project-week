exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", table => {
    table.increments("id");
    table.string("title").notNullable();
    table.text("content", "mediumtext").notNullable();
    table.text("user").notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
