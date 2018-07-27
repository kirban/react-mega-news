module.exports = config = {
    port: 5000,
    host: 'localhost',
    db_dialect: 'mysql',
    db_name: 'reactmeganews',
    db_user: 'nodeadmin',
    db_pass: 'sT16ui24st16ui24',
    db_pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    operatorsAliases: false
}
