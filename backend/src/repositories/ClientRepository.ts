import mongoose from 'mongoose';
import ClientSchema, { Client } from "../models/client";
import { FilterClient } from '../dto/FilterClient';
import { ResultClient } from '../dto/ResultClient';
class ClientRepository {
  private model: mongoose.Model<Client>;

  constructor() {
    this.model = ClientSchema;
  }

  async find(filter: FilterClient | null): Promise<ResultClient> {
    const { name, page, limit, sort = 'firstDate' } = filter;

    let query: any = {};
    if (name) {
      query.name = { $regex: `.*${name}.*`, $options: 'i' }
    }

    const count = await ClientSchema.countDocuments(query);

    return this.model.find(query).limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sort)
      .then((data: Client[]) => {
        const items = data.map((client) => {
          return client.toJSON();
        });
        return new ResultClient(items, Math.ceil(count / limit), page, count);
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}

export default ClientRepository;