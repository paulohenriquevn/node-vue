import { Router } from "express";
import ClientController from '../controllers/ClientController';

const clientRouter = Router();

const controllerClient = new ClientController();

clientRouter.get('/', controllerClient.get);

export default clientRouter;