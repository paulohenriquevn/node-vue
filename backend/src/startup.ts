import express from 'express';
import routes from './routes';
import DatabaseMongo from './database';

class Startup {
	public app: express.Application = express();
	private databaseMongo: DatabaseMongo;

	constructor() {
		this.addMiddleware();
		this.addDatabaseConnection();
	}

	private addMiddleware() {
		this.app.use(express.json());
		this.app.use(routes);
	}

	private addDatabaseConnection() {
		this.databaseMongo = new DatabaseMongo();
		this.databaseMongo.createConnection();
	}

	public closedataBaseConnection(message: string, callback: () => unknown) {
		this.databaseMongo.closeConnection(message, () => callback());
	}
}

export default new Startup();