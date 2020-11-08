/* eslint-disable no-console */
import mongoose from 'mongoose';

const db: any = {
  name: process.env.DB_NAME ? process.env.DB_NAME : 'dbclient',
  port: process.env.DB_PORT ? process.env.DB_PORT : 27017,
  host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost'
};

class DatabaseMongo {
  private DB_URI =
    `mongodb://${db.host
    }:${db.port
    }/${db.name}`;

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

  closeConnection(message: string, callback: () => unknown): void {
    this.DB_CONNECTION.close(() => {
      console.log(`Mongoose foi desconectado por: ${message}`);
      callback();
    });
  }
}

export default DatabaseMongo;
