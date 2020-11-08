import { Request, Response } from "express";
import ClientRepository from "../repositories/ClientRepository";
import { FilterClient } from "../dto/FilterClient";

const clientRepository = new ClientRepository();

class ClientController {
  async get(request: Request, response: Response) {
    const { name, sort, page = 1, limit = 15 } = request.query;
    const filter = new FilterClient(name as string, page as number, limit as number, sort as string,);
    const values = await clientRepository.find(filter);
    return response.json(values);
  }
}

export default ClientController;