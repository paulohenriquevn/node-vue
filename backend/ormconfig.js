module.exports = {
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  username: '',
  password: '',
  database: 'dbclient',
  entities: ['src/models/**/*.ts'],
  schema: 'client',
  migrations: [__dirname + '/src/migrations/**/**.ts'],
  cli: {
    migrationsDir: './src/migrations/',
  },
};
