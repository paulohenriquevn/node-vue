import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './routes';
import DatabaseMongo from './database';

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

class Startup {
	public app: express.Application = express();
	private databaseMongo: DatabaseMongo;

	constructor() {
		this.addMiddleware();
		this.addDatabaseConnection();
	}

	private addMiddleware() {
		this.app.use(cors(corsOptions));
		this.app.use(express.json());
		this.app.use(bodyParser.urlencoded({ extended: false }))
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