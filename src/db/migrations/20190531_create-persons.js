const up = async (db) => {
  await db.schema.createTable('persons', (t) => {
    t.increments('id').unsigned().primary();
    t.string('person_id').notNull();
    t.dateTime('created_at').notNull().defaultsTo(db.fn.now());
  });
};

const down = async (db) => {
  await db.schema.dropTableIfExists('persons');
};

module.exports = {
  up,
  down,
};
