import { Router } from "express";
import clientRouter from "./client";

const routes = Router();

routes.use('/client', clientRouter)

export default routes;