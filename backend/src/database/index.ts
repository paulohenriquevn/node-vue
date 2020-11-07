/* eslint-disable no-console */
import mongoose from 'mongoose';

class DatabaseMongo {
  private DB_URI =
  `mongodb://${
    'localhost'
  }:${
    '27017'
  }/${'dbclient'}`;

  private DB_CONNECTION: mongoose.Connection;

  constructor() {
    this.DB_CONNECTION = mongoose.connection;
  }

  createConnection(): void {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(this.DB_URI);
    this.logger(this.DB_URI);
  }

  logger(uri: string): void {
    this.DB_CONNECTION = mongoose.connection;
    this.DB_CONNECTION.on('connected', () => console.log(`Mongoose conectado em ${uri}`));
    this.DB_CONNECTION.on('error', (error) => console.error.bind(console, `Mongoose - Erro de conexão: ${error}`));
    this.DB_CONNECTION.on('disconnected', () => console.log(`Mongoose está disconecato em ${uri}`));
  }

  closeConnection(message: string, callback: ()=> unknown): void {
    this.DB_CONNECTION.close(() => {
      console.log(`Mongoose foi desconectado por: ${message}`);
      callback();
    });
  }
}

export default DatabaseMongo;
