import { Router } from "express";

const clientRouter = Router();

clientRouter.get('/', (request, response) => {
    return response.json([]);
});

export default clientRouter;