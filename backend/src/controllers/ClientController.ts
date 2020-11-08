import { Request, Response } from "express";
import ClientRepository, { FilterClient } from "../repositories/ClientRepository";

const clientRepository = new ClientRepository();

class ClientController {
  async get(request: Request, response: Response) {
    const { name, sort, page = 1, limit = 10 } = request.query;
    const filter = new FilterClient();
    filter.name = name as string;
    filter.sort = sort as string;
    filter.page = page as number;
    filter.limit = limit as number;
    const values = await clientRepository.findBy(filter);
    return response.json(values);
  }
}

export default ClientController;