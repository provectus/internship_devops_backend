exports.up = (pgm) => {
    pgm.createTable('cities', {
      id: 'id',
      city_name: { type: 'varchar(50)', notNull: true },
    })
    pgm.createIndex('cities', 'id')
  }